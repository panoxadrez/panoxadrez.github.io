function cursoCountdown(id, year, month, day) {

    if (id == 00002) { id = "#curso00002" }


    mainContainer = document.querySelector('.pagina-venda-header' + id + ' .cta-carimbo .carimbo-countdown div');
    dayContainer = document.querySelector('.pagina-venda-header' + id + ' .cta-carimbo .carimbo-countdown .counter .days');
    hourContainer = document.querySelector('.pagina-venda-header' + id + ' .cta-carimbo .carimbo-countdown .counter .hours');
    minuteContainer = document.querySelector('.pagina-venda-header' + id + ' .cta-carimbo .carimbo-countdown .counter .minutes');
    secondContainer = document.querySelector('.pagina-venda-header' + id + ' .cta-carimbo .carimbo-countdown .counter .seconds');


    countDownDate = new Date(year, month, day).getTime();

    x = setInterval(function () {

        now = new Date().getTime();

        distance = countDownDate - now;
        days = Math.floor(distance / (1000 * 60 * 60 * 24));
        hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        seconds = Math.floor((distance % (1000 * 60)) / 1000);
        //console.log(days + "d  " + hours + "h  " + minutes + "m  " + seconds + "s  ");

        days = days.toString(10).split("");
        hours = hours.toString(10).split("");
        minutes = minutes.toString(10).split("");
        seconds = seconds.toString(10).split("");
        //console.log("");
        //console.log(seconds);
        //console.log("seconds length: " + seconds.length);
        //console.log("-------------------------------------");



        output(dayContainer, days);
        output(hourContainer, hours);
        output(minuteContainer, minutes);
        output(secondContainer, seconds);

        if (distance < 0) {
            clearInterval(x);
            mainContainer.innerHTML = "<p>VAGAS ENCERRADAS</p>";
        }

        function output(container, timeArray) {
            container.innerHTML = "";
            if (timeArray.length < 2) {
                container.innerHTML = "<span class='time'>0</span>";
                container.innerHTML = container.innerHTML + "<span class='time'>" + timeArray[0] + "</span>";
            }
            else {
                timeArray.forEach(time => {
                    container.innerHTML = container.innerHTML + "<span class='time'>" + time + "</span>";
                });
            }
        }

    }, 1000);
}

cursoCountdown(2, 2019, 8, 15);