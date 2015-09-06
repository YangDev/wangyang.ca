angular.module('app')
	.controller('register', function ($scope, $http) {
		var loginwindow = document.querySelectorAll(".loginwindow");
		//$scope.user = {email:"",pass:""};
		$scope.register = function(user) {
			$http.post('/auth', user)
				.success(function (data) {
					console.log(data);
				})
				.error(function (data) {
					console.log(data);
				});
		};
		$scope.showRegisterWindow = function (t) {
			if (t == undefined) {
				t = 0;
			}
			$scope.showCover();
			setTimeout(function() {
			loginwindow[1].style.transform = "scale(0.5)";
				loginwindow[1].style.transform = "scale(1)";
				loginwindow[1].style["z-index"] = "101";
			}, t);
		};
		$scope.closeRegisterWindow = function () {
			loginwindow[1].style.transform = "scale(0.5)";
			setTimeout(function() {
				loginwindow[1].style["z-index"] = "-1";
				$scope.hideCover();
			}, 200);
		};

	})
	.directive('register', function () {
		return {
			restrict: 'E',
			//transclude: false,
			controller: 'register',
			templateUrl: 'user/template/register.html'
		};
});