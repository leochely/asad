function hideLogo(){
	$("#logo_container").fadeOut();
	$("#main_content").delay(300).fadeIn();
	$("footer").delay(300).fadeIn();
}

$(document).ready(function(){
	$("article").hide().delay(200).fadeIn(1300);
});