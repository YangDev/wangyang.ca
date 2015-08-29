angular.module('kaoshi', []).controller('kaoshiController', function ($scope) {
	var i = 0;
	$scope.items = tiKu;
	$scope.selected = {};
	$scope.show = false;
	$scope.numberOfCorrect = 0;
	$scope.numberOfAnswered = 0;
	$scope.marks = 0;

	$scope.showAll = function () {
		$scope.show = !$scope.show;
	}
	$scope.select = function (i, id) {
		if ($scope.selected[id] === i) {
			$scope.selected[id] = undefined;
		} else {
			$scope.selected[id] = i;
		}
		
		console.log($scope.selected);
	}

	$scope.showAnswer = function (i, a, id) {
		if (i === a && $scope.selected[id]!== undefined) {
			return true;
		} else {
			return false;
		}
	}

	$scope.showMarks = function () {
		$scope.numberOfAnswered = 0;
		$scope.numberOfCorrect = 0;
		console.log($scope.selected[$scope.items[0].id]);
		for (i = 0; i < $scope.items.length; i++) {
			if ($scope.selected[$scope.items[i].id] !== undefined) {
				$scope.numberOfAnswered += 1;
				if ($scope.selected[$scope.items[i].id] === $scope.items[i].a) {
					$scope.numberOfCorrect += 1;
				}
			}
		}
		var temp = $scope.numberOfCorrect / $scope.numberOfAnswered
		$scope.marks = temp.toPrecision(2) * 100;
	}
});

