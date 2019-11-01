
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

$(
    function () {
        $('.carousel-container #carousel-aula-dia-01').show('img', 'iframe');
        $('.carousel-container #carousel-aula-dia-02').show('img', 'iframe');
        $('.carousel-container #carousel-aula-dia-03').show('img', 'iframe');
        $('.carousel-container #carousel-aula-dia-04').show('img', 'iframe');
        $('.carousel-container #carousel-aula-dia-05').show('img', 'iframe');
        $('.carousel-container #carousel-aula-dia-06').show('img', 'iframe');
        $('.carousel-container #carosel-recado').show();
    }
);

now = new Date();
function lba(aulaLista, libDateRaw, aulaNum, slide, tipo) {

    const listaAula = $('.aula-video .lista-aula .aula-' + aulaLista);
    const carrosselCell = $('.carousel-container #carousel-aula-dia-0' + aulaNum);
    libDateArray = libDateRaw.split(',');

    const libDate = new Date(libDateArray[0], libDateArray[1] - 1, libDateArray[2], libDateArray[3], libDateArray[4]);

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

    function removeIframe() { carrosselCell.find('iframe').hide(); }
    function removeImg() { carrosselCell.find('img').hide(); }
    function removeChamada() {
        $('.carousel-container #carosel-recado').hide();
    }
    function liberaChamada() {
        $('.link-chamada').addClass('show');
    }

}

lba('01', '2019,11,2,18,00', 1, 'g', 0);
lba('02', '2019,11,3,20,00', 2, 'v', 1);
lba('03', '2019,11,4,18,00', 3, 'g', 2);
lba('04', '2019,11,5,21,00', 4, 'v', 3);
lba('05', '2019,11,6,18,00', 5, 'g', 4);
lba('06', '2019,11,7,21,00', 6, 'v', 5);
lba('', '2019,11,8,18,00', 7, 'c', 6);
