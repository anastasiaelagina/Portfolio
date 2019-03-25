$('.navigation-button').on('click', function() {
	$(this).toggleClass('navigation-button--closed navigation-button--opened');
	$('.navigation__list-mobile').toggleClass('navigation__list-mobile--closed navigation__list-mobile--opened');
})