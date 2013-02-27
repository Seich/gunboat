/*! Gunboat - v0.1.0 - 2013-02-27
* https://github.com/seich/gunboat
* Copyright (c) 2013 Sergio Diaz; Licensed MIT */

;(function(namespace, undefined) {
	'use strict';
	var Modal = can.Control({
		defaults: {
			'top': false,
			'left': false,
			'isShown': false
		}
	},
	{
		'init': function(element, options) {
			var self = this;
			this.show();
		},

		'show': function() {
			if (this.options.isShown === true) {
				return;
			}

			this.options.isShown = true;

			if ($(".modal-overlay").length === 0) {
				$("body").append($("<div/>", {
					'class': 'modal-overlay'
				}));
			}

			this.element.removeClass("hide");

			this.calculatePostion();
		},

		'hide': function() {
			this.options.isShown = false;
			this.element.addClass("hide");
			$(".modal-overlay").hide();
		},

		'[data-modal-close=true] click': function() {
			this.hide();
		},

		'calculatePostion': function() {
			var topPos = this.options.top || ($(window).height() - this.element.height()) / 2;
			var leftPos = this.options.left || ($(window).width() - this.element.width()) / 2;
			this.element.css({
				"top": topPos,
				"left": leftPos
			});
		}
	});

	namespace.gunboat = namespace.gunboat || {};
	namespace.gunboat.Modal = Modal;
}(this));