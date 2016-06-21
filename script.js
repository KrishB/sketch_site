$(document).ready(function(){
	for(var i = 0; i < 16; i++){
		$("#container").append("<div class='square'></div>");
	}
	$(".square").hover(function(){
		$(this).css("background-color", "blue");
	});
});