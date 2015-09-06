angular.module('app')
	.controller()
	.directive('statebar', function () {
		return {
			restrict: 'E',
			templateUrl: 'user/template/sales.html'
		};
	});