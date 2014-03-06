//:include tagsdk-current.js

qubit.qtag.LibraryTag.define("google.googledynamicremarketingtaghomeandcategorypage.Tag", {
	config: {
		/*DATA*/
		name: "Google Dynamic Remarketing Tag - Home and Category Page",
		async: true,
		description: "",
		html: "",
		imageUrl: ".",
		locationDetail: "",
		priv: false,
		url: "",
		usesDocWrite: false,
		parameters: [
		{
			name: "Page Type",
			description: "Page Type",
			token: "page_category",
			uv: "universal_variable.page.category"
		},
		{
			name: "Google Conversion ID",
			description: "Your Google Conversion ID",
			token: "google_conversion_id",
			uv: ""
		},
		{
			name: "Google Conversion Label",
			description: "Your Google Conversion Label ID",
			token: "google_conversion_label",
			uv: ""
		}
	]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/

(function (){
   window.google_tag_params = {
        ecomm_pagetype: '' + this.getValueForToken("page_category") + ''
   };
 
   window.google_conversion_id = this.getValueForToken("google_conversion_id");
   window.google_conversion_label = "" + this.getValueForToken("google_conversion_label") + "";
   window.google_custom_params = window.google_tag_params;
   window.google_remarketing_only = true;

   var script = document.createElement('script');
   script.type = "text/javascript";
   script.src = "//www.googleadservices.com/pagead/conversion.js";
   document.head.appendChild(script);
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
