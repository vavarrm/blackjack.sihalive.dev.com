<div class="rd-navbar-wrap rd-navbar-default"  ng-controller="navCtrl">
  <nav data-layout="rd-navbar-fixed" data-sm-layout="rd-navbar-fixed" data-md-device-layout="rd-navbar-fixed" data-lg-layout="rd-navbar-static" data-lg-device-layout="rd-navbar-static" data-stick-up-clone="false" data-md-stick-up-offset="100px" data-lg-stick-up-offset="150px" class="rd-navbar">
	<div class="shell shell-fluid">
	  <div class="rd-navbar-inner">
		<div class="rd-navbar-nav-wrap-outer"> 
		  <div class="rd-navbar-aside">
			<div class="rd-navbar-aside-content">
			  <!-- RD Navbar Panel-->
			  <div class="rd-navbar-panel rd-navbar-aside-left">
				<!-- RD Navbar Toggle-->
				<button data-rd-navbar-toggle=".rd-navbar-nav-wrap" class="rd-navbar-toggle"><span></span></button>
				<div class="cart-right-top" >
					<span class="icon icon-sm mdi mdi-cart-outline"  ></span>
					<span >(</span>
					<span class="label-inline big text-white cartnums"   ng-model="cartnums" ng-change="change()" ng-bind = "cartnums"></span>
					<span >)</span>
				</div>
				<!-- RD Navbar Brand-->
					<a href="index.html" class="rd-navbar-brand brand" >
						<div class="brand-logo" >
							<img src="/images/brand-232x49.png"  style="margin-top:6px;" alt="" width="232" height="49"/>
						</div>
					</a>
			  </div>
			  <div class="rd-navbar-aside-right">
				<!-- RD Navbar Aside-->
				<ul class="list-links list-inline text-left">
				  <li>
					<div class="unit unit-horizontal unit-middle unit-spacing-xs">
					  <div class="unit-left"><span class="icon icon-circle icon-gray-dark icon-xxs mdi mdi-map-marker text-middle"></span></div>
					  <div class="unit-body">
						<address class="contact-info"><a href="#" class="link-default link-xs">267 Park Avenue <br class="visible-md visible-lg"> New York, NY 90210</a></address>
					  </div>
					</div>
				  </li>
				  <li>
					<div class="unit unit-horizontal unit-middle unit-spacing-xs">
					  <div class="unit-left"><span class="icon icon-circle icon-gray-dark icon-xxs mdi mdi-phone text-middle"></span></div>
					  <div class="unit-body">
						<address class="contact-info"><a href="callto:#" class="link-default link-xs">1-800-1234-567</a><span class="reveal-block text-base link-xs">Mon – Sat: 9:00–18:00</span></address>
					  </div>
					</div>
				  </li>
				  <li>
					<ul class="list-inline list-inline-sm">
					  <li><a href="#" class="link-silver-light"><span class="icon icon-sm-mod-1 fa fa-instagram"></span></a></li>
					  <li><a  target="_blank" href="https://www.facebook.com/Sihalive-187813995113064/" class="link-silver-light"><span class="icon icon-sm-mod-1 fa fa-facebook"></span></a></li>
					  <li><a  target="blank" href="/Login/" class="link-silver-light"><span class="icon icon-sm-mod-1 fa fa-user"></span></a></li>
					  <{*
					  <li><a href="#" class="link-silver-light"><span class="icon icon-sm-mod-1 fa fa-twitter"></span></a></li>
					  <li><a href="#" class="link-silver-light"><span class="icon icon-sm-mod-1 fa fa-google-plus"></span></a></li>
					  *}>
					</ul>
				  </li>
				</ul>
			  </div>
			</div>
		  </div>
		</div>
		<!-- RD Navbar Nav-->
		<div class="rd-navbar-nav-wrap">
		  <!-- RD Navbar Shop-->
		  <div class="rd-navbar-shop">
			<a href="/ShopCart/order" class="link link-shop link-default">
			  <span class="big text-gray-light">Cart</span>
			  <span class="icon icon-sm mdi mdi-cart-outline" ></span>
			  <span class="label-inline big text-white cartnums"  ng-model="cartnums" ng-change="change()" ng-bind = "cartnums"></span>
			</a>
		  </div>
		  <!-- RD Navbar Nav-->
		  <ul class="rd-navbar-nav">
			<li>
				<a href="/">Home</a>
			</li>		
			<li>
				<a href="/Faq">FAQ</a>
			</li>
			<li>
				<a href="/Contacts">Contacts</a>
			</li>
			<li><a href="#">Menu</a>
			  <!-- RD Navbar Dropdown-->
			  <ul class="rd-navbar-dropdown menu-img-wrap">
				<li class="menu-img"><a href="/Menu"><img src="/images/menu-food-01.png" alt="" width="88" height="60"><span>Sushi</span></a></li>
				<li class="menu-img"><a href="/Menu"><img src="/images/menu-food-02.png" alt="" width="88" height="60"><span>Burgers</span></a></li>
				<li class="menu-img"><a href="/Menu"><img src="/images/menu-food-03.png" alt="" width="88" height="60"><span>Pizza</span></a></li>
				<li class="menu-img"><a href="/Menu"><img src="/images/menu-food-04.png" alt="" width="88" height="60"><span>Barbecue</span></a></li>
				<li class="menu-img"><a href="/Menu"><img src="/images/menu-food-05.png" alt="" width="88" height="60"><span>Sandwiches</span></a></li>
				<li class="menu-img"><a href="/Menu"><img src="/images/menu-food-06.png" alt="" width="88" height="60"><span>Mexican</span></a></li>
			  </ul>
			</li>
			<li>
				<a href="contacts.html">Coming soon</a>
			</li>
			<li>
				<a href="#">Language</a>
				<!-- RD Navbar Dropdown-->
				<ul class="rd-navbar-dropdown">
					<li >
						<a ng-click="setLanguage('en')">english</a>
					</li>
					<li>
						<a ng-click="setLanguage('zh-cn')">chinese</a>
					</li>
				</ul>
			</li>
			<li  ng-show="islogin">
				<a href="#">user</a>
				<!-- RD Navbar Dropdown-->
				<ul class="rd-navbar-dropdown">
					<li>
						<a href="/Food/orderList">orderlist</a>
					</li>
					<li>
						<a href="gallery-grid.html">setting</a>
					</li>
					<li>
						<a ng-click="logout()">logout</a>
					</li>
				</ul>
			</li>
			<{*
			<li class="active"><a href="#">Pages</a>
			  <!-- RD Navbar Megamenu-->
			  <ul class="rd-navbar-megamenu">
				<li>
				  <h6 class="rd-megamenu-header">Pages</h6>
				  <ul class="list-marked">
					<li><a href="careers.html">Careers</a></li>
					<li><a href="faq.html">FAQ</a></li>
					<li><a href="deals.html">Deals</a></li>
					<li><a href="coming-soon.html">Coming Soon</a></li>
					<li><a href="404.html">404 Page</a></li>
					<li><a href="503.html">503 Page</a></li>
					<li><a href="search-results.html">Search Results</a></li>
					<li><a href="maintenance.html">Maintenance Page</a></li>
					<li><a href="privacy.html">Terms of Use</a></li>
					<li><a href="member-profile.html">Member profile</a></li>
					<li><a href="team.html">Our Team</a></li>
					<li><a href="testimonials.html">Testimonials</a></li>
				  </ul>
				</li>
				<li>
				  <h6 class="rd-megamenu-header">Additional Pages</h6>
				  <ul class="list-marked">
					<li><a href="typography.html">Typography</a></li>
					<li><a href="buttons.html">Buttons</a></li>
					<li><a href="forms.html">Forms</a></li>
					<li><a href="icons.html">Icons</a></li>
					<li><a href="grid.html">Grid</a></li>
					<li><a href="tabs-and-accordions.html">Tabs &amp; Accordions</a></li>
					<li><a href="progress-bars.html">Progress Bars</a></li>
					<li><a href="tables.html">Tables</a></li>
					<li><a href="login-register.html">Login/Register </a></li>
				  </ul>
				</li>
				<li>
				  <h6 class="rd-megamenu-header">Menu</h6>
				  <ul class="list-marked">
					<li><a href="menu-classic.html">Classic Menu</a></li>
					<li><a href="menu-modern.html">Modern Menu</a></li>
					<li><a href="menu-single.html">Single Menu</a></li>
					<li><a href="shop-single.html">Single Product</a></li>
					<li><a href="shop-cart.html">Cart page</a></li>
				  </ul>
				</li>
			  </ul>
			</li>
			<li><a href="#">Gallery</a>
			  <!-- RD Navbar Dropdown-->
			  <ul class="rd-navbar-dropdown">
				<li><a href="gallery-grid.html">Grid Gallery</a>
				</li>
				<li><a href="gallery-cobbles.html">Cobbles Gallery</a>
				</li>
				<li><a href="gallery-masonry.html">Masonry Gallery</a>
				</li>
				<li><a href="gallery-condensed.html">Grid without Padding</a>
				</li>
			  </ul>
			</li>
			<li><a href="contacts.html">Contacts</a>
			</li>
			<li><a href="#">News</a>
			  <!-- RD Navbar Dropdown-->
			  <ul class="rd-navbar-dropdown">
				<li><a href="blog-classic.html">Classic Blog</a>
				</li>
				<li><a href="blog-grid.html">Grid Blog</a>
				</li>
				<li><a href="blog-masonry.html">Masonry Blog</a>
				</li>
				<li><a href="blog-modern.html">Modern Blog</a>
				</li>
				<li><a href="blog-post.html">Single Post</a>
				</li>
			  </ul>
			</li>
			*}>
		  </ul>
		  <div class="rd-navbar-aside-right">
			<ul class="list-links list-inline text-left">
			  <li>
				<div class="unit unit-horizontal unit-middle unit-spacing-xs">
				  <div class="unit-left"><span class="icon icon-circle icon-gray-dark icon-xxs mdi mdi-map-marker text-middle"></span></div>
				  <div class="unit-body">
					<address class="contact-info"><a href="#" class="link-default link-xs">267 Park Avenue <br class="visible-md visible-lg"> New York, NY 90210</a></address>
				  </div>
				</div>
			  </li>
			  <li>
				<div class="unit unit-horizontal unit-middle unit-spacing-xs">
				  <div class="unit-left"><span class="icon icon-circle icon-gray-dark icon-xxs mdi mdi-phone text-middle"></span></div>
				  <div class="unit-body">
					<address class="contact-info"><a href="callto:#" class="link-default link-xs">1-800-1234-567</a><span class="reveal-block text-base link-xs">Mon – Sat: 9:00–18:00</span></address>
				  </div>
				</div>
			  </li>
			  <li>
				<ul class="list-inline list-inline-sm">
				  <li><a href="#" class="link-silver-light"><span class="icon icon-sm-mod-1 fa fa-instagram"></span></a></li>
				  <li><a href="#" class="link-silver-light"><span class="icon icon-sm-mod-1 fa fa-facebook"></span></a></li>
				  <li><a href="#" class="link-silver-light"><span class="icon icon-sm-mod-1 fa fa-twitter"></span></a></li>
				  <li><a href="#" class="link-silver-light"><span class="icon icon-sm-mod-1 fa fa-google-plus"></span></a></li>
				</ul>
			  </li>
			</ul>
		  </div>
		</div>
	  </div>
	</div>
  </nav>
</div>
<script>
	window.onload = function ()
	{
		if($(document).width()<=1024)
		{
			$('.cartnums').removeClass('text-white').addClass('text-black');
		}
		
		$( window ).resize(function() {
			if($(document).width()<=1024)
			{
				$('.cartnums').removeClass('text-white').addClass('text-black');
			}else
			{
				$('.cartnums').removeClass('text-black').addClass('text-white');
			}
		});
	}
</script>