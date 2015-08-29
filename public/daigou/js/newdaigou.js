

"use strict";

var windowWidth = Math.max(window.innerWidth, 1090);
var mar = - (1920 - windowWidth) / 2;
var salesImg = document.querySelectorAll(".salesimg");
var salesBtn = document.querySelectorAll("#salesBtn3 div");
var currentImg = 0;
var imgLength = salesImg.length;
console.log(salesBtn);
salesImg[0].style["margin-left"] = mar.toString() + "px";
salesImg[0].style["z-index"] = 2;
salesImg[0].style["transition"] = "1s";
salesImg[1].style["margin-left"] = mar.toString() + "px";
salesImg[1].style["z-index"] = 1;
salesImg[1].style["transition"] = "1s";
//salesImg[1].style["opacity"] = "1";
salesImg[2].style["margin-left"] = mar.toString() + "px";
salesImg[2].style["z-index"] = 1;
salesImg[2].style["transition"] = "1s";

var salesBtn1 = document.getElementById("salesBtn1");
salesBtn1.addEventListener("mousedown", function() { changeImg(-1) });

var salesBtn2 = document.getElementById("salesBtn2");
salesBtn2.addEventListener("mousedown", function() { changeImg(1) });
salesBtn[0].addEventListener("mouseover", function() {
	console.log(currentImg);
	salesBtn[currentImg].style.background = "white";
	changeImg(0, 0);
	currentImg = 0;
	salesBtn[0].style.background = "#d22147";
	changeImg(1, currentImg);
});
salesBtn[1].addEventListener("mouseover", function() {
	console.log(currentImg);
	salesBtn[currentImg].style.background = "white";
	changeImg(0, 1);
	currentImg = 1;
	salesBtn[1].style.background = "#d22147";
	
});
salesBtn[2].addEventListener("mouseover", function() {
	console.log(currentImg);
	salesBtn[currentImg].style.background = "white";
	changeImg(0, 2);
	currentImg = 2;
	salesBtn[2].style.background = "#d22147";
	
});
function changeImg(i,dest) {
	console.log(dest);
	salesBtn[currentImg].style.background = "white";
	salesImg[currentImg].style["transition"] = "1s";
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
	salesImg[currentImg].style["transition"] = "1s";
	salesImg[currentImg].style["opacity"] = 1;
	salesImg[currentImg].style["z-index"] = 2;
	salesBtn[currentImg].style.background = "#d22147";
};