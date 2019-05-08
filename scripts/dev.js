
var url = window.location.href;
//console.log("URL Atual:"); console.log(url);

var urlList = [
    'Compartilhada/web/test/',
    'prendasdolar.com.br/forum'
]

var idToRemove = [
    'OLDCODE'
];


var devTools = document.getElementById("devdiv");

var createdDiv = document.createElement('div');

createdDiv.innerHTML =
        '<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>\
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>\
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>\
        <script src="https://cdn.hotscool.com/js/frontend.js?r=51621" type="text/javascript"></script>\
        <link href="/css_new/dev.css" rel="stylesheet" type="text/css"/>\
        '
        ;
var bgTools = document.createElement('div');
bgTools.className = 'bgtools';

bgTools.innerHTML = '\
\<span onclick="bgChanger("unset")">unset BG</span>\
<span onclick="bgChanger(black)>black BG</span>\
<span nclick="bgChanger("black")">white BG</span>\
<span nclick="bgChanger("black")">lightslategray BG</span>';





for (i = 0; urlList.length > i; i++) {
    if (url.match(urlList[i])) {

        console.log("Url encontrada: ");
        console.log(urlList[i]);

        for (a = 0; idToRemove.length > a; a++) {
            var stylesheet = document.getElementById(idToRemove[a]);

            // console.log("verificando elemento a ser deletado: "); console.log(stylesheet);

            if (stylesheet != null) {
                //console.log("stylesheet != null");

                //console.log("Verificando ID proibida"); console.log(idToRemove[a]);

                stylesheet.parentNode.removeChild(stylesheet);

            }
            //else {console.log("stylesheet = null");}
        }
        i = urlList.length + 1;



        createdDiv.className = 'devdiv-inner';

        document.getElementById('devdiv').appendChild(createdDiv);
        document.getElementById('devdiv').appendChild(bgTools);
    }




}