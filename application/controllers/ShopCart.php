<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class ShopCart extends CI_Controller {
	
	public function __construct() 
	{
		parent::__construct();
		$this->shopcart_language_ary = $this->language->load('shopcart');
    }
	
	public function order()
	{
		$this->smarty->assign(array(
			'shopLanguageAry'	=>$this->shopcart_language_ary,
		));
		$this->smarty->displayFrame(__CLASS__.'/shop-cart.tpl');
	}
	
}
