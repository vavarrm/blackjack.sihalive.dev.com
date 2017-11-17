  <main class="page-content">
	<!-- Breadcrumbs & Page title-->
	<{include file="Frontend/breadcrumbs.tpl"}>
	<section class="text-center text-sm-left section-50 section-sm-top-100 section-sm-bottom-100">
	  <div class="shell">
		<div class="range range-xs-center">
		  <div class="cell-md-8">
			<h4 class="font-default text-center">Get in Touch</h4>
			<p class="text-center">We are available 24/7 by fax, e-mail or by phone. You can also use our quick contact form to ask a question about our services that we offer on a regular basis. We would be pleased to answer your questions.</p>
			<!-- RD Mailform-->
			<form data-form-output="form-output-global" data-form-type="contact" method="post" action="bat/rd-mailform.php" class="rd-mailform form-contact-line text-left offset-top-35">
			  <div class="form-inline-flex">
				<div class="form-group">
				  <label for="contact-name" class="form-label form-label-outside">First name</label>
				  <input id="contact-name" type="text" placeholder="Enter your name" name="name" data-constraints="@Required" class="form-control">
				</div>
				<div class="form-group">
				  <label for="contact-phone" class="form-label form-label-outside">Phone</label>
				  <input id="contact-phone" type="text" placeholder="Enter phone" name="phone" data-constraints="@Numeric @Required" class="form-control">
				</div>
			  </div>
			  <div class="form-group offset-top-15">
				<label for="message" class="form-label form-label-outside">your message</label>
				<textarea id="message" placeholder="Write your message here" name="message" data-constraints="@Required" class="form-control"></textarea>
			  </div>
			  <div class="offset-top-15">
				<div class="form-inline-flex">
				  <div class="form-group">
					<label for="contact-email-2" class="form-label form-label-outside">E-mail</label>
					<input id="contact-email-2" type="email" placeholder="Enter your email" name="email" data-constraints="@Email @Required" class="form-control">
				  </div>
				  <div class="form-group">
					<button type="submit" class="btn btn-primary btn-fullwidth">Send message</button>
				  </div>
				</div>
			  </div>
			</form>
		  </div>
		  <div class="cell-md-4 offset-top-50 offset-md-top-0 text-left">
			<aside class="inset-lg-left-70">
			  <div class="range">
				<div class="cell-xs-6 cell-md-12">
				  <div class="h6 text-uppercase">Follow us</div>
				  <div class="text-subline offset-top-15"></div>
				  <div class="offset-top-25">
					<ul class="list-inline">
					  <li><a href="#" class="icon icon-xs link-gray-light fa-facebook"></a></li>
					  <li><a href="#" class="icon icon-xs link-gray-light fa-twitter"></a></li>
					  <li><a href="#" class="icon icon-xs link-gray-light fa-google-plus"></a></li>
					  <li><a href="#" class="icon icon-xs link-gray-light fa-instagram"></a></li>
					</ul>
				  </div>
				</div>
				<div class="cell-xs-6 cell-md-12 offset-top-50 offset-xs-top-0 offset-md-top-50">
				  <div class="h6 text-uppercase">Phone</div>
				  <div class="text-subline offset-top-15"></div>
				  <div class="offset-top-25">
					<div class="unit unit-horizontal unit-middle unit-spacing-xs">
					  <div class="unit-left"><span class="icon icon-xs icon-primary text-middle mdi mdi-phone"></span></div>
					  <div class="unit-body"><a href="callto:#" class="link-default">1-800-1234-567</a></div>
					</div>
				  </div>
				</div>
				<div class="cell-xs-6 cell-md-12 offset-top-50">
				  <div class="h6 text-uppercase">Address</div>
				  <div class="text-subline offset-top-15"></div>
				  <div class="offset-top-25 unit unit-horizontal unit-spacing-xs">
					<div class="unit-left"><span class="icon icon-xs icon-primary text-middle mdi mdi-map-marker"></span></div>
					<div class="unit-body"><a href="#" class="link-default">267 Park Avenue New York, NY 90210</a></div>
				  </div>
				</div>
				<div class="cell-xs-6 cell-md-12 offset-top-50">
				  <div class="h6 text-uppercase">Opening Hours</div>
				  <div class="text-subline offset-top-15"></div>
				  <div class="offset-top-25 unit unit-horizontal unit-spacing-xs">
					<div class="unit-left"><span class="icon icon-xs icon-primary mdi mdi-clock text-middle"></span></div>
					<div class="unit-body"><span class="text-dark inset-left-5">9:00am-23:00pm</span></div>
				  </div>
				</div>
			  </div>
			</aside>
		  </div>
		</div>
	  </div>
	</section>
	<{*
	<section>
	  <!-- RD Google Map-->
	  <div data-zoom="15" data-y="40.643180" data-x="-73.9874068" data-styles="" class="rd-google-map rd-google-map__model">
		<ul class="map_locations">
		  <li data-y="40.643180" data-x="-73.9874068">
			<p><span class="icon"><img src="images/gmap-24x34.png" alt="" width="24" height="34"/></span>267 Park Avenue New York, NY 90210</p>
		  </li>
		</ul>
	  </div>
	</section>
	*}>
  </main>