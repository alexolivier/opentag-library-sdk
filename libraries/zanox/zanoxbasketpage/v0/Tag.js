//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("zanox.zanoxbasketpage.v0.Tag", {
	config: {
		/*DATA*/
		name: "Zanox Basket Page",
		async: true,
		description: "Basket Page Master Tag",
		html: "<!--@SRC@--><div class=\"zx_${id} zx_mediaslot\"></div>\n",
		imageUrl: ".",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		parameters: [{
			name: "ID",
			description: "client/page specific ID",
			token: "id",
			uv: ""
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/
		var _this = this;
		var waitForElement = function() {
			if (document.getElementsByClassName('zx_' + _this.valueForToken("id") +
				' zx_mediaslot').length === 1) {
				window._zx = window._zx || [];
				window._zx.push({
					"id": "" + _this.valueForToken("id")
				});
				(function(d) {
					var s = d.createElement("script");
					s.async = true;
					s.src = (d.location.protocol == "https:" ? "https:" : "http:") +
						"//static.zanox.com/scripts/zanox.js";
					var a = d.getElementsByTagName("script")[0];
					a.parentNode.insertBefore(s, a);
				}(document));
			} else {
				setTimeout(waitForElement, 100);
			}
		};

		waitForElement();

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