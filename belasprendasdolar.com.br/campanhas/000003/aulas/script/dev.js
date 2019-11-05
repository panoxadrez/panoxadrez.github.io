
// @koala-prepend  "../../../../../lib/jquery/jquery-3.4.1.min.js"

// @koala-prepend  "../../../../../lib/axios/axios.min.js"

// @koala-prepend  "../../../../lib/scripts/instagram/dataig/v00001.js"
// @koala-prepend  "../../../../lib/scripts/instagram/igLoadMore/v00001.js"

// @koala-prepend  "lib/facebook/pixel/v1.js"
// @koala-prepend  "lib/menu_aulas_display/v1.js"

// @koala-prepend  "../../../../../lib/flickity/v2/js/flickity.pkgd.js"


//dataIgPost();
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


function lba(aulaLista, libDateRaw, aulaNum, slide, tipo) {
    libDateArray = libDateRaw.split(',');
    const libDate = new Date(libDateArray[0], libDateArray[1] - 1, libDateArray[2], libDateArray[3], libDateArray[4]);

    const listaAula = $('.aula-video .lista-aula .aula-' + aulaLista);
    const carrosselCell = $('.carousel-container #carousel-aula-dia-0' + aulaNum);

    //liberada
    if (
        now.getFullYear() == libDate.getFullYear() &&
        now.getMonth() == libDate.getMonth() &&
        now.getDate() > libDate.getDate()
    ) {
        listaAula.removeClass('lock').removeClass('amanha').removeClass('hoje');
        listaAula.addClass('liberada');
        listaAula.find('.status').html("LIBERADA");
        carrossel.flickity('select', slide);

        if (tipo == 'campanha') {
            $('.link-chamada').addClass('show');
        }
    }
    //hoje
    else if (
        now.getFullYear() == libDate.getFullYear()
        && now.getMonth() == libDate.getMonth()
        && now.getDate() == libDate.getDate()
    ) {
        listaAula.removeClass('lock').removeClass('amanha').removeClass('liberada');
        listaAula.addClass('hoje');
        listaAula.find('.status').html("HOJE!");

        if ((libDate - now) <= 0) {
            if (tipo == 'gravada' || tipo == 'aovivo') {
                carrosselCell.find('img').remove();
            } else {
                carrossel.flickity('select', slide);
                $('.link-chamada').addClass('show');
            }

        }
        else {
            if (tipo == 'gravada') {
                carrosselCell.find('iframe').remove();
            } else if (tipo == 'campanha') {
                $('.carousel-cell#carosel-recado').remove()
            }
        }
        if (tipo != 'c') {
            carrossel.flickity('select', slide);
        }


    }
    //em breve
    else {
        listaAula.removeClass('hoje').removeClass('amanha').removeClass('liberada');
        listaAula.addClass('lock');
        listaAula.find('.status').html("EM BREVE");

        if (tipo == 'gravada') {
            carrosselCell.find('iframe').remove();
        } else if (tipo == 'campanha') {
            $('.carousel-cell#carosel-recado').remove()

        }
    }
}
now = new Date();

lba('01', '2019,11,2,18,00', 1, 0, 'gravada');
lba('02', '2019,11,3,20,00', 2, 1, 'aovivo');
lba('03', '2019,11,4,18,00', 3, 2, 'gravada');
lba('04', '2019,11,5,21,00', 4, 3, 'aovivo');
lba('05', '2019,11,6,18,00', 5, 4, 'gravada');
lba('06', '2019,11,7,21,00', 6, 5, 'aovivo');
lba('07', '2019,11,8,18,00', 7, 6, 'campanha');
