/*! Gunboat - v0.1.0 - 2013-02-26
* https://github.com/seich/gunboat
* Copyright (c) 2013 Sergio Diaz; Licensed MIT */

;(function(namespace, undefined) {
	'use strict';
	var Modal = can.Control({
		'init': function(element, options) {
			var self = this;
			if (element.hasClass("hide")) {
				element.removeClass('hide');
			}

			element.data("modal-ready", true);
		}
	});

	namespace.gunboat = namespace.gunboat || {};
	namespace.gunboat.Modal = Modal;
}(this));