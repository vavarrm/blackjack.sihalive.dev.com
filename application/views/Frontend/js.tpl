<!-- jQuery -->
<script src="/js/core.js"></script>
<!-- Bootstrap Core JavaScript -->
<script src="https://cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<!-- jQuery fancybox -->
<script src="https://cdn.bootcss.com/fancybox/3.0.47/jquery.fancybox.min.js"></script>

<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.js"></script>



<script src="/js/script.js"></script>

<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js"></script>
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular-cookies.js"></script>

<script src="/js/main.js?<{$randseed}>"></script>

<{if $jsArray}>
	<{foreach from=$jsArray item=file}>
		<script src="js/<{$file}>"></script>
	<{/foreach}>
<{/if}>
<{include file="Frontend/js_var.tpl"}>
<div id="dialog" title="<{$language.website_alert_title}>">
  <p></p>
</div>


<script>

</script>
