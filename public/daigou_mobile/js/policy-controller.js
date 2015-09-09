angular.module('app')
.controller('policyController', function () {
	var home = document.querySelectorAll(".home")[0];
	setTimeout(function(){ home.style.display = "none"; }, 500);
});