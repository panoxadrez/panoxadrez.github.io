function cursoCountdown(id, year, month, day) {

    if (id == 00002) { id = "#curso00002" }


    stamp = document.querySelector('.pagina-venda-header' + id + ' .cta-carimbo .carimbo-countdown span');

    // Set the date we're counting down to
    var countDownDate = new Date(year, month, day).getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in an element with id="demo"
        stamp.innerHTML = days + "d" + hours + "h"
            + minutes + "m" + seconds + "s ";
        console.log(days + "d" + hours + "h" + minutes + "m" + seconds + "s ");

        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(x);
            stamp.innerHTML = "EXPIRED";
        }
    }, 1000);
}

cursoCountdown(2, 2019, 8, 14);