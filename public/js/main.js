var strings = {};
strings.cn = [
	"幼教考试试题 (更新: 2015-07-25)", 
	"五子棋 (更新: 2015-03-20)", 
	"手写识别 (更新: 2015-03-21)", 
	"代购网站 (更新: 2015-06-15)", 
	"代购网站.新 (更新: 2015-08-30)",
	"代购网站（手机版） (更新: 2015-07-29)",
	"计时器 (更新: 2015-07-25)",
	"个人网站（旧） (更新: 2015-03-29)",
	"邮箱"
];
strings.en = [
	"Preschool Teacher Test Questions (update: 2015-07-25)", 
	"Wu Zi Qi (update: 2015-03-20)", 
	"Chinese Hand Writing Recognition (update: 2015-03-21)", 
	"Online Store (update: 2015-06-15)", 
	"New Online Store (update: 2015-08-30)",
	"New Online Store(mobile version) (update: 2015-07-29)",
	"Timer (update: 2015-07-25)",
	"Personal WebSite (update: 2015-03-29)",
	"Email"
];

setLang("en");
var cn = document.querySelectorAll(".lang div");
cn[0].addEventListener("mousedown", function() {setLang("en");});
cn[1].addEventListener("mousedown", function() {setLang("cn");});

function setLang(lang) {
	var menu = document.querySelectorAll(".menu a");
	var la = document.querySelectorAll(".lang p");
	var ma = document.querySelectorAll(".mail p");
	for (var i = 0; i < menu.length; i++) {
		menu[i].innerHTML = strings[lang][i];
	}
	ma[0].innerText = strings[lang][i];
}