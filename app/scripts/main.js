$(window).resize(function(){
	if ($(window).width() <= 1000){	
		$('.shark-image').hide()
	};
    if ($(window).width() >= 1000){	
		$('.shark-image').show()
	}	
});
