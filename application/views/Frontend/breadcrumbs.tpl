<section  ng-controller="breadcrumbsCtrl" class="text-center section-34 section-sm-60 section-md-top-100 section-md-bottom-105 bg-image bg-image-breadcrumbs">
  <div class="shell shell-fluid">
	<div class="range range-condensed">
	  <div class="cell-xs-12 cell-xl-preffix-1 cell-xl-11">
		<p class="h3 text-white" ng-bind="breadcrumbs[1]" >Menu</p>
		<ul class="breadcrumbs-custom offset-top-10">
		  <li ><a href="/">Home</a></li>
		  <li class="active" ng-if="breadcrumbs[1]">
			<span ng-if="breadcrumbs.length ==2" ng-bind="breadcrumbs[1]" ></span>
			<a ng-if="breadcrumbs.length >2" href="/{{breadcrumbs[1]}}" ng-bind="breadcrumbs[1]"></a>
		  </li>
		  <li class="active" ng-if="breadcrumbs[2]" ng-bind="breadcrumbs[2]"></li>
		</ul>
	  </div>
	</div>
  </div>
</section>
