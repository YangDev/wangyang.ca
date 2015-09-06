angular.module('app')
	.controller('recommendationController', function ($scope) {
		var newItems = [
			{
				"img":"onlineidtvumov12090.jpg",
				"des":"Avene 雅漾 清爽洁肤凝胶 200毫升",
				"price":100,
				"oldprice":195
			},
			{
				"img":"onlinei9jmaorh11532.jpg",
				"des":"2件组合装 | SKINFOOD 思亲肤 黑糖魔法去角质洗面奶 160",
				"price":105,
				"oldprice":193
			},
			{
				"img":"onlineidppw04o12891.jpg",
				"des":"Puritan's Pride 普丽普莱 双倍葡萄籽精华胶囊 100粒*2瓶",
				"price":101,
				"oldprice":194
			},
			{
				img:"onlineidwq8ahx10696.jpg",
				des:"Rapunzel 长发公主 宝宝有机全麦细面 250克",
				price:102,
				oldprice:196
			},
			{
				img:"onlineiaxs5zvu10655.jpg",
				des:"COACH 蔻驰 女式单肩斜挎包 蛇皮纹 F35555-IMNAT",
				price:103,
				oldprice:197
			},
		];

		$scope.newItems = newItems;
	})
	.directive('recommendation', function () {
		return {
			restrict: 'E',
			controller: 'recommendationController',
			templateUrl: 'product/template/recommendation.html'
		};
	});

