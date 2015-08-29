angular.module('app').controller('detailController', function ($scope) {
	$scope.detail = {
		'id': '',
		'pic': [],
		'title': '日本直运 正品花王纸尿裤S82/尿不湿S82 婴儿宝宝尿不湿 小号',
		'sale': 0.8,
		'commentNumber': 192,
		'mailPrice': 18,
		'numberToBuy': 1,
		'inventory': 476,
		'timeToMail': 16,
		'sendTo': '大连',
		'sendFrom': '浙江宁波',
		'des': '此款花王纸尿裤为日本直运，经过正规报关，商检，为100%正品。由于销量巨大，采购均为整个货柜，不存在散包，单包采购的现象，每次采购均为同批次产品，不同客户使用同批次产品会产生不同反映，宝宝使用了红屁屁，有味道，触摸有颗粒感，图案不一样等等情况在以下描述上均有说明，此商品税率10%，原产地：日本！'
	};

	$scope.counter = 1;

	$scope.counterAdd = function () {
		$scope.counter += 1;
	}

	$scope.counterDecrease = function () {
		$scope.counter -= 1;
		$scope.counter = Math.max($scope.counter, 0)
	}
});
