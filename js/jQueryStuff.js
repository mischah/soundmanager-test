$(document).ready(function() {
	
	var details = $('.details').hide();
	$('.showDetails').click(function() {
    	details.slideToggle(function() {
			console.log('clicked');
			soundManager.reboot();
		});
	});
	
});