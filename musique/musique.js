function showVideo(i){
	$('#overlay').fadeIn('slow');
	$('#video').fadeIn('fast');
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
		case 9:
			$('#video').html('<iframe width="560" height="315" src="https://www.youtube.com/embed/2p_iZAw_V6E" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>');
			break;
		case 10:
			$('#video').html('<iframe width="560" height="315" src="https://www.youtube.com/embed/w-FrqoGM0yY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>');
			break;
		case 11:
			$('#video').html('<iframe width="560" height="315" src="https://www.youtube.com/embed/IdM6fYAot70" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>');
			break;
		case 12:
			$('#video').html('<iframe width="560" height="315" src="https://www.youtube.com/embed/C5PF_8i0WYU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>');
			break;
		case 13:
			$('#video').html('<iframe width="560" height="315" src="https://www.youtube.com/embed/RMjfYRN1wgU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>');
			break;
		case 14:
			$('#video').html('<iframe width="560" height="315" src="https://www.youtube.com/embed/Gh71clqHNg4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>');
			break;
		case 15:
			$('#video').html('<iframe width="560" height="315" src="https://www.youtube.com/embed/g8Yvii_aqDk" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>');
			break;
		case 16:
			$('#video').html('<iframe width="560" height="315" src="https://www.youtube.com/embed/bWA6NPfRDPs" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>');
			break;
		default:
			$('#video').html("Cette musique n'est pas encore disponible sur Youtube"); 
			break;
	}
}

$(document).mouseup(function (e){
    if (!$('#video').is(e.target))
    {
        $('#video, #overlay').fadeOut('slow');
        $('#video').html('');
    }
});

