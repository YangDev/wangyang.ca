angular.module('app')
	.controller('menubarController', function ($scope) {
		$scope.isActive = function (i) {
			if (i == Number($scope.params.pageID)) {
				return true;
			} else {
				return false;
			}
		};
	})
	.directive('menubar', function () {
		return {
			restrict: 'E',
			controller: 'menubarController',
			templateUrl: 'product/template/menubar.html'
		};
	});