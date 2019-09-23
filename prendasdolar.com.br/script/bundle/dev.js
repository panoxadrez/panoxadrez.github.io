//dev







// @koala-append "lib/countdown/v000001.js"
// @koala-append "lib/carousel/v000002.js"
// @koala-append "lib/depoimentos/v000001.js"
// @koala-append "lib/float_comprar/v000001.js"
// @koala-append "lib/leadlovers/capture_form/v000001.js"
// @koala-append "lib/callFacebookPixel/v000001.js"
// @koala-append "lib/cursoMudaStatus/v000001.js"

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
    if (addTimer.dataset.cadd == undefined) {
        addTimer = [0, 0, 0, 0, 0]
    }
    else {
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
            timeArray.forEach(function (time) {
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

var carouselHome = new Flickity(document.querySelector('.carousel-home'), {
    draggable: '>1',
    lazyLoad: true,
    autoPlay: 15000,
    wrapAround: true,
    prevNextButtons: false,
    cellSelector: '.carousel-cell',
    // initialIndex: 1
});

var carouselCurso = new Flickity(document.querySelector('section.header-curso .carousel-header'), {
    draggable: false,
    wrapAround: true,
    //prevNextButtons: false,
});

    var depoimentosList = [
    [
        'Nanda Watts', 
        'Curso de Criação', 
        'https://panoxadrez.github.io/prendasdolar.com.br/img/paginas/home/depoimentos/nanda_watts.jpg',
        'Corri para me inscrever no curso e quando as aulas começaram minhas expectativas foram superadas. Com calma, ética e muito bom humor a Tia Lili cativa do começo ao fim. E a vantagem de ter as aulas gravadas é que faço o meu horário, sem pressa nem ansiedade. Apoio, aprovo e recomendo!'
    ],
    [
        'Maria Estela',
        'Curso de Criação',
        'https://panoxadrez.github.io/prendasdolar.com.br/img/paginas/home/depoimentos/maria_estela.jpg',
        'O curso está me propiciando uma visão diferenciada do trabalho com patchwork; venho conseguindo elaborar trabalhos utilizando as técnicas ensinadas pela Tia Lili com muito mais facilidade! O trabalho com blocos tornou-se muito mais prazeroso e apaixonante!!!'
    ],
    [
        'Elisia Barros',
        'Curso de Criação',
        'https://panoxadrez.github.io/prendasdolar.com.br/img/paginas/home/depoimentos/elisia_barros.jpg',
        'A cada retiro anunciado eu ficava <img src="https://panoxadrez.github.io/img/icones/emoji/emoji_apaixonado.png">. Sonhava com a oportunidade de participar em um. Este curso foi exatamente o que desejei por tanto tempo. Estou amando! A plataforma é super fácil de acessar.'
    ],
    [
        'Marilia Goulart',
        'Curso de Criação',
        'https://panoxadrez.github.io/prendasdolar.com.br/img/paginas/home/depoimentos/marilia_goulart.jpg',
        'Tem sido uma bênção, aguardo as aulas ansiosa como uma menina. É meu recomeço depois do tratamento do câncer de mama. Tudo bem explicado, claro e fácil de navegar. Este curso é dez!'
    ],
    [
        'Nina Dias',
        'Curso de Criação',
        'https://panoxadrez.github.io/prendasdolar.com.br/img/paginas/home/depoimentos/nina_dias.jpg',
        'É uma oportunidade de ter a Tia Lili nos orientando e ensinando sobre o Patchwork. Cabe a nós a aplicação de tudo o que assistimos. É muita informação. Eu vejo várias vezes os videos e vou descobrindo sempre um detalhe a mais. Estou amando!!'
    ],
    [
        'Margarete Hoehne',
        'Curso de Criação',
        'https://panoxadrez.github.io/prendasdolar.com.br/img/paginas/home/depoimentos/margarete_hoehne.jpg',
        'Tem sido maravilhoso pra mim que moro longe e principalmente pra me encorajar a criar e acreditar que todas nós conseguimos fazer patchwork. Eliana Zerbinatti com sua experiência e delicadeza em ensinar só tem me ajudado, e a plataforma do curso é super fácil e interativa.'
    ],
    [
        'Ana Carmona',
        'Curso de Criação',
        'https://panoxadrez.github.io/prendasdolar.com.br/img/paginas/home/depoimentos/ana_maria_carmona.jpg',
        'Fiz um retiro com a Tia Lili em Teresópolis em 2105. Claro que me encantei com sua didática e delicadeza! Saí do retiro com outra visão do patchwork. Investi no Quilt in Box e esse curso on line, ah... o que dizer? A cada aula fico mais convencida de que fiz a coisa certa quando me inscrevi!'
    ],
    [
        'Denise Mariano',
        'Curso de Criação',
        'https://panoxadrez.github.io/prendasdolar.com.br/img/paginas/home/depoimentos/denise_mariano.jpg',
        'Tia Lili é uma pessoa fantástica, com uma capacidade ímpar para nos ensinar. É calma e tranquila, o que faz com que nos sintamos à vontade para expormos nossas dúvidas. Estou amando fazer parte da Turma Beta!'
    ],
    [
        'Sandra Mesquita',
        'Curso de Criação',
        'https://panoxadrez.github.io/prendasdolar.com.br/img/paginas/home/depoimentos/sandra_mesquita.jpg',
        'Este curso é um sonho, estou aprendendo muito... ter a oportunidade de aprender com a Tia Lili está sendo fantástico! <img src="https://panoxadrez.github.io/img/icones/emoji/emoji-coracao-vermelho.png"><img src="https://panoxadrez.github.io/img/icones/emoji/emoji-coracao-vermelho.png"><img src="https://panoxadrez.github.io/img/icones/emoji/emoji-coracao-vermelho.png">'
    ],
    [
        'Alessandra Lacerda',
        'Curso de Criação',
        'https://panoxadrez.github.io/prendasdolar.com.br/img/paginas/home/depoimentos/alessandra_lacerda.jpg',
        'Comecei a assistir aos vídeos no YouTube da Tia Lili quando morava no Acre e morria de inveja dos encontros e das turmas presenciais. Quando liguei pra assinar o Quilt in Box e me informaram que ia começar uma turma online eu ADOREI!!!!!'
    ],
    [
        'Gabriela Sarubbi',
        'Curso de Criação',
        'https://panoxadrez.github.io/prendasdolar.com.br/img/paginas/home/depoimentos/gabriela_sarubbi.jpg',
        'O curso de formação de professores da tia Lili é maravilhoso. Tenho aprendido coisas incríveis. A plataform é boa e muito fácil de trabalhar e as aulas são bastante didáticas. Eu recomendo!'
    ],
    [
        'Simone Lourenço',
        'Curso de Criação',
        'https://panoxadrez.github.io/prendasdolar.com.br/img/paginas/home/depoimentos/simone_louren%C3%A7o.jpg',
        'Há mais de 10 anos fiz aula presencial com a Tia Lili, desde então sou apaixonada pela arte e por ela. Assim que soube do curso, logo me inscrevi.'
    ],
    [
        'Elaine Carrascoza',
        'Curso de Criação',
        'https://panoxadrez.github.io/prendasdolar.com.br/img/paginas/home/depoimentos/elaine_carrascoza.jpg',
        'Estou encantada! Já imaginava que seria muito bom, pois sou uma fã incondicional da Tia Lili, já que tudo que sei de patchwork aprendi com suas aulas no YouTube. Quero agradecer pela oportunidade e espero continuar a fazer outros cursos!'
    ],
    [
        'Marlise Galle',
        'Curso de Criação',
        'https://panoxadrez.github.io/prendasdolar.com.br/img/paginas/home/depoimentos/marlise_galle.jpg',
        'A didática da Tia Lili, o carinho e paciência com que ensina numa plataforma fácil de usar e se comunicar, não tem coisa melhor! O nome já diz tudo. Parabéns Eliana Zerbinatti por nos proporcionar tantos momentos de aprendizado e prazer!'
    ],
    [
        'Janira Junqueira',
        'Curso de Criação',
        'https://panoxadrez.github.io/prendasdolar.com.br/img/paginas/home/depoimentos/janira_junqueira.jpg',
        'Estou muito satisfeita com o curso. Desenvolvendo meus trabalhos mesmo lentamente. Tia Lili, é um sonho se realizando. Agradeço a todos!'
    ]    
];

var depoimentosLength = depoimentosList.length;


function random(number) {
    return Math.floor(Math.random(number) * depoimentosLength);
}

function selecionarDepoimento(length) {
    var i = 0;
    var counter = 1;
    while (i <= 0) {
        var randomNumber = random(length);
        console.log("random number"+randomNumber + " / loop " + counter);
        if (depoimentosList[randomNumber] != null) {
            i = 1
        }
        counter++;
    }
    return randomNumber;
}
function insertDepoimento(classe, position) {
    document.querySelector(".depoimentos " + classe + " .foto").innerHTML = "<img src='" + depoimentosList[position][2] + "'>";
    document.querySelector(".depoimentos " + classe + " .nome").innerHTML = "<h5>" + depoimentosList[position][0] + "</h5> <span>" + depoimentosList[position][1] + "</span>";
    document.querySelector(".depoimentos " + classe + " .depoimento").innerHTML = "<p>" + depoimentosList[position][3] + "</p>";
    delete depoimentosList[position];
}


var insert1 = insertDepoimento(".depoimento1", selecionarDepoimento());
var insert2 = insertDepoimento(".depoimento2", selecionarDepoimento());
var insert3 = insertDepoimento(".depoimento3", selecionarDepoimento());
var insert4 = insertDepoimento(".depoimento4", selecionarDepoimento());



window.onscroll = function(){
   var altura = window.pageYOffset || document.documentElement.scrollTop
   if( altura > 40 ) {
		$(".FloatComprar").css({"position": "fixed", "button": "0px", "visibility": "visible", "height": "40px !important"});}
   else{
		$(".FloatComprar").css({"position": "relative", "button": "0", "visibility": "hidden", "height": "0px !important"});}
}

(function () {

   "use strict";
 
   window.onload = function () {
      LLEvents();
   };

   var currentForm = null;

   function LLCapture(objForm) {
      if (!objForm) { console.error('Form not found!'); return; }
      if (!objForm.action) { console.error('Form without action'); return; }
      currentForm = objForm;
      var request = new XMLHttpRequest();
      request.onload = LLCaptureReturn;
      if (objForm.method.toLowerCase() === 'post') {
         LLCaptureClearErrors(objForm);
         if (LLCaptureValidations(objForm)) {
            LLToogleFields(objForm, false);
            LLToogleLoading(objForm, true);
            request.open("post", objForm.action, true);
            request.send(new FormData(objForm));
            fbq('track', 'LeadCompleteRegistration');
         }
      }
      return false;
   }
   function LLCaptureClearErrors(objForm) {
      if (!!objForm) {
         var elements = objForm.querySelectorAll('div.field-error');
         if (elements.length > 0) {
            elements.forEach(function (item, ix) {
               item.innerText = '';
               item.className = item.className.replace('show', '');
            });
         }
      }
      else
         console.error('Form not found!');
   }
   function LLCaptureReturn() {
      if (!!currentForm) {
         var objForm = currentForm;
         var errorBox = objForm.querySelector('div.error-box');
         var errorDiv = errorBox.querySelector('div');
         var div = null;
         var error = false;
         var result = JSON.parse(this.responseText);
         if (!!result.errors) {
            result.errors.forEach(function (err, ix) {
               if (err.field == null || err.field === '') {
                  error = true;
                  errorDiv.innerHTML += '<span>' + err.error + '</span><br />';
               }
               else {
                  div = objForm.querySelector(err.field);
                  if (!!div) {
                     div.innerHTML = err.error;
                     if (div.className.indexOf('show') === -1)
                        div.className += ' show';
                  }
               }
            });
            LLToogleLoading(objForm, false);
            if (error)
               LLToogleError(objForm, true);
            else
               LLToogleFields(objForm, true);
         }
         else
            window.location.href = result;
      }
      else
         console.error('Form not found!');
   }
   function LLCaptureValidations(objForm) {
      var err = null;
      var elements = null;
      var result = true;
      // get required elements
      elements = objForm.querySelectorAll('[data-required]');
      if (elements.length > 0) {
         elements.forEach(function (item, ix) {
            if (item.tagName.toLowerCase() !== 'div') {
               if (item.value.trim() === '') {
                  result = false;
                  err = item.parentElement.querySelector('div.field-error');
                  if (err) {
                     err.innerText = 'Esse campo é obrigatório';
                     err.className += ' show';
                  }
               }
            }
            else {
               var items = item.querySelectorAll('input[type=checkbox]');
               var empty = [].filter.call(items, function (el) {
                  return !el.checked;
               });
               if (items.length == empty.length) {
                  result = false;
                  err = item.parentElement.querySelector('div.field-error');
                  if (err) {
                     err.innerText = 'Selecione ao menos um item';
                     err.className += ' show';
                  }
               }
            }
         });
      }
      // return
      return result;
   }
   function LLEvents() {
      var found = false;
      var forms = document.getElementsByTagName('form');
      if (forms.length > 0) {
         for (var i = 0; i < forms.length; i++) {
            if (forms[i] != undefined && forms[i] != null && forms[i].id == 'llCaptureForm') {
               found = true;
               var objForm = forms[i];
               objForm.onsubmit = function () {
                  LLCapture(this);
                  return false;
               };
               objForm.querySelector('#btn-error').addEventListener('click', function () {
                  LLToogleError(this, false);
                  LLToogleFields(this, true);
               });
            }
         }
      }
      else
         console.error('No dynamic form found!');
   }
   function LLToogleError(objForm, state) {
      if (!!objForm) {
         var box = objForm.querySelector('div.error-box');
         if (box) {
            if (state)
               box.className += ' show';
            else
               box.className = box.className.replace('show', '');
         }
      }
      else
         console.error('Form not found!');
   }
   function LLToogleFields(objForm, state) {
      if (!!objForm) {
         var children = Array.from(objForm.children);
         children.forEach(function (item, ix) {
            if (item.tagName.toLowerCase() === 'div') {
               if (item.className.indexOf('loading-box') === -1 &&
                  item.className.indexOf('error-box') === -1) {
                  if (!state)
                     item.className += ' hidden';
                  else
                     item.className = item.className.replace('hidden', '');
               }
            }
         });
      }
      else
         console.error('Form not found!');
   }
   function LLToogleLoading(objForm, state) {
      if (!!objForm) {
         var box = objForm.querySelector('div.loading-box');
         if (box) {
            if (state)
               box.className += ' show';
            else
               box.className = box.className.replace('show', '');
         }
      }
      else
         console.error('Form not found!');
   }

}());

function callFacebookPixel(a, b, c) {
    switch (a) {
        case 1:
            a = 'track';
            break;
        case 2:
            a = 'trackCustom';
            break;
        default: console.log('Facebook pixel error, called ' + a + ", and not founded");
    }

    switch (b) {
        case 1:
            b = 'ViewContent'
            break;

        case 2:
            b = 'SocialNetwork'
            break;

        case 3:
            b = 'LojaVirtual'
            break;

        case 4:
            b = 'Lead'
            break;

        default: console.log('Facebook pixel error, called ' + b + ", and not founded");
    }
    switch (c) {
        case 1:
            c = '-QuiltInBox'
            break;
        case 2:
            c = 'Cancel'
            break;
        default: c = '';
    }
    console.log("a = " + a);
    console.log("b = " + b);
    console.log("c = " + c);

    b = b + c;
    console.log("b = " + b);

    fbq(a, b);
}

//cursoMudaStatusLead("#curso00002")
function cursoMudaStatusLead(id) {
    //cursoHeader = document.querySelector('section.pagina-venda-header' + id);

    newStyle = document.createElement('style');
    newStyle.setAttribute("class", "newstyleafterend");
    document.body.appendChild(newStyle);
    newStyle = document.querySelector('style.newstyleafterend');

    newStyleContend = id + ' .controle-status-venda {display: none !important}';
    newStyleContend += id + ' .titulo-container .controle-status-lead {display: block !important}';
    newStyleContend += id + '.pagina-venda-header .cta-container .controle-status-lead {display: flex !important}';

    newStyle.innerHTML = newStyleContend;

}

/*


*/