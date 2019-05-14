var url = window.location.href;
console.log("URL Atual:");
console.log(url);

var urlBlacklist = [
    'prendasdolar.com.br',
    'prendasdolar.com.br/a/=',
    'prendasdolar.com.br/meus-cursos',
    'prendasdolar.com.br/timeline/=',
    'prendasdolar.com.br/meus-pedidos',
    'prendasdolar.com.br/meus-certificados',
    'prendasdolar.com.br/meus-dados',
    'prendasdolar.com.br/forum'
]

var idToRemove = ['OLDCODE', 'OLDCODE-2'];

for (i = 0; urlBlacklist.length > i; i++) {
    if (url.match(urlBlacklist[i])) {

        console.log("Url encontrada: ");
        console.log(urlBlacklist[i]);

        for (a = 0; idToRemove.length > a; a++) {
            var stylesheet = document.getElementById(idToRemove[a]);

            console.log("verificando elemento a ser deletado: ");
            console.log(stylesheet);

            if (stylesheet != null) {
                console.log("stylesheet != null");

                console.log("Verificando ID proibida");
                console.log(idToRemove[a]);

                stylesheet.parentNode.removeChild(stylesheet);

            }
            //else {console.log("stylesheet = null");}
        }
        i = urlBlacklist.length + 1;
    } else {
    }
}
