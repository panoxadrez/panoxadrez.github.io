function showModalVagaReservada() {

   if (window.location.href.indexOf("?vaga-reservada") > -1) {
      $('.modal-email-cadastrado').addClass("show");
      $('body').addClass('no-scroll');
   }
}

function hideModalVagaReservada() {

   $('.modal-email-cadastrado').removeClass('show');
   $('body').removeClass('no-scroll');
} showModalVagaReservada();

/*
const hideModal = function () {
   document.querySelector("#modal-email-cadastrado").classList.remove("show");
}


const stopPropagation = function () {
   event.stopPropagation()
}

document.querySelector("#modal-email-cadastrado").onclick = hideModal;
document.querySelector("#modal-email-cadastrado span.fechar").onclick = hideModal;
document.querySelector("#modal-email-cadastrado .modal-dialog").onclick = stopPropagation;
 */