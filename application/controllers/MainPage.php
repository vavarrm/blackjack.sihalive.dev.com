<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class MainPage extends CI_Controller {
	
	public function __construct() 
	{
		parent::__construct();
		$this->food_language_ary = $this->language->load('food');
		$this->load->model('Food_Model', 'food');	
    }
	
	
	public function privacy()
	{
		$this->smarty->displayFrame(__CLASS__.'/privacy.tpl');
	}
	
	public function index()
	{
		$this->smarty->displayFrame(__CLASS__.'/index.tpl');
	}
}
