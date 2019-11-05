
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

        if (tipo == 'c') {
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
            if (tipo == 'g' || tipo == 'v') {
                carrosselCell.find('img').remove();
            } else {
                carrossel.flickity('select', slide);
                $('.link-chamada').addClass('show');
            }

        }
        else {
            if (tipo == 'g') {
                carrosselCell.find('iframe').remove();
            } else if (tipo == 'c') {
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

        if (tipo == 'g') {
            carrosselCell.find('iframe').remove();
        } else if (tipo == 'c') {
            $('.carousel-cell#carosel-recado').remove()

        }
    }

    function removeImg() { carrosselCell.find('img').remove(); }
    function removeChamada() { $('.carousel-container #carosel-recado').remove(); }

}
now = new Date(2019, 11, 10, 20, 00);

lba('01', '2019,11,2,18,00', 1, 0, 'g');
lba('02', '2019,11,3,20,00', 2, 1, 'v');
lba('03', '2019,11,4,18,00', 3, 2, 'g');
lba('04', '2019,11,5,21,00', 4, 3, 'v');
lba('05', '2019,11,6,18,00', 5, 4, 'g');
lba('06', '2019,11,7,21,00', 6, 5, 'v');
lba('07', '2019,11,8,18,00', 7, 6, 'c');
