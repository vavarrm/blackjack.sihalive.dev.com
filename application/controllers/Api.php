<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class Api extends CI_Controller {
	
	private $request = array();
	
	public function __construct() 
	{
		parent::__construct();	
		$this->request = json_decode(trim(file_get_contents('php://input'), 'r'), true);
		$this->load->model('Food_Model', 'food');
		$this->load->model('User_Model', 'user');
    }
	
	
	public function fbLogin()
	{
		$output['body']=array();
		$output['status'] = '200';
		$output['title'] ='FB登入';
		try 
		{
			if(empty($this->request))
			{
				$output['status'] ='000';
				throw new Exception("request is empty");
			}
			
			$response =  $this->fb->get('/me?fields=id,name,email', $this->request['accessToken']);
			if(empty($response))
			{
				throw new Exception("fb response empty");
			}
			$fbuser = $response->getGraphUser();
			$user = $this->user->getUserForFBId($fbuser['id']);
			
			if(empty($user))
			{
				throw new Exception("user is no exist");
			}
			
			$user = $this->doLogin($user);
			$output['body']['user'] = $this->session->userdata('sihalive_user');
			
		}catch(Exception $e)
		{
			$output['status'] = '000';
			$output['message'] = $e->getMessage();
		}
		
		$this->response($output);
	}
	
	public function fbReg()
	{
		$output['body']=array();
		$output['status'] = '200';
		$output['title'] ='FB注册';
		try 
		{
			if(empty($this->request))
			{
				$output['status'] ='000';
				throw new Exception("request is empty");
			}
			$response =  $this->fb->get('/me?fields=id,name,email', $this->request['accessToken']);
			if(empty($response))
			{
				throw new Exception("fb response empty");
			}
			$fbuser = $response->getGraphUser();
			$user = $this->user->getUserForFBId($fbuser['id']);
			if(!empty($user))
			{
				throw new Exception("fb user is exist");
			}
			
			
			$insert = array(
				'u_name'		=>NULL,
				'u_passwd'		=>NULL,
				'u_email'		=>NULL,
				'u_reg_type'	=>'fb',
				'fb_u_id'		=>$fbuser['id']
			);
			$row = $this->user->insert($insert);
			if($row['affected_rows'] <0)
			{
				throw new Exception("insert user error");
			}
			$user = $this->user->getUserForFBId($fbuser['id']);
			$user = $this->doLogin($user);
			$output['body']['user'] = $this->session->userdata('sihalive_user');
			
		}catch(Exception $e)
		{
			$output['status'] = '000';
			$output['message'] = $e->getMessage();
		}
		
		$this->response($output);
	}
	
	public function logout()
	{
		$output['body']=array();
		$output['status'] = '200';
		$output['title'] ='登出';
		try 
		{
			$this->session->unset_userdata('sihalive_user');
		}catch(Exception $e)
		{
			$output['message'] = $e->getMessage();
		}
		
		$this->response($output);
	}
	
	private function doLogin($ary)
	{
		$row = $this->user->getUserForLogin($ary);
		$private_key = $this->config->item('private_key');
		if(empty($row))
		{
			$output['status'] ='000';
			throw new Exception("user empty");
		}else
		{
			$token = $row['u_name'].':'.$row['u_email'].
			$user = array(
				'u_name'  =>$row['u_name'],
				'u_email' =>$row['u_email'],
				'u_id' =>$row['u_id'],
				'fb_u_id' =>$row['fb_u_id'],
				'sess'	  =>$this->decryption->encrypt($row['u_id'].':'.$private_key)
			);
			$this->session->set_userdata('sihalive_user', $user);
			return $user;
		}
		
	}
	
	public function getUser()
	{
		$output['body']=array();
		$output['status'] = '200';
		$output['title'] ='取得登入訊息';
		try 
		{
			$output['body']['user'] = $this->session->userdata('sihalive_user');
		}catch(Exception $e)
		{
			$output['status'] = '000';
			$output['message'] = $e->getMessage();
		}
		
		$this->response($output);
	}
	
	public function login()
	{
		$output['body']=array();
		$output['status'] = '200';
		$output['title'] ='登入';
		try 
		{
			if(empty($this->request))
			{
				throw new Exception("request is empty");
			}
			
			if(empty($this->request['username_email']))
			{
				throw new Exception("username_email is empty");
			}
			
			if(empty($this->request['u_passwd']))
			{
				throw new Exception("u_passwd is empty");
			}
			$this->request['u_name'] = $this->request['username_email'];
			$this->request['u_email'] = $this->request['username_email'];
			$user = $this->doLogin($this->request);
			$output['body']['user'] = $this->session->userdata('sihalive_user');
		}catch(Exception $e)
		{
			$output['status'] = '000';
			$output['message'] = $e->getMessage();
		}
		
		$this->response($output);
	}
	
	public function registration()
	{
		$output['body']=array();
		$output['status'] = '200';
		$output['title'] ='註冊';
		try 
		{
			if(empty($this->request))
			{
				throw new Exception("request is empty");
			}
			
			if(empty($this->request['u_name']))
			{
				throw new Exception("u_name is empty ");
			}
			
			if(strlen($this->request['u_name']) > 20)
			{
				throw new Exception("u_name length over 20 ");
			}
			
			if(strlen($this->request['u_name']) < 6)
			{
				throw new Exception("u_name length less 6 ");
			}
			
			if(empty($this->request['u_email']))
			{
				throw new Exception("u_email is empty ");
			}
			
			if(!preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/", $this->request['u_email'])) 
			{
				throw new Exception("email format is wrong ");
			}
			
			if(empty($this->request['u_passwd']))
			{
				throw new Exception("u_passwd is empty ");
			}
			
			if(strlen($this->request['u_passwd']) > 12)
			{
				throw new Exception("u_passwd length over 12 ");
			}
			
			if(strlen($this->request['u_passwd']) < 6)
			{
				throw new Exception("u_passwd length less 6 ");
			}
			
			if(empty($this->request['u_passwd_confirm']))
			{
				throw new Exception("u_passwd_confirm is empty ");
			}
			
			if($this->request['u_passwd'] != $this->request['u_passwd_confirm'] )
			{
				throw new Exception("password confirm error ");
			}
			
			$isUserExist = $this->user->isUserExist($this->request);
			if($isUserExist >0)
			{
				throw new Exception("username or email is exist");
			}

			$row = $this->user->insert($this->request);
			if($row['affected_rows'] <0)
			{
				throw new Exception("insert user error");
			}
			$output['message'] ="insert OK";
			$user = $this->doLogin($this->request);
			
		}catch(Exception $e)
		{
			$output['status'] = '000';
			$output['message'] = $e->getMessage();
		}
		
		$this->response($output);
	}
	
	public function checkout()
	{
		$output['body']=array();
		$output['status'] = '200';
		$output['title'] ='结帐';
		try 
		{
			if(empty($this->request))
			{
				throw new Exception("request is empty");
			}
			
			$user  = $this->session->userdata('sihalive_user');
			
			if(empty($user))
			{
				throw new Exception("user no login");
			}
			
			$this->food->inserdOrder($this->request);
			$ary =array(
				'action'	=>'order_alert'
			);
			$output['body']['order_alert'] = $this->socketIO->push($ary);
			
		}catch(Exception $e)
		{
			$output['status'] ='000';
			$output['message'] = $e->getMessage();
		}
		
		$this->response($output);
	}
	
	public function getProduct()
	{
		$get= $this->input->get();
		
		$status = 100;
		$body =array();
		$output['title'] ='取得产品';
		try 
		{
			$output['body']['data'] = $this->food->getProductForFid($get['f_id']);
			$output['status'] = $status ;
		}catch(Exception $e)
		{
			$output['status'] ='000';
			$output['message'] = $e->getMessage();
		}
		
		$this->response($output);
		
	}
	
	/*
	取得菜單分類
	*/
	public function getCategory()
	{
		$status = 100;
		$body =array();
		$title ='取得菜單分類';
		try 
		{
			$output['body']['data'] = $this->food->getCategory();
			$output['status'] = $status ;;
		}catch(Exception $e)
		{
			$output['status'] ='000';
			$output['message'] = $e->getMessage();
		}
		
		$this->response($output);
	}
	
	private function response($output)
	{
		
		$output = array(
			'body'		=>$output['body'],
			'title'		=>$output['title'],
			'status'	=>$output['status'],
			'message'	=>$output['message']
		);
		
		header('Content-Type: application/json');
		echo json_encode($output , true);
	}
}
