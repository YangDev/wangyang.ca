"use strict";
angular.module('app', ['ngRoute'])
	.config(function ($routeProvider, $httpProvider) {
	    $routeProvider.
	      when('/home/:pageID', {
			templateUrl: '/daigou_angular/views/home.html',
			controller: 'pageController'
	      }).
	      when('/detail', {
			templateUrl: '/daigou_angular/views/detail.html',
			controller: 'detailController'
	      }).
	      otherwise({
	      	redirectTo:'/home/0'
	      });
	});

angular.module('app')
	.controller('detailController', function () {
		var body = document.getElementsByTagName('body')[0];
		//body.style.background = '#fff';
	});

