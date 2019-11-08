function showModalVagaReservada() {

    if (window.location.href.indexOf("?vaga-reservada") > -1) {
        $('.modal-email-cadastrado').addClass("show");
    }
}

function hideModalVagaReservada() {

    $('.modal-email-cadastrado').removeClass('show');

} showModalVagaReservada();


curso00002 = {
    id: "#curso00002",
    preStartText: "vai começar",
    preEndTex: {
        principal: "<span>INSCRIÇÕES PRORROGADAS!</span>",
        sub: "<span>ÚLTIMA CHANCE!</span>"
    },
    endTex: "acabou",
    start: new Date(2019, 10, 6),
    cicloInicial: new Date(2019, 10, 7),
    cicloAmpliado: [

    ],
    end: new Date(2019, 10, 8),
    btEnd: "lead"
}

/* agora = new Date();
ano = agora.getFullYear();
mes = agora.getMonth();
dia = agora.getDate();
hora = agora.getHours();
minuto = agora.getMinutes();
segundo = agora.getSeconds(); */

curso00001 = {
    id: "#curso00001",
    preStartText: "",
    preEndTex: {
        principal: "<span>Últimas vagas!</span>",
        sub: "<span>Corra e garanta a sua.</span>"
    },
    endTex: "<span>Inscrições encerradas.<br>Inscreva-se aqui para a próxima turma.</span>",
    start:           new Date(2019, 10, 06, 21, 00),
    cicloInicial:    new Date(2019, 10, 13, 23, 59),
    cicloAmpliado: [
                     new Date(2019, 10, 15, 23, 59)
    ],
    end:             new Date(2019, 10, 25, 23, 59),
    btEnd: "lead"
}

cursoCountdown(curso00001, "venda");
