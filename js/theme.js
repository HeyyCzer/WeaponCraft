$("body").fadeOut(0, () => {});
$("body").fadeIn(1500, () => {});

$(".toggleDark").click(function () {
	var styleSheet = document.querySelector("#currentStyle");
	var sheet;
	if (styleSheet.href.includes("dark")) {
		sheet = "css/lightStyles.css";
	} else {
		sheet = "css/darkStyles.css";
	}
	styleSheet.setAttribute("href", sheet);
	localStorage.setItem("czer_currentTheme", sheet);
});

$(document).ready(function () {
	if (localStorage.getItem("czer_currentTheme") != null) {
		var theme = localStorage.getItem("czer_currentTheme");
		var styleSheet = document.querySelector("#currentStyle");

		styleSheet.setAttribute("href", theme);
	}
});
