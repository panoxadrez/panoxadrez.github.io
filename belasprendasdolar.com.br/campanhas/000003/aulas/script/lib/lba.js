
carrosselIndexer = 0;
//const now = new Date();
const now = new Date(2019, 10, 10);

function lba(aulaLista, libDateRaw, slideSelector, tipo) {
    const listaAula = $('.aula-video .lista-aula .aula-' + aulaLista);
    const carrosselCell = $('.carousel-container #carousel-aula-dia-0' + slideSelector);
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