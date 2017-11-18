<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class MainPage extends CI_Controller {
	
	
	public function index()
	{
		$this->smarty->display(__CLASS__.'/index.tpl');
	}
	
	public function doDemo()
	{
		$box =3;
		$cards = $this->poker->initCard();
		$this->poker->shuffle($cards);
		$this->poker->cutCards($cards);
		$lastcard = $this->poker->lastCard($cards);
		$startindex = $this->poker->burnCard($cards);
		while($startindex<$lastcard)
		{
			$startindex++;
			$player = array();
			$banker = array();
			for($i=0;$i<$box;$i++)
			{
				$card = explode('-', $cards[$startindex]);
				$player[$i][] = $card[1];
				$startindex++;
			}
			$card = explode('-', $cards[$startindex]);
			$banker[] = $card[1];
			$startindex++;
			for($i=0;$i<$box;$i++)
			{
				$card = explode('-', $cards[$startindex]);
				$player[$i][] = $card[1];
				$startindex++;
			}
			
			/**/
			$card = explode('-', $cards[$startindex]);
			$banker[] = $card[1];
			$bankerPoint = $this->poker->getPoint($banker);
			while(($bankerPoint['max']<17 && $bankerPoint['max']>0 )|| ($bankerPoint['min'] <17 && $bankerPoint['min'] >0) && $bankerPoint['max'] !=100 )
			{
				$startindex++;
				$card = explode('-', $cards[$startindex]);
				$banker[] = $card[1];
				$bankerPoint = $this->poker->getPoint($banker);
			}
			var_dump($banker);
			var_dump($bankerPoint);
			echo "<hr>";
		}
	}
}
