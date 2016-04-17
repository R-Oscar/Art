function Rating(element, rating) {
	this.element = element;
	this.rating = rating;
	this.maxRating = 5;
}

Rating.prototype.init = function() {
	var intPart = Math.floor(this.rating);
	for (var i = 0; i < intPart; i++) {
		this.element.append('<div class="content-star-container"><img src="images/icons/star_checked.png" alt="Rated" class="content-star"></div>');
	}

	if (intPart != this.rating) {
		this.element.append('<div class="content-star-container"><img src="images/icons/star_half-checked.png" alt="Half-rated" class="content-star"></div>');
	}

	for (var i = 0; i < this.maxRating - (intPart + 1); i++) {
		this.element.append('<div class="content-star-container"><img src="images/icons/star_unchecked.png" alt="Not rated" class="content-star"></div>');
	}

	$('.content-star-container').each(function() {
		var height = $(this).css('width', '15px').parent().parent().parent().height();
		$(this).width(height * 0.13);
	});
}

$(document).ready(function() {
	console.log("rating.js");

	var ratingElem = $('.content-stars');
	ratingElem.each(function() {
		new Rating($(this), ratingElem.data('rating')).init();
	});

}); 