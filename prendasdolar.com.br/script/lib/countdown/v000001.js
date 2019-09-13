function cursoCountdown(id) {
    //if (id == 00002) { id = "#curso00002" }
    //id = "#curso00002";


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

    endedMain = document.querySelector('.pagina-venda-header' + id + ' .cta-carimbo .carimbo-countdown .main');
    endedSub = document.querySelector('.pagina-venda-header' + id + ' .cta-carimbo .carimbo-countdown .sub');

    zero = [0];

    //minute
    initDate = document.querySelector(".carimbo-countdown .counter");
    initDate = JSON.parse("[" + initDate.dataset.cinit + "]");

    countDownDate = new Date(
        initDate[4],        //year
        initDate[3] - 1,    //month
        initDate[2],        //day
        initDate[0],        //hour
        initDate[1]         //minute
    ).getTime();

    addTimer = document.querySelector(".carimbo-countdown .addTimer");
        if (addTimer.dataset.cadd == undefined){
            addTimer = [0, 0, 0, 0, 0]
        }
        else{
            addTimer = JSON.parse("[" + addTimer.dataset.cadd + "]");
        }



    //addTimer = [0, 0, 0, 0, 0];
    //addTimer = JSON.parse("[" + addTimer.dataset.cadd + "]");




    //[0, 0, 0, 0, 0] ;


    //if (addTimer == undefined) { addTimer = [0, 0, 0, 0, 0] }

    aditionalTime = new Date(
        addTimer[4],         //year
        addTimer[3] - 1,     //month
        addTimer[2],         //day
        addTimer[0],         //hour
        addTimer[1]          //minute
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
            endedMain.innerHTML = endedMain.dataset.ended;
            endedSub.innerHTML = endedSub.dataset.ended;


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
            cursoMudaStatusLead(id);
        }

    }, 1000);
    function output(container, timeArray, local) {
        container.innerHTML = "";
        local = local;
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
cursoCountdown("#curso00002");