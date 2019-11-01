
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

carrosselIndexer = 0;

function lba(aulaLista, libDateRaw, slideSelector, tipo) {
    const listaAula = $('.aula-video .lista-aula .aula-' + aulaLista);
    const carrosselCell = $('.carousel-container #carousel-aula-dia-0' + slideSelector);
    const now = new Date(2019, 10, 10);
    libDateArray = libDateRaw.split(',');

    const libDate = new Date(libDateArray[0], libDateArray[1] - 1, libDateArray[2], libDateArray[3], libDateArray[4]);

    if (now.getFullYear() == libDate.getFullYear() && now.getMonth() == libDate.getMonth() && now.getDate() == libDate.getDate()) {
        listaAula.removeClass('lock').removeClass('amanha').removeClass('liberada');
        listaAula.addClass('hoje');
        listaAula.find('.status').html("HOJE!");


        if ((libDate - now) <= 0) {
            removeImg();
        }
        if (tipo != 'c') {
            //carrossel.flickity('select', slideSelector - 1);
            carrosselIndexer = slideSelector - 1;
        }
    }
    else if (now.getFullYear() == libDate.getFullYear() && now.getMonth() == libDate.getMonth() && now.getDate() > libDate.getDate()) {
        listaAula.removeClass('lock').removeClass('amanha').removeClass('hoje');
        listaAula.addClass('liberada');
        listaAula.find('.status').html("LIBERADA");
        removeImg();
        if (tipo == 'c') { liberaChamada() }
    }
    else {
        if (tipo == 'v' || tipo == 'c') {
            removeImg();
            $('.carousel-container #carosel-recado').remove();
        } else {
            removeIframe();
        }
        listaAula.removeClass('amanha').removeClass('liberada').removeClass('hoje');
        listaAula.addClass('lock');
        listaAula.find('.status').html("EM BREVE!");
    }

    function removeIframe() { carrosselCell.find('iframe').remove(); }
    function removeImg() { carrosselCell.find('img').remove(); }
    function liberaChamada() {
        $('.link-chamada').addClass('show');
        carrossel.flickity('select', slideSelector - 1);
    }

}
lba('01', '2019,11,2,18,00', 1, 'g');
lba('02', '2019,11,3,20,00', 2, 'v');
lba('03', '2019,11,4,18,00', 3, 'g');
lba('04', '2019,11,5,21,00', 4, 'v');
lba('05', '2019,11,6,18,00', 5, 'g');
lba('06', '2019,11,7,21,00', 6, 'v');
lba('07', '2019,11,8,18,00', 7, 'c');





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
    //initialIndex: 
});