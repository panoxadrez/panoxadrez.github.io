function cursoCountdown(id, initDate, addTime, endtext) {
    if (id == 00002) { id = "#curso00002" }

    mainContainer = document.querySelector('.pagina-venda-header' + id + ' .cta-carimbo .carimbo-countdown');

    normalContainer = document.querySelector('.pagina-venda-header' + id + ' .cta-carimbo .carimbo-countdown .counter');
    dayContainer = document.querySelector('.pagina-venda-header' + id + ' .cta-carimbo .carimbo-countdown .counter .days');
    hourContainer = document.querySelector('.pagina-venda-header' + id + ' .cta-carimbo .carimbo-countdown .counter .hours');
    minuteContainer = document.querySelector('.pagina-venda-header' + id + ' .cta-carimbo .carimbo-countdown .counter .minutes');
    secondContainer = document.querySelector('.pagina-venda-header' + id + ' .cta-carimbo .carimbo-countdown .counter .seconds');

    containerAdicional = document.querySelector('.pagina-venda-header' + id + ' .cta-carimbo .carimbo-countdown .addTimer');
    dayContainerAdicional = document.querySelector('.pagina-venda-header' + id + ' .cta-carimbo .carimbo-countdown .addTimer .days');
    hourContainerAdicional = document.querySelector('.pagina-venda-header' + id + ' .cta-carimbo .carimbo-countdown .addTimer .hours');
    minuteContainerAdicional = document.querySelector('.pagina-venda-header' + id + ' .cta-carimbo .carimbo-countdown .addTimer .minutes');
    secondContainerAdicional = document.querySelector('.pagina-venda-header' + id + ' .cta-carimbo .carimbo-countdown .addTimer .seconds');

    zero = [0];
    /* hour = initDate[0];
    minute = initDate[1];
    day = initDate[2];
    month = initDate[3] - 1;
    year = initDate[4]; */

    //year, month, day, hour, minute

    countDownDate = new Date(
        initDate[4],
        initDate[3] - 1, //month
        initDate[2],
        initDate[0],
        initDate[1]
    ).getTime();

    aditionalTime = new Date(
        addTime[4],
        addTime[3] - 1, //month
        addTime[2],
        addTime[0],
        addTime[1]
    ).getTime();

    x = setInterval(function () {
        now = new Date().getTime();

        distance = countDownDate - now;
        addDistance = aditionalTime - now;

        //normal
        if (distance > 0) {
            days = splitfy(Math.floor(distance / (1000 * 60 * 60 * 24)));
            hours = splitfy(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
            minutes = splitfy(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
            seconds = splitfy(Math.floor((distance % (1000 * 60)) / 1000));

            output(dayContainer, days, 'days');
            output(hourContainer, hours);
            output(minuteContainer, minutes);
            output(secondContainer, seconds);
        }
        //add time
        else if (addDistance > 0) {

            zeraPrincipal();


            days = splitfy(Math.floor(addDistance / (1000 * 60 * 60 * 24)));
            hours = splitfy(Math.floor((addDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
            minutes = splitfy(Math.floor((addDistance % (1000 * 60 * 60)) / (1000 * 60)));
            seconds = splitfy(Math.floor((addDistance % (1000 * 60)) / 1000));

            output(dayContainerAdicional, days, 'days');
            output(hourContainerAdicional, hours);
            output(minuteContainerAdicional, minutes);
            output(secondContainerAdicional, seconds);

        }
        else {
            clearInterval(x);
            mainContainer.innerHTML = "<p></p>";
        }

    }, 1000);
    function output(container, timeArray, local) {
        container.innerHTML = "";
        aux = "";
        /* switch (local) {
            case 'day': aux = "d"; break
            default: aux = "aa";
        } */
        if (timeArray.length < 2) {
            container.innerHTML = "<span class='time'>0</span>";
            container.innerHTML = container.innerHTML + "<span class='time'>" + timeArray[0] + aux + " </span>";
        }
        else {
            timeArray.forEach(time => {
                container.innerHTML = container.innerHTML + "<span class='time'>" + time + "</span>";
            });
        }
    }
    function splitfy(a) {
        return a.toString(10).split("");
    }
    function zeraPrincipal() {
        output(dayContainer, zero);
        output(hourContainer, zero);
        output(minuteContainer, zero);
        output(secondContainer, zero);

        normalContainer.classList.add("ended");
        containerAdicional.style = ("display: flex");
    }
}
//var = [hora, minuto, dia, mes, ano]
curso0002init = [0, 0, 14, 9, 2019];
curso0002add = [0, 0, 15, 9, 2019];
cursoCountdown(2, curso0002init, curso0002add, "Inscrições encerradas");