function hideLogo(){
	$("#logo_container").fadeOut();
	$("#wrapper").delay(300).fadeIn();
}

$(document).ready(function(){
	$("article").hide().delay(200).fadeIn(1300);
});