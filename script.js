$(document).ready(function(){
	newGrid(true);
	highlightSquares();
});

var newGrid = function(begin){
	$("#container").empty();
	var num = 4;
	if(!begin){
		num = prompt("How many squares per row/column do you want? (up to 12)");
		generateSquares(num);
		if(num > 4){
			$(".square").css("width", (158/num));
			$(".square").css("height", (158/num));
		} else {
			$(".square").css("width", (158/num));
			$(".square").css("height", (158/num));
		}
	} else {
		generateSquares(num);
	}
}

var generateSquares = function(num){
	for(var i = 0; i < Math.pow(num, 2); i++){
			$("#container").append("<div class='square'></div>");
	}
	highlightSquares();
}

var highlightSquares = function(){
	$(".square").hover(function(){
		var randomColor = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
		$(this).css("background-color", randomColor);
	});
}