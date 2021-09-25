	// Background image
	jQuery('.imgLiquid').each(function () {
	    jQuery(this).find('img').hide();
	    var imgURL = jQuery(this).find('img').attr('src');
	    jQuery(this).css('background-image', 'url(' + imgURL + ')');
	});

	// Product slider
	$('.slider-for').slick({
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    arrows: true,
	    dots: false,
	    fade: true,
	    asNavFor: '.slider-nav'
	});
	$('.slider-nav').slick({
	    slidesToShow: 8,
	    slidesToScroll: 1,
	    asNavFor: '.slider-for',
	    dots: true,
	    centerMode: true,
	    focusOnSelect: true

	});