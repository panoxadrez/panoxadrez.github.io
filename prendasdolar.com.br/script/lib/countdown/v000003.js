function cursoCountdown(info, identificador) {
    function shownormalcta() {
        $('.cta-container').removeClass('hide');
    }
    function output(timeArray) {
        timeArray = timeArray.toString(10);
        if (timeArray.length < 2) {
            return "0" + timeArray[0];
        }
        else {
            return timeArray[0] + timeArray[1];
        }
    }
    function displayBt() {
        $(info.id + ' .bt.buy[data-bt-type="' + identificador + '"]').addClass('show');
        $(info.id + ' .bt.buy:not([data-bt-type="' + identificador + '"])').removeClass('show');

        $(info.id + ' .cta-container [data-cta-type="' + identificador + '"]').removeClass('hide');
        $(info.id + ' .cta-container [data-cta-type="' + info.btEnd + '"]').addClass('hide');


    }
    function hideBt() {
        $(info.id + ' .bt.buy[data-bt-type="' + identificador + '"]').removeClass('show');
        $(info.id + ' .bt.buy[data-bt-type="' + info.btEnd + '"]').addClass('show');

        $(info.id + ' .cta-container [data-cta-type="' + identificador + '"]').addClass('hide');
        $(info.id + ' .cta-container [data-cta-type="' + info.btEnd + '"]').removeClass('hide');

    }

    if ($('.carimbo-countdown').data('curso-countdown')) {
        const container = $(info.id + ' [data-cd-' + identificador + ']');
        if (container) {
            i = 0;

            x = setInterval(function () {
                now = new Date();
                //checa se o tempo acabou e limpa tudo
                if (now.getTime() >= info.end.getTime()) {
                    hideBt(), container.remove();
                }
                //verifica se o tempo apliado já acabou
                else if (now.getTime() >= info.cicloAmpliado[info.cicloAmpliado.length - 1]) {
                    container.html(info.endTex), hideBt();
                    clearInterval(x);
                }
                //verifica se o timer já foi liberado
                else if (now.getTime() < info.start.getTime()) {
                    hideBt();
                    container.html(info.preStartText);
                }
                //inscrição liberada
                else {
                    displayBt();
                    container.html(
                        '<div class="counter"><div class="day">0d</div><div class="hour">0h</div><div class="minute">0m</div><div class="second">0s</div></div>' +
                        '<div class="addTimer"><div class="day">0</div><div class="hour">0</div><div class="minute">0</div><div class="second">0</div></div >'
                    );
                    normalDistance = info.cicloInicial.getTime() - now.getTime();
                    aditionalDistance = 0;
                    for (i; i < info.cicloAmpliado.length; i++) {
                        aditionalDistance = info.cicloAmpliado[i].getTime() - now.getTime();
                        if (aditionalDistance >= 0) { break; }
                    }



                    if (normalDistance >= 0) {
                        container.find('.counter .day').html(
                            '<span class=time>' +
                            output(
                                Math.floor(
                                    normalDistance / (1000 * 60 * 60 * 24)
                                )
                            ) +
                            'd</span>'
                        );
                        container.find('.counter .hour').html(
                            '<span class=time>' +
                            output(
                                Math.floor(
                                    normalDistance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)
                                )
                            ) +
                            'h</span>'
                        );
                        container.find('.counter .minute').html(
                            '<span class=time>' +
                            output(
                                Math.floor(
                                    (normalDistance % (1000 * 60 * 60)) / (1000 * 60)
                                )
                            ) +
                            'm</span>'
                        );
                        container.find('.counter .second').html(
                            '<span class=time>' +
                            output(
                                Math.floor((normalDistance % (1000 * 60)) / 1000)
                            ) +
                            's</span>'
                        );
                    } else if (aditionalDistance >= 0) {
                        container.find('.addTimer').addClass('show');
                        container.find('.counter').addClass('ended');

                        container.prepend('<span class="main-title">' + info.preEndTex.principal + '</span>');
                        container.find('.addTimer .day').html(
                            '<span class=time>' +
                            output(
                                Math.floor(
                                    aditionalDistance / (1000 * 60 * 60 * 24)
                                )
                            ) +
                            'd</span>'
                        );
                        container.find('.addTimer .hour').html(
                            '<span class=time>' +
                            output(
                                Math.floor(
                                    aditionalDistance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)
                                )
                            ) +
                            'h</span>'
                        );
                        container.find('.addTimer .minute').html(
                            '<span class=time>' +
                            output(
                                Math.floor(
                                    (aditionalDistance % (1000 * 60 * 60)) / (1000 * 60)
                                )
                            ) +
                            'm</span>'
                        );
                        container.find('.addTimer .second').html(
                            '<span class=time>' +
                            output(
                                Math.floor((aditionalDistance % (1000 * 60)) / 1000)
                            ) +
                            's</span>'
                        );
                        container.append('<span class="sub-title">' + info.preEndTex.sub + '</span>');
                    }

                }
                shownormalcta();
            }, 1000);
        }
        else {
            container.html("");
        }
    }
    shownormalcta();
}