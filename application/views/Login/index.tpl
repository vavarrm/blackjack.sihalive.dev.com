<!-- Page Content-->
<main class="page-content" ng-controller="loginCtrl">
	<!-- Breadcrumbs & Page title-->
	<section class="text-center section-34 section-sm-60 section-md-top-100 section-md-bottom-105 bg-image bg-image-breadcrumbs">
	  <div class="shell shell-fluid">
		<div class="range range-condensed">
		  <div class="cell-xs-12 cell-xl-preffix-1 cell-xl-11">
			<p class="h3 text-white">Login/Register</p>
			<ul class="breadcrumbs-custom offset-top-10">
			  <li><a href="index.html">Home</a></li>
			  <li><a href="#">Pages</a></li>
			  <li class="active">Login/Register</li>
			</ul>
		  </div>
		</div>
	  </div>
	</section>

	<!-- Buttons-->
	<section class="bg-white text-center section-50 section-sm-100">
	  <div class="shell">
		<div class="range range-xs-center">
		  <div class="cell-sm-8 cell-lg-6">
			<div class="responsive-tabs responsive-tabs-modern responsive-tabs-modern-mod-1 responsive-tabs-horizontal">
			  <ul class="resp-tabs-list">
				<li>Login</li>
				<li>Registration</li>
			  </ul>
			  <div class="resp-tabs-container">
				<div>
					<div class="group-sm">
						<a id="FBloginBtn"  class="btn btn-facebook btn-icon btn-icon-left">
							<span class="icon icon-lg fa-facebook"></span>
							<span>Facebook</span>
						</a>
						<{*
						<a href="#" class="btn btn-twitter btn-icon btn-icon-left">
							<span class="icon icon-xs fa-twitter"></span>
							<span>Twitter</span>
						</a>
						<a href="#" class="btn btn-google-plus btn-icon btn-icon-left">
							<span class="icon icon-xs fa-google-plus"></span>
							<span>Google +</span>
						</a>
						*}>
					</div>
				  <div class="divider-custom offset-top-30">
					<p class="small text-uppercase">Or</p>
				  </div>
				  <!-- RD Mailform-->
				  <form class="rd-mailform form-register text-center offset-top-20" id="Loginfrm">
					<div class="form-group">
					  <label for="contact-name" class="form-label form-label-outside">Username or E-mail</label>
					  <input id="contact-name" type="text" name="username_email" data-constraints="@Required" class="form-control">
					</div>
					<div class="form-group">
					  <label for="contact-email" class="form-label form-label-outside">Password</label>
					  <input id="contact-email" type="password" name="u_passwd" data-constraints="@Required" class="form-control">
					</div>
					<div class="offset-top-50">
					  <button type="submit" ng-click="doLogin()" class="btn btn-primary btn-fullwidth btn-shadow">Enter</button>
					</div>
				  </form>
				</div>
				<div >
					<div class="group-sm">
						<a href="#" class="btn btn-facebook btn-icon btn-icon-left"  id="fbReg">
							<span class="icon icon-xs fa-facebook"></span>
							<span>Facebook</span>
						</a>
						<{*
						<a href="#" class="btn btn-twitter btn-icon btn-icon-left">
							<span class="icon icon-xs fa-twitter"></span>
							<span>Twitter</span>
						</a>
						<a href="#" class="btn btn-google-plus btn-icon btn-icon-left">
							<span class="icon icon-xs fa-google-plus"></span>
							<span>Google +</span>
						</a>
						*}>
						</div>
				  <div class="divider-custom offset-top-30">
					<p class="small text-uppercase">Or</p>
				  </div>
				  <!-- RD Mailform-->
				  <form id="Register" class="rd-mailform form-register text-center offset-top-20">
					<div class="form-group">
					  <label for="register-form-name" class="form-label form-label-outside">USERNAME</label>
					  <input id="register-form-name" maxlength="20"   ng-model="name" type="text" name="u_name" data-constraints="@Required" class="form-control">
					</div>
					<div class="form-group">
					  <label for="register-form-email" class="form-label form-label-outside">E-mail</label>
					  <input id="register-form-email" ng-model="email" type="email" name="u_email" data-constraints="@Required @Email" class="form-control">
					</div>
					<div class="form-group">
					  <label for="register-form-password" class="form-label form-label-outside">Password</label>
					  <input id="register-form-password"  maxlength="12" ng-model="u_passwd" type="password" name="u_passwd" data-constraints="@Required" class="form-control">
					</div>
					<div class="form-group">
					  <label for="register-form-password-confirm" class="form-label form-label-outside">Confirm Password</label>
					  <input id="register-form-password-confirm" maxlength="12" ng-model="u_passwd_confirm" type="password" name="u_passwd_confirm" data-constraints="@Required" class="form-control">
					</div>
					<div class="offset-top-50">
					  <button type="submit" ng-click="register($event);" class="btn btn-primary btn-fullwidth btn-shadow">Register</button>
					</div>
				  </form>
				</div>
			  </div>
			</div>
		  </div>
		</div>
	  </div>
	</section>

</main>