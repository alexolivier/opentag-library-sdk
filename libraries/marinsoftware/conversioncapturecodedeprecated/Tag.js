//:include tagsdk-current.js

qubit.qtag.LibraryTag.define("marinsoftware.conversioncapturecodedeprecated.Tag", {
	config: {
		/*DATA*/
		name: "Conversion Capture Code [DEPRECATED]",
		async: true,
		description: "The Javascript will take the values specified below in the array of conversion metrics and send them to Marin along with the Cookie ID (UUID) created by the Click JavaScript; this allows Marin to join Clicks and Conversion data together.",
		html: "",
		imageUrl: ".",
		locationDetail: "",
		priv: true,
		url: "",
		usesDocWrite: false,
		parameters: [
		{
			name: "Marin Conversion Type",
			description: "",
			token: "conversion_type",
			uv: ""
		},
		{
			name: "Product ID List",
			description: "",
			token: "ids",
			uv: "universal_variable.transaction.line_items[#].product.id"
		},
		{
			name: "Product Unit Sale Price List",
			description: "",
			token: "prices",
			uv: "universal_variable.transaction.line_items[#].product.unit_sale_price"
		},
		{
			name: "Product Category List",
			description: "",
			token: "categories",
			uv: "universal_variable.transaction.line_items[#].product.category"
		},
		{
			name: "Product Quantity List",
			description: "",
			token: "quantities",
			uv: "universal_variable.transaction.line_items[#].quantity"
		},
		{
			name: "Order ID",
			description: "",
			token: "order_id",
			uv: "universal_variable.transaction.order_id"
		},
		{
			name: "Order Total",
			description: "",
			token: "total",
			uv: "universal_variable.transaction.total"
		},
		{
			name: "Order Tax",
			description: "",
			token: "tax",
			uv: "universal_variable.transaction.tax"
		},
		{
			name: "Order Shipping Cost",
			description: "",
			token: "shipping",
			uv: "universal_variable.transaction.shipping_cost"
		},
		{
			name: "Order Shipping City",
			description: "",
			token: "city",
			uv: "universal_variable.transaction.delivery.city"
		},
		{
			name: "Order Shipping State",
			description: "",
			token: "state",
			uv: "universal_variable.transaction.delivery.state"
		},
		{
			name: "Order Shipping Country",
			description: "",
			token: "country",
			uv: "universal_variable.transaction.delivery.country"
		},
		{
			name: "Currency",
			description: "",
			token: "currency",
			uv: "universal_variable.transaction.currency"
		},
		{
			name: "Marin Tracking Id",
			description: "Your unique tracking id",
			token: "tracking_id",
			uv: ""
		}
	]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/

(function () {
  window._mTrack = window._mTrack || [];
  var items = [{orderId:  "" + this.getValueForToken("order_id") + ""}, {convType: "" + this.getValueForToken("conversion_type") + ""}, {price: this.getValueForToken("total")}];
  
  for (var i = 0; i < this.getValueForToken("ids").length; i++) 
  {
    items.push({

      product:  this.getValueForToken("ids")[i],
      category: this.getValueForToken("categories")[i],
      quantity: this.getValueForToken("quantities")[i]
    });
  }


  window._mTrack.push(['addTrans', {
      orderId:  "" + this.getValueForToken("order_id") + "",
      total:    this.getValueForToken("total"),
      tax:      this.getValueForToken("tax"),
      shipping: this.getValueForToken("shipping"),
      city:     "" + this.getValueForToken("city") + "",
      state:    "" + this.getValueForToken("state") + "",
      country:  "" + this.getValueForToken("country") + "",
      currency: "" + this.getValueForToken("currency") + "",
      affiliation: "PPC",
      items: items
  }]);
  
  window._mTrack.push(['processOrders']);
  (function() {
      var mClientId = "" + this.getValueForToken("tracking_id") + "";
      var mProto = ('https:' == document.location.protocol ? 'https://' : 'http://');
      var mHost = 'tracker.marinsm.com';
      var mt = document.createElement('script'); mt.type = 'text/javascript'; mt.async = true; mt.src = mProto + mHost + '/tracker/async/' + mClientId + '.js';
      var fscr = document.getElementsByTagName('script')[0]; fscr.parentNode.insertBefore(mt, fscr);
  })();
})();
		/*~SCRIPT*/
	},
	pre: function() {
		/*PRE*/
		/*~PRE*/
	},
	post: function() {
		/*POST*/
		/*~POST*/
	}
});
