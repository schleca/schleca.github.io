$(document).ready(function(){


	$('a').click(function(e) {		
		var attr = $(this).attr('target');
		if (attr !== '_blank'){
			e.preventDefault();
			newLocation = this.href;
			$('body').fadeOut('slow', newpage);
		}
	});
	function newpage() {
		window.location = newLocation;
	}
	
	/*! Fades in whole page on load */
	// $('body').css('display', 'none');
	// $('body').fadeIn(500);

}); 

	function topFunction() {
	  document.body.scrollTop = 0;
	  document.documentElement.scrollTop = 0;
	}

