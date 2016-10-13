

var text = ["line1","line2"]; 
$(function() {
	index = 1;

	$('#button').html(text[index]);

	$('#button').on('click',function(e) {
		alert("Hello!")
	});
});