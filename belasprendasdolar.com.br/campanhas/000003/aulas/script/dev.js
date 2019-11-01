
// @koala-prepend  "../../../../../lib/jquery/jquery-3.4.1.min.js"


// @koala-prepend  "../../../../../lib/axios/axios.min.js"


// @koala-prepend  "../../../../lib/scripts/instagram/dataig/v00001.js"
// @koala-prepend  "../../../../lib/scripts/instagram/getjson/v00001.js"

// @koala-prepend  "lib/facebook/pixel/v1.js"
// @koala-prepend  "lib/menu_aulas_display/v1.js"

// @koala-prepend  "../../../../../lib/flickity/v2/js/flickity.pkgd.js"


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
    hash: true
});


now = new Date(2019, 10, 8, 17, 50);
function lba(aulaLista, libDateRaw, aulaNum, slide, tipo) {
    libDateArray = libDateRaw.split(',');
    const libDate = new Date(libDateArray[0], libDateArray[1] - 1, libDateArray[2], libDateArray[3], libDateArray[4]);

    const listaAula = $('.aula-video .lista-aula .aula-' + aulaLista);
    const carrosselCell = $('.carousel-container #carousel-aula-dia-0' + aulaNum);


    //HOJE!
    if (now.getFullYear() == libDate.getFullYear() && now.getMonth() == libDate.getMonth() && now.getDate() == libDate.getDate()) {
        listaAula.removeClass('lock').removeClass('amanha').removeClass('liberada');
        listaAula.addClass('hoje');
        listaAula.find('.status').html("HOJE!");

        if ((libDate - now) <= 0) {
            removeImg();
        }
        if (tipo != 'c') {
            removeChamada()
            carrossel.flickity('select', slide);
        }
    }
    // liberada
    else if (now.getFullYear() == libDate.getFullYear() && now.getMonth() == libDate.getMonth() && now.getDate() > libDate.getDate()) {
        listaAula.removeClass('lock').removeClass('amanha').removeClass('hoje');
        listaAula.addClass('liberada');
        listaAula.find('.status').html("LIBERADA");
        removeImg();
        if (tipo == 'c') {
            liberaChamada();
            carrossel.flickity('select', slide);
        }
    }
    //em breve
    else {
        listaAula.removeClass('amanha').removeClass('liberada').removeClass('hoje');
        listaAula.addClass('lock');
        listaAula.find('.status').html("EM BREVE!");
        if (tipo == 'v' || tipo == 'c') {
            removeImg();
            removeChamada()
        } else {
            removeIframe();
        }
    }

    function removeIframe() { carrosselCell.find('iframe').delete(); }
    function removeImg() { carrosselCell.find('img').delete(); }
    function removeChamada() {
        $('.carousel-container #carosel-recado').delete();
    }
    function liberaChamada() {
        $('.link-chamada').addClass('show');
    }

}
