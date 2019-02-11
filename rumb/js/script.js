$('.slider').noBrainerSlider({
    nav: $('.nav-for-slider'),
    autoplay: false
});

// use api to control the slider if needed
var nbs = $('.slider').data('noBrainerSlider');

nbs.gotoSlide(3);
nbs.setAutoplay(true);
                