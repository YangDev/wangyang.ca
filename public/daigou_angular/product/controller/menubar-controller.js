angular.module('app')
	.controller()
	.directive('menubar', function () {
		return {
			restrict: 'E',
			templateUrl: 'product/template/menubar.html'
		};
	});