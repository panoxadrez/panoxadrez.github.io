var carouselHeaderHome = new Flickity(document.querySelector('.carousel-home'), {
    draggable: '>1',
    autoPlay: 15000,
    wrapAround: true,
    prevNextButtons: false,
    cellSelector: '.carousel-cell',
    initialIndex: 1
});


var carouselHeaderVenda = new Flickity(document.querySelector('.carousel-curso'), {

    watchCSS: true,
    wrapAround: true,
    cellSelector: '.carousel-cell',
    initialIndex: 1
});