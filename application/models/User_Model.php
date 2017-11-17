<?php
	class User_Model extends CI_Model 
	{
		function __construct()
		{
			
			parent::__construct();
			$this->load->database();
		}
		
		function getUserForFBId($fb_u_id)
		{
			$sql ="SELECT * FROM user WHERE fb_u_id = ?";
			$bind = array(
				$fb_u_id
			);
			$query = $this->db->query($sql, $bind);
			$row =  $query->row_array();
			$query->free_result();
			return $row;
		}
		
		function getUserForLogin($ary= array())
		{
			$sql="	SELECT * 
					FROM user 
					WHERE ((u_name =? OR u_email=? ) AND u_passwd=?)  OR (fb_u_id =? AND  fb_u_id <> 'NULL') AND u_status ='on'";
			$bind = array(
				$ary['u_name'],
				$ary['u_email'],
				md5($ary['u_passwd']),
				$ary['fb_u_id'],
			);
			$query = $this->db->query($sql, $bind);
			$row =  $query->row_array();
			$query->free_result();
			return $row;
		}
		
		function isUserExist($ary = array())
		{
			$row = array();
			$sql = "SELECT COUNT(*) AS  total FROM user WHERE u_name = ? OR u_email =?";
			$bind = array(
				$ary['u_name'],
				$ary['u_email'],
			);
			$query = $this->db->query($sql, $bind);
			$row =  $query->row_array();
			$query->free_result();
			return $row['total'];
		}
		
		
		function insert($ary = array())
		{
			$output = array();
			$sql ="	INSERT INTO user (u_name, u_passwd, u_add_datetime, u_email ,fb_u_id, u_reg_type)
					VALUES(?, ?, NOW(), ?,?,?)";
			$bind = array(
				$ary['u_name'],
				md5($ary['u_passwd']),
				$ary['u_email'],
				$ary['fb_u_id'],
				$ary['u_reg_type'],
			);
			$query = $this->db->query($sql, $bind);
			$output['affected_rows'] = $this->db->affected_rows();
			return $output;
		}
	}
?>