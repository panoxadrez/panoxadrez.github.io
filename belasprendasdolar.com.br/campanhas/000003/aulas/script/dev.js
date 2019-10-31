
// @koala-prepend  "../../../../lib/jquery/jquery-3.4.1.min.js"
// @koala-prepend  "../../../../lib/axios/axios.min.js"

// @prepend  "../../../../../lib/bootstrap/4.3.1/js/bootstrap.bundle.min.js"
// @koala-prepend  "../../../../../lib/flickity/v2/js/flickity.pkgd.js"

// @koala-prepend  "../../../../lib/scripts/instagram/dataig/v00001.js"
// @koala-prepend  "../../../../lib/scripts/instagram/getjson/v00001.js"

// @koala-prepend  "../../../../lib/scripts/popup/v00001.js"
// @prepend  "../../../../lib/scripts/leadlovers/form-capture/v2.js"
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
    hash: true //,//initialIndex: 
});

function liberaAula(aula, date, slide, tipo) {
    const listaAula = $('.aula-video .lista-aula .aula-' + aula);
    const dataLib = new Date(date[0], date[1], date[2], date[3], date[4]).getTime();
    //const now = new Date().getTime();
    const now = new Date(2019, 10, 2, 17, 0).getTime();









    
}
liberaAula('01', [2019, 10, 2, 18, 0], 0, 'g'); //gravado
liberaAula('02', [2019, 10, 3, 20, 0], 1, 'v'); //ao vivo
liberaAula('03', [2019, 10, 4, 18, 0], 2, 'g'); //gravado
liberaAula('04', [2019, 10, 5, 21, 0], 3, 'v'); //ao vivo
liberaAula('05', [2019, 10, 6, 18, 0], 4, 'g'); //gravado
liberaAula('06', [2019, 10, 7, 21, 0], 5, 'v'); //ao vivo
liberaAula('07', [2019, 10, 8, 0, 0], 6, 'c');  //chamada