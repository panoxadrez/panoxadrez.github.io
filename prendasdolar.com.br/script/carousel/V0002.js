var carouselHome = new Flickity(document.querySelector('.carousel-home'), {
    draggable: '>1',
    lazyLoad: true,
    autoPlay: 15000,
    wrapAround: true,
    prevNextButtons: false,
    cellSelector: '.carousel-cell',
   // initialIndex: 1
});

var carouselCurso = new Flickity(document.querySelector('.carousel-header'), {
    lazyLoad: true,
    wrapAround: true,
    pageDots: false
});

var carouselCursoDestaque = new Flickity(document.querySelector('.carousel.cursos-destaque'), {
    cellSelector: '.carousel-cell',
    wrapAround: true,
    lazyLoad: true,
    autoPlay: false,
    //draggable: '>3',
    draggable: false,
    //prevNextButtons: false,
    pageDots: false,
    groupCells: true,
    setGallerySize: false,
    contain: true
});

//var autoPlayDepoimentos = 10500;
var autoPlayDepoimentos = 30500;

var width = parseInt(screen.width);
var height = parseInt(screen.height);
var rightToLeftStatus = false;

if (width > height){
rightToLeftStatus: true;    
}


var carouselDepoimentos1 = new Flickity(document.querySelector('.depoimentos-home1'), {
    autoPlay: autoPlayDepoimentos,lazyLoad: 2,wrapAround: true,pageDots: false,draggable: false,prevNextButtons: false, pauseAutoPlayOnHover: false, hash: true
});
var carouselDepoimentos2 = new Flickity(document.querySelector('.depoimentos-home2'), {
    autoPlay: autoPlayDepoimentos,lazyLoad: 2,wrapAround: true,pageDots: false,draggable: false,prevNextButtons: false, pauseAutoPlayOnHover: false, hash: true
});
var carouselDepoimentos3 = new Flickity(document.querySelector('.depoimentos-home3'), {
    autoPlay: autoPlayDepoimentos,lazyLoad: 2,wrapAround: true,pageDots: false,draggable: false,prevNextButtons: false, pauseAutoPlayOnHover: false, hash: true
});
var carouselDepoimentos4 = new Flickity(document.querySelector('.depoimentos-home4'), {
    autoPlay: autoPlayDepoimentos,lazyLoad: 2,wrapAround: true,pageDots: false,draggable: false,prevNextButtons: false, pauseAutoPlayOnHover: false, hash: true
});