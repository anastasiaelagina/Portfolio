$('.navigation__mobile-button').on('click', function() {
	$(this).toggleClass('navigation__mobile-button--closed navigation__mobile-button--opened');
	$('.navigation__mobile').toggleClass('navigation__mobile--closed navigation__mobile--opened');
})
