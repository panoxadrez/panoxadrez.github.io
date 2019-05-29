var flkty = new Flickity(document.querySelector('.carousel-home'), {
    draggable: '>1',
    autoPlay: 15000,
    wrapAround: true,
    prevNextButtons: false,
    cellSelector: '.carousel-cell',
    initialIndex: 1
});


var flkty2 = new Flickity(document.querySelector('.carousel-curso'), {
    //watchCSS: true, 
    //draggable: true,
    //wrapAround: true,
    //prevNextButtons: true,
    //cellSelector: '.carousel-cell',
    
});
