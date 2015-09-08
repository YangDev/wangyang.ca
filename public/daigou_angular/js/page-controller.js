angular.module('app').controller("pageController", function ($scope, $routeParams) {
	var body = document.getElementsByTagName('body')[0];
	var html = document.getElementsByTagName('html')[0];
	body.style.background = '#f2f2f2';
	html.style.background = '#f2f2f2';
	$scope.params = $routeParams;
});

