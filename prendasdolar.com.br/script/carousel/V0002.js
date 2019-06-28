
var autoPlayDepoimentos = 10500;
//var autoPlayDepoimentos = 3500;


var carouselHome = new Flickity(document.querySelector('.carousel-home'), {
    draggable: '>1',
    lazyLoad: true,
    autoPlay: 15000,
    wrapAround: true,
    prevNextButtons: false,
    cellSelector: '.carousel-cell',
    // initialIndex: 1
});

var carouselCurso = new Flickity(document.querySelector('section.header-curso .carousel-header'), {
    draggable: false,
    wrapAround: true,
    prevNextButtons: false,
});