<?php
	class Food_Model extends CI_Model 
	{
		function __construct()
		{
			
			parent::__construct();
			$this->load->database();
		}
	
		public function getLastOid()
		{
			$sql = 'SELECT 
						o_id 
					FROM 
						order_list 
					WHERE  
						DATE_FORMAT(o_datetime, "%Y-%m-%d") =  DATE_FORMAT(NOW(), "%Y-%m-%d")
					ORDER BY o_id DESC';
			$query = $this->db->query($sql, $bind);
			$row =  $query->row_array();
			$query->free_result();
			return $row;
		}
	
		public function inserdOrder($ary = array())
		{
			$output = array();
			$this->db->trans_start(); 
			$row = $this->getLastOid();
			if(empty($row))
			{
				$row['o_id'] = date('Ymd').sprintf('%06d',1);
			}else
			{
				$row['o_id']+=1;
			}
			
			$user  = $this->session->userdata('sihalive_user');
			$sql="INSERT INTO order_list (o_id,o_datetime, u_id) VALUES(?,NOW(), ?)";
			$query = $this->db->query($sql, array($row['o_id'], $user['u_id']));
		

			if(!empty($ary['order_list']))
			{
				foreach($ary['order_list'] as  $key => $value )
				{
					if(!isset($value['discount']))
					{
						$value['discount'] = 1;
					}
					$sql ="INSERT INTO order_detail(o_id, od_item_index, f_id, od_num, od_price, od_discount, od_add_datetime	)
						   VALUES(?, ?, ?, ?, ?, ?, NOW())";
					$insert = array(
						$row['o_id'] ,
						$key+1,
						$value['f_id'],
						$value['order_num'],
						$value['price'],
						$value['discount'],
					);
					$query = $this->db->query($sql, $insert);
				}
			}
			$this->db->trans_complete();
			if ($this->db->trans_status()===  FALSE)
			{ 
				
			}
		}
	
		public function getProductForFid($f_id)
		{
			$sql="	SELECT * 
					FROM `food` AS f LEFT JOIN category AS ca ON f.ca_id = ca.ca_id
					WHERE f_id =?";
			$bind = array(
				$f_id
			);
			$query = $this->db->query($sql, $bind);
			$rows  =  $query->row_array();
			$query->free_result();
			return $rows;
		}
	
		public function getCategory()
		{
			$sql="SELECT * FROM `category` ORDER BY ca_id";
			$query = $this->db->query($sql, $bind);
			$rows  =  $query->result_array();
			$query->free_result();
			return $rows;
		}
		
		public function getFoodClassList()
		{
		
		}
		
		public function getFoodForMenu($where = array())
		{
			$where_str =" 1 = 1 AND f_is_del='0'";
			if(!empty($where) )
			{
				foreach($where as $key =>$vale)
				{
					$where_str.=sprintf(" AND %s = ?", $key);
					$bind[] = $value;
				}
			}
			$sql ="	SELECT * 
					FROM `food` AS f
						LEFT JOIN `category` AS ca ON f.ca_id = ca.ca_id
					WHERE ".$where_str."
					ORDER BY f.f_id DESC";
			$query = $this->db->query($sql, $bind);
			$rows  =  $query->result_array();
			$query->free_result();
			return $rows;
		}
	}
?>