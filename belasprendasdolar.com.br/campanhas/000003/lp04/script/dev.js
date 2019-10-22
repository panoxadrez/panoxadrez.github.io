
// @koala-prepend  "../../../../lib/jquery/jquery-3.4.1.min.js"
// @koala-prepend  "../../../../lib/axios/axios.min.js"

// @koala-prepend  "../../../../../lib/bootstrap/4.3.1/js/bootstrap.bundle.min.js"
// @koala-prepend  "../../../../../lib/flickity/v2/js/flickity.pkgd.js"

// @koala-prepend  "../../../../lib/scripts/instagram/dataig/v00001.js"
// @koala-prepend  "../../../../lib/scripts/instagram/getjson/v00001.js"

// @koala-prepend  "../../../../lib/scripts/popup/v00001.js"
// @koala-prepend  "../../../../lib/scripts/leadlovers/form-capture/v2.js"
// @koala-prepend  "lib/facebook/pixel/v1.js"


dataIgPost();

function liberaAula(aula, dia, slide) {
    const now = new Date().getTime();

    //caso falte mais de um dia
    if ((dia - now) > 86400000) {
        aula.find('.status').html('EM BREVE');
        aula.addClass('lock');
    }
    //caso falte menos de um dia
    else if ((dia - now) > 0) {
        aula.find('.status').html('AMANHÃ')
        aula.addClass('lock');

    }
    // caso esteja no dia e não tenha mais de um dai
    else if ((dia - now) <= 0 && (dia - now) >= -86399999) {

        //console.log("achou hoje: "); console.log(aula); console.log("libera em " + aula); console.log("slide: " + slide);
        aula.addClass('hoje');
        aula.find('.status').html('HOJE!');
        carrossel.flickity('select', slide);
    }
    //caso já tenha se passado mais de um dia
    else {
        aula.find('.status').html('LIBERADA');
        if (slide == 5) {
            carrossel.flickity('select', 6);
            $('.link-chamada').addClass('show')
        }
    }
}

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

liberaAula($('.aula-video .lista-aula .aula-01'), new Date(2019, 10, 2, 0, 0).getTime(), 0);
liberaAula($('.aula-video .lista-aula .aula-02'), new Date(2019, 10, 3, 0, 0).getTime(), 1);
liberaAula($('.aula-video .lista-aula .aula-03'), new Date(2019, 10, 4, 0, 0).getTime(), 2);
liberaAula($('.aula-video .lista-aula .aula-04'), new Date(2019, 10, 5, 0, 0).getTime(), 3);
liberaAula($('.aula-video .lista-aula .aula-05'), new Date(2019, 10, 6, 0, 0).getTime(), 4);
liberaAula($('.aula-video .lista-aula .aula-06'), new Date(2019, 10, 7, 0, 0).getTime(), 5);

