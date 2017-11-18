<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class MyPoker
{
	private $CI ;
	public function __construct() 
	{
		$this->suit= array(
			's',
			'h',
			'c',
			'd',
		);
		$this->CI =& get_instance();
	}
	
	public function Shuffle(&$cards, $old_cards=array())
	{
		if(!empty($old_cards))
		{
			$cards = $old_cards;
		}	
		shuffle($cards);
		shuffle($cards);
		shuffle($cards);
		shuffle($cards);
		shuffle($cards);
		shuffle($cards);

		$this->fisherYatesShuffle($cards);
		$this->fisherYatesShuffle($cards);
		$this->fisherYatesShuffle($cards);
		
		return $cards;
	}
	
	public function getPoint($ary)
	{
		$point = array(
			'min' =>0,
			'max' =>0,
		);
		foreach($ary as $value)
		{
			if($value ==1)
			{
				$point['min']+=1;
				$point['max']+=11;
			}elseif($value  >9)
			{
				$point['min']+=10;
				$point['max']+=10;	
			}else
			{
				$point['min']+=$value;
				$point['max']+=$value;
			}
		}
		
		if(count($ary) ==2 && $point['max'] ==21)
		{
			$point['max'] =100;
		}elseif($point['max'] >21 && $point['min'] >21)
		{
			$point['min']=0;
			$point['max']=0;	
		}elseif($point['max'] >21 && $point['min'] <21)
		{
			// $point['min']=$point['max'];
		}
		
		return $point;
	}
	
	public function cutCards(&$items)
	{
		$cards_count = count($items);
		$min = ceil($cards_count*0.25);
		$max = ceil($cards_count*0.75);
		$rand = rand($min, $max);
		$card1=array_slice($items, 0,$rand);
		$card2=array_slice($items,$rand);
		$items = array_merge($card2,$card1);
	}
	
	public function lastCard(&$items,$cut=2)
	{
		$cards =count($items)/52;	
		$index = ($cards - $cut)*52/count($items)*count($items)+rand(1,10)+rand(1,0)*-1;
		return $index;
	}
	
	public function burnCard(&$items)
	{
		$card = $items[0];
		$ary = explode('-',$card);
		if($ary[1]>=10)
		{
			return 10;
		}else
		{
			return $ary[1];
		}
	}
	
	public function make_seed()
	{
	  list($usec, $sec) = explode(' ', microtime());
	  return $sec + $usec * 1000000;
	}
	
	public function fisherYatesShuffle(&$items)
	{
		srand($this->make_seed());
		$seed = rand();
		@mt_srand($seed);
		for ($i = count($items) - 1; $i > 0; $i--)
		{
			$j = @mt_rand(0, $i);
			$tmp = $items[$i];
			$items[$i] = $items[$j];
			$items[$j] = $tmp;
		}
	}
	
	public function initCard($nums=8)
	{
		$cards = array();
		for($i=0;$i<$nums;$i++)
		{
			for($k=1;$k<=13;$k++)
			{
				for($j=0;$j<4;$j++)
				{
					$cards[] = sprintf("%s-%s",$this->suit[$j],$k);
				}
			}
		}
		return $cards;
	}
}