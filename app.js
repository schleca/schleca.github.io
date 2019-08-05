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
}); 

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

