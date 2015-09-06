angular.module('app')
	.controller('coverController', function ($scope) {
		var cover = document.querySelectorAll(".cover");

		$scope.showCover = function () {
			cover[0].style["display"] = "block";
			cover[0].style["z-index"] = "100";
		};

		$scope.hideCover = function () {
			cover[0].style["display"] = "none";
		}
	})
	.directive('cover', function () {
		return {
			restrict: 'E',
			transclude: false,
			controller: 'coverController',
			templateUrl: 'user/template/cover.html'
		}});