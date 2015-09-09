angular.module('app').controller("pageController", function ($scope, $routeParams) {
	//var windowWidth = Math.max(window.innerWidth, 1090);
	//console.log(windowWidth);
	var body = document.getElementsByTagName('body')[0];
	var html = document.getElementsByTagName('html')[0];
	body.style.background = '#f2f2f2';
	//body.style.width = windowWidth.toString()+"px";
	html.style.background = '#f2f2f2';
	$scope.params = $routeParams;
});

