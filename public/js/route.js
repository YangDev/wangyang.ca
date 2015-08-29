angular.module('app', ['ngRoute'])
	.config(function ($routeProvider, $httpProvider) {
		$routeProvider.
			when('/item', {
				templateUrl: '/views/item.html',
				controller: 'itemController'
			}).
			when('/detail', {
				templateUrl: '/views/detail.html',
				controller: 'detailController'
			}).
			otherwise({
				redirectTo:'/item'
			});
});