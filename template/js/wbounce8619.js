(function (root, factory) {
	if (typeof define === "function" && define.amd) {
		define(factory);
	} else if (typeof exports === "object") {
		module.exports = factory(require, exports, module);
	} else {
		root.ouibounce = factory();
	}
// ReSharper disable UnusedParameter
// ReSharper disable ThisInGlobalContext
}(this, function (require, exports, module) {
// ReSharper restore ThisInGlobalContext
// ReSharper restore UnusedParameter

	// ReSharper disable InconsistentNaming
	return function ouibounce(el, custom_config) {
	// ReSharper restore InconsistentNaming
		"use strict";

		var config = custom_config || {},
			aggressive = config.aggressive || false,
			sensitivity = 0,//setDefault(config.sensitivity, 20),
			timer = setDefault(config.timer, 1000),
			delay = setDefault(config.delay, 0),
			// ReSharper disable UnusedLocals
			callback = config.callback || function () { },
			// ReSharper restore UnusedLocals
			cookieExpire = setDefaultCookieExpire(config.cookieExpire) || "",
			cookieDomain = config.cookieDomain ? ";domain=" + config.cookieDomain : "",
			cookieName = config.cookieName ? config.cookieName : "viewedOuibounceModal",
			sitewide = config.sitewide === true ? ";path=/" : "",
			// ReSharper disable InconsistentNaming
			_delayTimer = null,
			_html = document.documentElement;
			// ReSharper restore InconsistentNaming

		// ReSharper disable InconsistentNaming
		function setDefault(_property, _default) {
		// ReSharper restore InconsistentNaming
			return typeof _property === "undefined" ? _default : _property;
		}

		function setDefaultCookieExpire(days) {
			// transform days to milliseconds
			var ms = days * 24 * 60 * 60 * 1000;

			var date = new Date();
			date.setTime(date.getTime() + ms);

			return "; expires=" + date.toUTCString();
		}

		setTimeout(attachOuiBounce, timer);
		function attachOuiBounce() {
			if (isDisabled()) { return; }

			_html.addEventListener("mouseleave", handleMouseleave);
			_html.addEventListener("mouseenter", handleMouseenter);
		//	_html.addEventListener("keydown", handleKeydown);
		}

		function handleMouseleave(e) {
			var w = window.innerWidth;
			var h = window.innerHeight;
		//	document.title = "<< [" + e.clientX + ", " + e.clientY + "][" + w + ", " + h + "]; ";
		//	document.title += sensitivity + " >>";
			if (e.clientX > sensitivity && e.clientY > sensitivity) {
				if (e.clientX < w && e.clientY < h) {
					return;
				}
			}

			_delayTimer = setTimeout(fire, delay);
		}

		function handleMouseenter() {
			if (_delayTimer) {
				clearTimeout(_delayTimer);
				_delayTimer = null;
			}
		}

		var disableKeydown = false;
		function handleKeydown(e) {
			if (disableKeydown) { return; }
			else if (!e.metaKey || e.keyCode !== 76) { return; }

			disableKeydown = true;
			_delayTimer = setTimeout(fire, delay);
		}

		function checkCookieValue(cookieName, value) {
			return parseCookies()[cookieName] === value;
		}

		function parseCookies() {
			// cookies are separated by '; '
			var cookies = document.cookie.split("; ");

			var ret = {};
			for (var i = cookies.length - 1; i >= 0; i--) {
				var el = cookies[i].split("=");
				ret[el[0]] = el[1];
			}
			return ret;
		}

		function isDisabled() {
			return checkCookieValue(cookieName, "true") && !aggressive;
		}

		// You can use ouibounce without passing an element
		// https://github.com/carlsednaoui/ouibounce/issues/30
		function fire() {
		//	if (isDisabled()) { return; }


			if (el) {
				if (el.style.display === "none") {
					var display = false;

					var date = new Date();
					var n = date.getTime();

					var ticks = parseInt("0" + $("#hdnTicks").val());
					if ($("#modal-cnaola").css("display") === "block") {
					} else if (ticks === 0) {
						display = true;
					} else {
						if (n > ticks) {
							display = true;
						}
					}

					if (display) {
					//	el.style.display = "block";
						$(".p-acao").click();
						ticks = n + 24 * 60 * 60 * 1000;
						$("#hdnTicks").val(ticks);
					}
				}
			}

		//	callback();
		//	disable();
		}

		// ReSharper disable InconsistentNaming
		function disable(custom_options) {
		// ReSharper restore InconsistentNaming
			var options = custom_options || {};

			// you can pass a specific cookie expiration when using the OuiBounce API
			// ex: _ouiBounce.disable({ cookieExpire: 5 });
			if (typeof options.cookieExpire !== "undefined") {
				cookieExpire = setDefaultCookieExpire(options.cookieExpire);
			}

			// you can pass use sitewide cookies too
			// ex: _ouiBounce.disable({ cookieExpire: 5, sitewide: true });
			if (options.sitewide === true) {
				sitewide = ";path=/";
			}

			// you can pass a domain string when the cookie should be read subdomain-wise
			// ex: _ouiBounce.disable({ cookieDomain: '.example.com' });
			if (typeof options.cookieDomain !== "undefined") {
				cookieDomain = ";domain=" + options.cookieDomain;
			}

			if (typeof options.cookieName !== "undefined") {
				cookieName = options.cookieName;
			}

			document.cookie = cookieName + "=true" + cookieExpire + cookieDomain + sitewide;

			// remove listeners
			_html.removeEventListener("mouseleave", handleMouseleave);
			_html.removeEventListener("mouseenter", handleMouseenter);
			_html.removeEventListener("keydown", handleKeydown);
		}

		return {
			fire: fire,
			disable: disable,
			isDisabled: isDisabled
		};
	}

		/*exported ouibounce */
		;
}));