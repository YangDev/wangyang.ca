"use strict";
angular.module('app', ['ngRoute', 'ngAnimate'])
.config(function ($routeProvider, $httpProvider) {
	    $routeProvider.
	      when('/', {
			templateUrl: '/daigou_mobile/views/home.html',
			controller: 'pageController'
	      }).
	      when('/detail', {
			templateUrl: '/daigou_mobile/views/detail.html',
			controller: 'detailController'
	      }).
	      when('/policy', {
			templateUrl: '/daigou_mobile/views/policy.html',
			controller: 'policyController'
	      }).
	      otherwise({
	      	redirectTo:'/'
	      });
})
.controller('pageController', function ($scope) {
		console.log(1);
		var open = false;
		var menubar = document.querySelectorAll(".menubar");
		var home = document.querySelectorAll(".home")[0];
	home.style.display = "block";
		$scope.showMenu = function () {
			if (open) {
				menubar[0].style["height"] = "0px";
				menubar[0].style["z-index"] = "-1";
			} else {
				menubar[0].style["height"] = "40px";
				menubar[0].style["z-index"] = "1";
			}
			open = !open;
		};




var menubar = document.querySelectorAll(".menubar");
var salesimg = document.querySelectorAll(".sales img");
var salesframe = document.querySelectorAll(".container1");
var salescontainer = document.querySelectorAll(".container");
var open = false;
var windowwidth = window.innerWidth;
for (var i = 0; i < salesimg.length; i++) {
	salesimg[i].style.width = windowwidth.toString() + "px";
}
var sumwidth = windowwidth * 5;
var moveready = false;
var currentpos = - windowwidth;
salesframe[0].style["width"] = sumwidth.toString() + "px";
salesframe[0].style["margin-left"] = currentpos.toString() + "px";

var preX = 0;
var startX = 0, endX = 0;
var salesCurrentShow = 1;
var interval = setInterval(slideRight, 3000);

salescontainer[0].addEventListener("touchstart", function(e) {
	clearInterval(interval);
	salesframe[0].style["transition"] = "0.0s";
	startX = e.layerX;
	moveready = true;
	if (moveready) {
		preX = e.layerX;
	}
});

salescontainer[0].addEventListener("touchend", function(e) {
	endX = e.layerX;
	moveready = false;
	if (endX > startX) {
		salesCurrentShow -= 1;
	} else {
		salesCurrentShow += 1;
	}
	currentpos = - windowwidth * salesCurrentShow;
	salesframe[0].style["transition"] = "0.2s";
	salesframe[0].style["margin-left"] = currentpos.toString() + "px";
	if (salesCurrentShow == 0) {
		salesCurrentShow = 3;
		swapSlide();
	} else if (salesCurrentShow == 4 ) {
		salesCurrentShow = 1;
		swapSlide();
	}
	interval = setInterval(slideRight, 3000);;
});

function swapSlide() {
	setTimeout(function() {
		salesframe[0].style["transition"] = "0.0s";
		currentpos = - windowwidth * salesCurrentShow;
		salesframe[0].style["margin-left"] = currentpos.toString() + "px";
	}, 200);
}

function slideRight() {
	salesCurrentShow += 1;
	currentpos = - windowwidth * salesCurrentShow;
	salesframe[0].style["transition"] = "0.2s";
	salesframe[0].style["margin-left"] = currentpos.toString() + "px";
	if (salesCurrentShow == 0) {
		salesCurrentShow = 3;
		swapSlide();
	} else if (salesCurrentShow == 4 ) {
		salesCurrentShow = 1;
		swapSlide();
	}
}

salescontainer[0].addEventListener("touchmove", function(e) {
	var d;
	if (moveready === false) {
		return;
	}
	e.preventDefault();
	d = e.layerX - preX;
	preX = e.layerX;
	currentpos += d;
	salesframe[0].style["margin-left"] = currentpos.toString() + "px";
});





	});
