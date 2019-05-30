var carouselHome = new Flickity(document.querySelector('.carousel-home'), {
    draggable: '>1',
    autoPlay: 15000,
    wrapAround: true,
    prevNextButtons: false,
    cellSelector: '.carousel-cell',
    initialIndex: 1
});


var carouselCurso = new Flickity(document.querySelector('.carousel.header'), {
    wrapAround: true,
    cellSelector: '.carousel-cell'
    
});
