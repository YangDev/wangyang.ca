var second = 0;
var minute = 0;
var textOfSecond;
var textOfMinute;
var k = 0;
var speed = 1000;
var started = false;
document.getElementById("time").innerHTML ="00:00"
function timer() {
	if (second === -1) {
		minute -= k;
		second = 59;
	}
	if (second === 0 && minute === 0) {
		minute = 0;
		second = 0;
	}

	if (second >= 0 && second < 10) {
		textOfSecond = "0" + second.toString();
	} else {
		textOfSecond = second.toString();
	}

	if (minute >= 0 && minute < 10) {
		textOfMinute = "0" + minute.toString();
	} else {
		textOfMinute = minute.toString();
	}
	document.getElementById("time").innerHTML = textOfMinute+ ":" + textOfSecond;
	second -= k;
}

var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var text1 = document.getElementById("textOfBtn1");
var text2 = document.getElementById("textOfBtn2");
var input = document.getElementById("input1");
btn2.addEventListener("mousedown", function() {
	if (k === 0) {
		k = 1;
		text2.innerHTML = "Pause";
	} else {
		k = 0;
		text2.innerHTML = "Resume";
	}
});

btn1.addEventListener("mousedown", function() {
	if (started === false) {
		k = 1;
		second = 59;
		minute = Number(input.value) - 1;
		text1.innerHTML = "Cancel";
		text1.style.color = "red";
		started = true;
	} else {
		second = 0;
		minute = 0;
		k = 0
		started = false;
		text1.innerHTML = "Start";
		text1.style.color = "#3b3"
	}
});

var myVar = setInterval(function() {
	timer();
}, speed);