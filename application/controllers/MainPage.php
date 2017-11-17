<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class MainPage extends CI_Controller {
	
	
	public function index()
	{
		$this->smarty->display(__CLASS__.'/index.tpl');
	}
}
