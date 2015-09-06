angular.module('app')
	.controller('jingxuanController', function ($scope) {
		var items = [
			{
				img:"idvm7lkk1.jpg",
				price:75,
				oldprice:156,
				des1:'森田药妆 蜗牛弹润修复原液面膜 10片装',
				des2:'一片解决六大肌肤问题',
			},
			{
				img:"idvm49zj93.jpg",
				price:85,
				oldprice:168,
				des1:'MAXFACTOR 蜜丝佛陀 控油遮瑕防晒透滑粉饼 1号玉瓷色 10克',
				des2:'风靡全球的定妆圣品',
			},
			{
				img:"35907ce116994785b6aa459bfdfed17b1432276213055i9z89yv210035.jpg",
				price:99,
				oldprice:329,
				des1:'Tesori d’Oriente 东方宝石 水莲花水润嫩肤沐浴乳 500毫升',
				des2:'',
			},
			{
				img:"idvmadtr39.jpg",
				price:66,
				oldprice:99,
				des1:"Neutrogena 露得清 轻柔卸妆洗面奶 153毫升",
				des2:'深层补水 做个水美人',
			},
			{
				img:"idvn0dqr18.jpg",
				price:55,
				oldprice:78,
				des1:"Dr.Brown'S 布朗博士 卡通吸管杯 粉色 270毫升",
				des2:'适合长牙期的宝宝使用',
			},
			{
				img:"icizm0wm25.jpg",
				price:59,
				oldprice:65,
				des1:'ON:THE BODY LG开司米甜蜜爱情香水身体乳 400毫升',
				des2:'顶级韩方 极度润泽',
			},
			{
				img:"idvmdcwv82.jpg",
				price:259,
				oldprice:519,
				des1:'now 诺奥 提升免疫力天然乳清蛋白粉 香草味 908克',
				des2:'非转基因蛋白质粉 人体易吸收',
			},
			{
				img:"idgp1lba2.jpg",
				price:149,
				oldprice:299,
				des1:'ISDG 医食同源 爽快酵素 144粒 72日量 通便润肠瘦身',
				des2:'排毒养肠道 轻松拥有小蛮腰',
			},
			{
				img:"920a688efbfb4b44bae0f3dfcacc067b1425102837449i6olfmwu10143.jpg",
				price:129,
				oldprice:369,
				des1:'Rêveur 绿瓶染烫修复洗护套装 500毫升*2',
				des2:'日本COSME洗发护发第一名的好物',
			}
		];
		$scope.jingxuanItems = items;
		$scope.getZhekou = function (index) {
			var ret = items[index].price / items[index].oldprice * 10;
			return ret.toFixed(1);
		}
	})
	.directive('jingxuan', function () {
		return {
			restrict: 'E',
			controller: 'jingxuanController',
			templateUrl: 'product/template/jingxuan.html'
		};
	});