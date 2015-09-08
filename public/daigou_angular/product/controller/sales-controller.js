angular.module('app')
	.controller('salesController', function ($scope) {
		var salesImgs = [
			[
				'img/id1p1oi351.jpg',
				'img/id1mwe4e87.jpg',
				'img/id5b2mpg95.jpg',
				'img/ie8peyab46.jpg'
			],
			[
				'img/ie9cichv10.jpg',
				'img/ie9cjmgc92.jpg',
				'img/ie9cichv10.jpg',
				'img/ie9cjmgc92.jpg'
			],
			[
				'img/ie2zquu287.jpg',
				'img/ie9bzjaq71.jpg',
				'img/ie2zquu287.jpg',
				'img/ie9bzjaq71.jpg'
			],
			[
				'img/ie8kwcr521.jpg',
				'img/ie8ktz3a81.jpg',
				'img/ie8kwcr521.jpg',
				'img/ie8ktz3a81.jpg'
			],
			[
				'img/ie4blddp37.jpg',
				'img/ie4blddp37.jpg',
				'img/ie4blddp37.jpg',
				'img/ie4blddp37.jpg'
			],
			[
				'img/ie318tnp25.jpg',
				'img/icndgt9z58.jpg',
				'img/ie318tnp25.jpg',
				'img/icndgt9z58.jpg'
			],
			[
				'img/ie8nr0yc33.jpg',
				'img/ie8o5hn257.jpg',
				'img/ie8nr0yc33.jpg',
				'img/ie8o5hn257.jpg'
			]
		];

		$scope.salesImg = salesImgs[Number($scope.params.pageID)];

		var salesImg = document.querySelectorAll(".salesimg img");
		var salesBtn = document.querySelectorAll("#salesBtn3 div");
		var currentImg = 0;
		var imgLength = salesImg.length;

		salesImg[0].style["z-index"] = 2;
		salesBtn[currentImg].style.background = "#d22147";

		var interval = setInterval(function () {
			changeImg(1);
		}, 3000);

		$scope.changeImgTo = function (i) {
			clearInterval(interval);
			changeImgTo(i);
			interval = setInterval(function () {
				changeImg(1);
			}, 3000);
		};

		$scope.changeImg = function (i) {
			clearInterval(interval);
			changeImg(i);
			interval = setInterval(function () {
				changeImg(1);
			}, 3000);
		}

		function changeImgTo (i) {
			changeImg(currentImg, i);
			currentImg = i;
		}
		function changeImg (i,dest) {
			salesBtn[currentImg].style.background = "white";
			salesImg[currentImg].style["z-index"] = 1;
			salesImg[currentImg].style["opacity"] = 0;
			if (dest != undefined) {
				currentImg = dest;
			} else {
				currentImg += i;
			}
			if (currentImg >= imgLength) {
				currentImg = 0;
			}
			if (currentImg < 0) {
				currentImg = imgLength - 1;
			}
			salesImg[currentImg].style["opacity"] = 1;
			salesImg[currentImg].style["z-index"] = 2;
			salesBtn[currentImg].style.background = "#d22147";
		};

	})
	.directive('sales', function () {
		return {
			restrict: 'E',
			controller: 'salesController',
			templateUrl: 'product/template/sales.html'
		};
	});