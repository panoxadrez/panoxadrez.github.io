var url = window.location.href;
//console.log("URL Atual:"); console.log(url);

var urlBlacklist = [
    'https://prendasdolar.com.br/p/home_oficial',
    'https://prendasdolar.com.br/c/curso-online-patchwork-basico-ao-avancado',
    'https://prendasdolar.com.br/c/curso-criacao-nine-patch'
]

var urlDevList = [
    'https://prendasdolar.com.br/p/home_oficial',
    'https://prendasdolar.com.br/p/nova_venda'
]

var devId= ['dev1']


var idToRemove = [
    'OLDCODE1',
    'OLDCODE2',
    'OLDCODE3',
    'OLDCODE4',
    'OLDCODE5'
];

var debug = true;

for (i = 0; urlBlacklist.length > i; i++) {
    if (url.match(urlBlacklist[i])) {

        if (debug){console.log("Url encontrada: "); console.log(urlBlacklist[i]);}

        for (a = 0; idToRemove.length > a; a++) {
            var stylesheet = document.getElementById(idToRemove[a]);

             if (debug){console.log("verificando elemento a ser deletado: "); console.log(stylesheet);}

            if (stylesheet != null) {
                if (debug){console.log("stylesheet != null");console.log("Verificando ID proibida"); console.log(idToRemove[a]);}

                stylesheet.parentNode.removeChild(stylesheet);

            }
            if (debug){console.log("stylesheet = null");}
        }
        i = urlBlacklist.length + 1;
    } else {}
}