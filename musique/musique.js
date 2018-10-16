function showVideo(i){
	$('#video, #overlay').fadeIn('slow');
	switch(i){
		case 1:
			$('#video').html('<iframe width="560" height="315" src="https://www.youtube.com/embed/gncLO8hr0gw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>');
			break;
		case 2:
			$('#video').html('<iframe width="560" height="315" src="https://www.youtube.com/embed/kZ2tVyNoj6E" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>');
			break;
		case 3:
			$('#video').html('<iframe width="560" height="315" src="https://www.youtube.com/embed/coyDLR8OxmA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>');
			break;
		case 4:
			$('#video').html('<iframe width="560" height="315" src="https://www.youtube.com/embed/GwSdT0lZOV4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>');
			break;
		case 5:
			$('#video').html('<iframe width="560" height="315" src="https://www.youtube.com/embed/uXPvrwHjVZk" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>');
			break;
		case 6:
			$('#video').html('<iframe width="560" height="315" src="https://www.youtube.com/embed/MfydP0-onAo" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>');
			break;
		case 7:
			$('#video').html('<iframe width="560" height="315" src="https://www.youtube.com/embed/SfyNekcNRg4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>');
			break;
		case 8:
			$('#video').html('<iframe width="560" height="315" src="https://www.youtube.com/embed/tnPSoe9ZaeY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>');
			break;
		default:
			$('#video').html("Cette musique n'est pas encore disponible sur Youtube"); 
			break;
	}
}

$(document).mouseup(function (e)
{
    if (!$('#video').is(e.target))
    {
        $('#video, #overlay').fadeOut('slow');
        $('#video').html('');
    }
});

