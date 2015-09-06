angular.module('app')
	.controller('login', function ($scope, $http) {
		var loginwindow = document.querySelectorAll(".loginwindow");
		//$scope.a = 1;
		//
		$scope.user = {email:"",pass:""};
		$scope.login = function(user) {
			console.log(1);
			$http.put('/auth', user)
				.success(function (data) {
					console.log(data);
				})
				.error(function (data) {
					console.log(data);
				});
		};
		$scope.showLoginWindow = function () {
			loginwindow[0].style.transform = "scale(0.5)";
			loginwindow[0].style.transform = "scale(1)";
			loginwindow[0].style["z-index"] = "101";
			$scope.showCover();
		};
		$scope.closeLoginWindow = function () {
			loginwindow[0].style.transform = "scale(0.5)";
			setTimeout(function() {
				loginwindow[0].style["z-index"] = "-1";
				$scope.hideCover();
			}, 200);
		};
		$scope.closeLoginWindowAndShowRegisterWindow = function () {
			loginwindow[0].style.transform = "scale(0.5)";
			setTimeout(function() {
				loginwindow[0].style["z-index"] = "-1";
			}, 200);
			$scope.showRegisterWindow(300);
		};
	})
	.directive('login', function () {
		return {
			restrict: 'E',
			transclude: false,
			/*scope: {
				'showLoginWindow()' :"&"
			},*/
			controller: 'login',
			templateUrl: 'user/template/login.html'
		}});