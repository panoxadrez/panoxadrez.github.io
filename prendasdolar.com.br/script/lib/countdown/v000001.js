function cursoCountdown(id, year, month, day) {

    if (id == 00002) { id = "#curso00002" }


    stamp = document.querySelector('.pagina-venda-header' + id + ' .cta-carimbo .carimbo-countdown .generic');
    dayContainer = document.querySelector('.pagina-venda-header' + id + ' .cta-carimbo .carimbo-countdown .counter .days');


    var countDownDate = new Date(year, month, day).getTime();

    var x = setInterval(function () {

        var now = new Date().getTime();

        var distance = countDownDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        console.log(days);
        dayContainer.innerHTML = days;





        
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        stamp.innerHTML = days + "d" + hours + "h" + minutes + "m" + seconds + "s ";


        console.log(days + "d  " + hours + "h  " + minutes + "m  " + seconds + "s  ");

        if (distance < 0) {
            clearInterval(x);
            stamp.innerHTML = "EXPIRED";
        }
    }, 1000);
}

cursoCountdown(2, 2019, 8, 14);