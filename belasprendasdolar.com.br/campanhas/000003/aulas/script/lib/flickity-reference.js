// @koala-prepend  "../../../../../../lib/flickity/v2/js/flickity.pkgd.js"

//carrossel config
const carrossel = $('.carousel-container .carousel').flickity({
    draggable: false,
    freeScroll: false,
    prevNextButtons: false,
    pageDots: false,
    wrapAround: true,
    autoPlay: false,
    fade: true,
    hash: true,
    initialIndex: carrosselIndexer
});
