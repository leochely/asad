function showVideo(i){
	$('#video, #overlay').fadeIn('slow');
    $('#video').html('<iframe width="560" height="315" src="https://www.youtube.com/embed/coyDLR8OxmA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>');
	
}

$(document).mouseup(function (e)
{
    if (!$('#video').is(e.target))
    {
        $('#video, #overlay').fadeOut('slow');
        $('#video').html('');
    }
});