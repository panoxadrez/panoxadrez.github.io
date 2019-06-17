function random(number) {
    return Math.floor(Math.random(number) * depoimentosLength);
}
function insertDepoimento(classe, position) {
    console.log("dep length" + depoimentosList.length);
    document.querySelector(".depoimentos " + classe + " .foto").innerHTML = "<img src='" + depoimentosList[position][2] + "'>";
    document.querySelector(".depoimentos " + classe + " .nome").innerHTML = "<h5>" + depoimentosList[position][0] + "</h5> <span>" + depoimentosList[position][1] + "</span>";
    document.querySelector(".depoimentos " + classe + " .texto").innerHTML = "<p>" + depoimentosList[position][3] + "</p>";
}
function excluiDepoimento(depoimento) {
    console.log("1 "+depoimentosList.length);
    delete depoimentosList[depoimento];
}

var depoimentosList = [
    ['gabriel1', 'curso de criacao', 'http://www.iconninja.com/files/904/113/246/puppy-small-pet-dog-shape-icon.png', 'lalala'],
    ['gabriel2', 'curso de criacao', 'http://www.iconninja.com/files/904/113/246/puppy-small-pet-dog-shape-icon.png', 'lalala'],
    ['gabriel3', 'curso de criacao', 'http://www.iconninja.com/files/904/113/246/puppy-small-pet-dog-shape-icon.png', 'lalala'],
    ['gabriel4', 'curso de criacao', 'http://www.iconninja.com/files/904/113/246/puppy-small-pet-dog-shape-icon.png', 'lalala'],
    ['gabriel5', 'curso de criacao', 'http://www.iconninja.com/files/904/113/246/puppy-small-pet-dog-shape-icon.png', 'lalala']

];

var depoimento1 = ".depoimento1";
var depoimento2 = ".depoimento2";
var depoimento3 = ".depoimento3";
var depoimento4 = ".depoimento4";


var depoimentosLength = depoimentosList.length;
var randomNumber = random(depoimentosLength);




var insert1 = insertDepoimento(depoimento1, randomNumber);
excluiDepoimento(randomNumber);
console.log("2 "+depoimentosList.length);



//var insert2 = insertDepoimento(depoimento2, );console.log("2");
//var insert3 = insertDepoimento(depoimento3, random(depoimentosLength));console.log("3");
//var insert4 = insertDepoimento(depoimento4, random(depoimentosLength));console.log("4");




//random(depoimentosLength);

//while (depoimento2Selector == depoimento1Selector && depoimento2Selector = null) {
//    var depoimento2 = random(depoimentosLength);
//    console.log("depoimento2: " + depoimento2Selector);
//}


//console.log("depoimento1: " + depoimento1Selector);


