/* function instagramGetJson(type, parameter) {
    if (type == post) {
        a = JSON.parse('https://api.instagram.com/oembed/?url=https://www.instagram.com/p/' + parameter);
        console.log(a)
        return a;
    }


    var valorRetornado = '[{"id":"769","cidade":"minhacidade","estado":"PR"},{"id":"855","cidade":"Caram","estado":"PR"}]'
    // convertendo a string em objeto
    var obj = JSON.parse(valorRetornado);

    obj.forEach(function (o, index) {
        console.log(o.cidade);
    });
} */