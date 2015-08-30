var strings = {};
strings.cn = [
	"幼教考试试题", 
	"五子棋", 
	"手写识别", 
	"代购网站", 
	"代购网站.新",
	"代购网站（手机版）",
	"计时器",
	"个人网站（旧）",
	"邮箱"
];
strings.en = [
	"Preschool Teacher Test Questions", 
	"Wu Zi Qi", 
	"Chinese Hand Writing Recognition", 
	"Online Store", 
	"New Online Store",
	"New Online Store(mobile version)",
	"Timer",
	"Personal WebSite",
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