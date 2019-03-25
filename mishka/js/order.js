$('.goods__btn').on('click', function() {
	$(this).toggleClass('goods__btn--closed goods__btn--opened');
	$('.goods-order').toggleClass('goods-order--closed goods-order--opened');
})