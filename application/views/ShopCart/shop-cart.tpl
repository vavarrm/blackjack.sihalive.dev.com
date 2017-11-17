      <!-- Page Content-->
      <main class="page-content" ng-controller="shopCartCtrl">
        <!-- Breadcrumbs & Page title-->
		<{include file="Frontend/breadcrumbs.tpl"}>
		<section class="section-50 section-sm-100">
			<div class="container">
				<div ng-repeat="item in items|filter as filterAry" ng-show="!item.del" class="row grid-system-row grid-element-outline-bottom offset-top-15 offset-sm-top-30">
				  <div class="col-xs-1">
						<div class="form-group stepper-type-2 offset-top-20">
							<input type="number" data-zeros="true"  value="{{item.order_num}}" ng-model="$item.order_num" min="1" max="20" readonly class="form-control text-bold">
						</div>
				  </div>
				  <div class="col-xs-4">
						<div class="product-image">
							<img src="/images/shop-cart-1-130x130.png" width="130" height="130" alt="">
						</div>
				  </div>
				  <div class="col-xs-6  text-left">
						<div class="h5 text-sbold offset-top-20 ">
							<span  class=" grid-element-mod-2">{{item.f_name}}</span>
						</div>
						<div class="offset-top-0">
							<span class="h5 text-sbold">${{item.price}}</span>
						</div>
				  </div>
				  <div class="col-xs-1">
						<div class="text-left offset-top-40">
							<a  class="icon icon-sm mdi mdi-window-close link-gray-lightest" ng-click="delete($index);$event.stopPropagation();"></a>
						</div>
				  </div>
				</div>
				<div  class="row grid-system-row offset-top-50 text-right">
					<div class="col-xs-12">
						<div class="h4 font-default text-bold">
							<small class="inset-right-5 text-gray-light">Total: </small> ${{Total(filterAry)}}
						</div>
						<a ng-click="checkout();$event.stopPropagation();" class="btn btn-icon btn-icon-left btn-primary btn-shape-circle offset-top-35">
							<span class="icon icon-xs mdi mdi-cart-outline"></span>
							<span ><{$shopLanguageAry.shopcart_proceed_to_checkout}></span>
						</a>
					</div>
				</div>
			</div>
		</section>
		<{*
        <section class="section-50 section-sm-100">
          <div class="shell">
            <div class="range">
              <div class="cell-xs-12">
               <h4 class="text-left font-default"><span ng-bind="cartnums"></span>  Items in your cart</h4>
                <div class="table-responsive offset-top-10">
                  <table class="table table-shopping-cart">
                    <tbody>
                      <tr ng-repeat="item in items|filter as filterAry" ng-show="!item.del">
                        <td style="width: 1px">
                          <div class="form-group stepper-type-2">
                            <input type="number" data-zeros="true"  value="{{item.order_num}}" ng-model="$item.order_num" min="1" max="20" readonly class="form-control text-bold">
                          </div>
                        </td>
                        <td style="width: 1px">
                          <div class="inset-left-20">
                            <div class="product-image"><img src="/images/shop-cart-1-130x130.png" width="130" height="130" alt=""></div>
                          </div>
                        </td>
                        <td style="min-width: 100px; ">
							<div class="inset-left-30 text-left">
								<div class="h5 text-sbold offset-top-0">
									<a href="shop-single.html" class="link-default">Fruit Mix Basket</a>
								</div>
								<div class="offset-top-0">
									<span class="h5 text-sbold">${{item.price}}</span>
								</div>
							</div>
                        </td>
                        <td style="width: 1px">
							<div class="text-left">
								<a  class="icon icon-sm mdi mdi-window-close link-gray-lightest" ng-click="delete($index);$event.stopPropagation();"></a>
							</div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="offset-top-35 text-right">
                  <div class="h4 font-default text-bold"><small class="inset-right-5 text-gray-light">Total: </small> ${{Total(filterAry)}}</div><a href="#" class="btn btn-icon btn-icon-left btn-primary btn-shape-circle offset-top-35"><span class="icon icon-xs mdi mdi-cart-outline"></span><span>Proceed to checkout</span></a>
                </div>
              </div>
            </div>
          </div>
        </section>
		*}>
      </main>