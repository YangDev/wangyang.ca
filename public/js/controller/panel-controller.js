
angular.module('app').controller('panelController', function ($scope) {
	var menuButton = document.getElementById('menuButton');
	var menu = document.getElementById('slideMenu');
	var menuShow = false;
	var logined = false;

	//$scope.user = {};
	var dataBase = [{'name':'a', 'pass':'a'}];
	var find = function (name, pass) {
		var i;
		for (i = 0; i < dataBase.length; i++) {
			if (dataBase[i].name === name && dataBase[i].pass === pass) {
				return true;
			}
		}
		return false;
	}

	var findName = function () {
		var i;
		for (i = 0; i < dataBase.length; i++) {
			if (dataBase[i].name === name) {
				return i;
			}
		}
		return -1;
	};

	menuButton.addEventListener('mouseover', function () {
		menuShow = true;
		$scope.$apply();
	});
	menuButton.addEventListener('mouseout', function () {
		menuShow = false;
		$scope.$apply();
	});
	menu.addEventListener('mouseover', function () {
		$scope.tab = 0;
		menuShow = true;
		$scope.$apply();
	});
	menu.addEventListener('mouseout', function () {
		$scope.tab = -1;
		menuShow = false;
		$scope.$apply();
	});
	$scope.show = function () {
		return menuShow;
	};

	$scope.loginCheck = function () {
		return logined;
	};

	$scope.login = function (name, pass) {
		var temp = find(name, pass);
		console.log(temp);
		if (temp === true) {
			logined = true;
		} else {
			logined = false;
		}
		return find(name, pass);
	};

	$scope.register = function (name, pass) {
		console.log(name, pass);
		var temp = findName(name);
		if (temp === -1) {
			dataBase.push({'name': name, 'pass': pass});
			console.log
		} else {
			return -1;
		}
	}

});