angular.module('app')
	.controller()
	.directive('searchbar', function () {
		return {
			restrict: 'E',
			templateUrl: 'product/template/searchbar.html'
		};
	});