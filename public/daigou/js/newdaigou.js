

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
salesImg[1].style["z-index"] = 0;
salesImg[1].style["transition"] = "1s";
//salesImg[1].style["opacity"] = "1";
salesImg[2].style["margin-left"] = mar.toString() + "px";
salesImg[2].style["z-index"] = 0;
salesImg[2].style["transition"] = "1s";

var loginwindow = document.querySelectorAll(".loginwindow");
var cover = document.querySelectorAll(".cover");
var cen = (windowWidth - 480) / 2; 
loginwindow[0].style["margin-left"] = cen.toString() + "px";
document.getElementById("closeloginwindow").onclick = function() {
	console.log(loginwindow[0]);
	loginwindow[0].style.transform = "scale(0.5)";
	setTimeout(function() {
		loginwindow[0].style["z-index"] = "-1";
		cover[0].style["z-index"] = "-1";
	}, 200);
};

var statebarbtn = document.querySelectorAll(".statebar a");
for (var i = 0; i < statebarbtn.length; i++) {
	statebarbtn[i].onclick = function() {
		loginwindow[0].style.transform = "scale(0.5)";
		loginwindow[0].style.transform = "scale(1)";
		loginwindow[0].style["z-index"] = "101";
		cover[0].style["z-index"] = "100";
	};
};

var imgs = [
	"onlineidtvumov12090.jpg", 
	"onlinei9jmaorh11532.jpg",
	"onlineidppw04o12891.jpg",
	"onlineidwq8ahx10696.jpg",
	"onlineiaxs5zvu10655.jpg"
];

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
		"img":"onlineidwq8ahx10696.jpg",
		"des":"Rapunzel 长发公主 宝宝有机全麦细面 250克",
		"price":102,
		"oldprice":196
	},
	{
		"img":"onlineiaxs5zvu10655.jpg",
		"des":"COACH 蔻驰 女式单肩斜挎包 蛇皮纹 F35555-IMNAT",
		"price":103,
		"oldprice":197
	},
];
var newItemImage = document.querySelectorAll(".newItemImg");
var newItemTextDes = document.querySelectorAll(".newItemText .des");
console.log(newItemTextDes);
var newItemPrice = document.querySelectorAll(".newItemText .newItemPrice");
var newItemOldPrice = document.querySelectorAll(".newItemText .newItemOldPrice");
for (i = 0; i < newItemImage.length; i++) {
	newItemImage[i].style["background-image"] = "url(img/"+newItems[i].img+")";
	newItemTextDes[i].innerText = newItems[i].des;
	newItemPrice[i].innerText = newItems[i].price;
	newItemOldPrice[i].innerText = newItems[i].oldprice;
}
console.log(statebarbtn);
var salesBtn1 = document.getElementById("salesBtn1");
salesBtn1.addEventListener("mousedown", function() { changeImg(-1) });

var salesBtn2 = document.getElementById("salesBtn2");
salesBtn2.addEventListener("mousedown", function() { changeImg(1) });
salesBtn[0].addEventListener("mouseover", function() {
	console.log(currentImg);
	salesBtn[currentImg].style.background = "white";
	changeImg(currentImg, 0);
	currentImg = 0;
	salesBtn[0].style.background = "#d22147";
	//changeImg(1, currentImg);
});
salesBtn[1].addEventListener("mouseover", function() {
	console.log(currentImg);
	salesBtn[currentImg].style.background = "white";
	changeImg(currentImg, 1);
	currentImg = 1;
	salesBtn[1].style.background = "#d22147";
	
});
salesBtn[2].addEventListener("mouseover", function() {
	console.log(currentImg);
	salesBtn[currentImg].style.background = "white";
	changeImg(currentImg, 2);
	currentImg = 2;
	salesBtn[2].style.background = "#d22147";
	
});
/*for (var i = 0; i < salesBtn.length; i++) {
	salesBtn[i].addEventListener("mouseover", function() {
	console.log(currentImg);
	salesBtn[currentImg].style.background = "white";
	changeImg(0, i);
	currentImg = i;
	salesBtn[i].style.background = "#d22147";
});
};*/
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