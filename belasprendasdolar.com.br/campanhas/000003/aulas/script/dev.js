
// @koala-prepend  "../../../../../lib/jquery/jquery-3.4.1.min.js"
// @koala-prepend  "lib/lba.js"
// @koala-prepend  "../../../../../lib/flickity/v2/js/flickity.pkgd.js"

// @koala-prepend  "../../../../../lib/axios/axios.min.js"


// @koala-prepend  "../../../../lib/scripts/instagram/dataig/v00001.js"
// @koala-prepend  "../../../../lib/scripts/instagram/getjson/v00001.js"

// @koala-prepend  "lib/facebook/pixel/v1.js"
// @koala-prepend  "lib/menu_aulas_display/v1.js"




dataIgPost();



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
