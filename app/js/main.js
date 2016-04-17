$(document).ready(function() {
	console.log("main.js");
	if ($(document).height() <= $(window).height())
		$("footer.footer-container").addClass("navbar-fixed-bottom");

	$('#posts').isotope({
		itemSelector: '.content-column',
		masonry: {
			columnWidth: '.content-column'
		}
	});

	$('.content-img-container').each(function() {
		var height = $(this).height();

		$(this).find('p').css('margin-top', height * 0.026);
		$(this).find('p').css('margin-bottom', height * 0.026);

		$(this).find('.content-painting').css('font-size', height * 0.084);
		$(this).find('.content-painting').css('margin-top', height * 0.016);
		$(this).find('.content-painting').css('margin-bottom', height * 0.016);
		$(this).find('.content-artist').css('margin-top', height * 0.016);
		$(this).find('.content-artist').css('margin-bottom', height * 0.016);
		$(this).find('.content-artist').css('font-size', height * 0.084);
		$(this).find('.content-heading').css('margin-bottom', height * 0.06);
		$(this).find('.content-heading').css('padding-bottom', height * 0.044);
		$(this).find('.content-rating').css('font-size', height * 0.084);
	});

	// $('.content-star-container').css('width', height * 0.13);
});