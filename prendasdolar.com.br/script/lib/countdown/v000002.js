function countdown(id, seletorPrincipal, seletorSecundario) {
    //if (id == 00002) { id = "#curso00002" }
    //id = "#curso00002";

    const mainContainer = $(seletorPrincipal + id + seletorSecundario + ' .countdown');

    const text = {
        main: mainContainer.find(' .main'),
        sub: mainContainer.find(' .sub')
    }

    const normalTimer = {
        container: $(seletorPrincipal + id + seletorSecundario + ' .countdown .normalTimer'),
        day: mainContainer.find('.normalTimer .day'),
        hour: mainContainer.find('.normalTimer .hour'),
        minute: mainContainer.find('.normalTimer .minute'),
        second: mainContainer.find('.normalTimer .second'),
        distance: new Date(
            mainContainer.find('.normalTimer').data('cinit').split(',')[0],
            mainContainer.find('.normalTimer').data('cinit').split(',')[1] - 1,
            mainContainer.find('.normalTimer').data('cinit').split(',')[2],
            mainContainer.find('.normalTimer').data('cinit').split(',')[3],
            mainContainer.find('.normalTimer').data('cinit').split(',')[4]
        )
    }

    const aditionalTimer = {
        container: $(seletorPrincipal + id + seletorSecundario + ' .countdown .addTimer'),
        day: mainContainer.find('.addTimer .day'),
        hour: mainContainer.find('.addTimer .hour'),
        minute: mainContainer.find('.addTimer .minute'),
        second: mainContainer.find('.addTimer .second'),
        distance:
            new Date(
                mainContainer.find('.addTimer').data('cadd').split(',')[0],
                mainContainer.find('.addTimer').data('cadd').split(',')[1] - 1,
                mainContainer.find('.addTimer').data('cadd').split(',')[2],
                mainContainer.find('.addTimer').data('cadd').split(',')[3],
                mainContainer.find('.addTimer').data('cadd').split(',')[4]
            ).getTime()
    }
    aditionalTimer.distanceValid;
    console.log(aditionalTimer.distanceInvalid);

    x = setInterval(function () {
        now = new Date().getTime();
        distance = {
            normal: normalTimer.distance - new Date().getTime(),
            aditional: aditionalTimer.distance - new Date().getTime()
        }

        //normal
        if (distance.normal > 0) {

            output(normalTimer.day, splitfy(Math.floor(distance.normal / (1000 * 60 * 60 * 24))));
            output(normalTimer.hour, splitfy(Math.floor((distance.normal % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))));
            output(normalTimer.minute, splitfy(Math.floor((distance.normal % (1000 * 60 * 60)) / (1000 * 60))));
            output(normalTimer.second, splitfy(Math.floor((distance.normal % (1000 * 60)) / 1000)));
        }
        //add time
        else if (distance.aditional > 0) {
            zeraPrincipal();
            text.main.html(text.main.data('ended'));
            text.sub.html(text.sub.data('ended'));

            output(aditionalTimer.day, splitfy(Math.floor(distance.aditional / (1000 * 60 * 60 * 24))));
            output(aditionalTimer.hour, splitfy(Math.floor((distance.aditional % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))));
            output(aditionalTimer.minute, splitfy(Math.floor((distance.aditional % (1000 * 60 * 60)) / (1000 * 60))));
            output(aditionalTimer.second, splitfy(Math.floor((distance.aditional % (1000 * 60)) / 1000)));
        }
        else {
            clearInterval(x);
            mainContainer.html("<p></p>");
            cursoMudaStatusLead(id);
        }

    }, 1000);
    function output(container, timeArray) {
        if (timeArray.length < 2) {
            container.html("<span class='time'>0" + timeArray[0] + "</span>");
        }
        else {
            container.html("<span class='time'>" + timeArray[0] + timeArray[1] + "</span>");
        }
    }
    function splitfy(a) {
        return a.toString(10).split("");
    }
    function zeraPrincipal() {
        output(normalTimer.day, [0]);
        output(normalTimer.hour, [0]);
        output(normalTimer.minute, [0]);
        output(normalTimer.second, [0]);

        normalTimer.container.addClass("ended");
        aditionalTimer.container.addClass("starded");
    }
}
countdown('#curso00002', '.pagina-venda-header', ' .cta-carimbo');