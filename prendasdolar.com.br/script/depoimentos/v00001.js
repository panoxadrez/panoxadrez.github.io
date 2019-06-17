function random(number) {
    return Math.floor(Math.random(number) * depoimentosLength);
}
function insertDepoimento(classe, position) {
    document.querySelector(".depoimentos " + classe + " .foto").innerHTML = "<img src='" + depoimentosList[position][2] + "'>";
    document.querySelector(".depoimentos " + classe + " .nome").innerHTML = "<h5>" + depoimentosList[position][0] + "</h5> <span>" + depoimentosList[position][1] + "</span>";
    document.querySelector(".depoimentos " + classe + " .texto").innerHTML = "<p>" + depoimentosList[position][3] + "</p>";
}
function excluiDepoimento(depoimento) {
    delete depoimentosList[depoimento];
}
var depoimentosList = [
    ['DEPOIMENTO1', 'curso de criacao', 'http://www.iconninja.com/files/904/113/246/puppy-small-pet-dog-shape-icon.png', 'lalala'],
    ['DEPOIMENTO2', 'curso de criacao', 'http://www.iconninja.com/files/904/113/246/puppy-small-pet-dog-shape-icon.png', 'lalala'],
    ['DEPOIMENTO3', 'curso de criacao', 'http://www.iconninja.com/files/904/113/246/puppy-small-pet-dog-shape-icon.png', 'lalala'],
    ['DEPOIMENTO4', 'curso de criacao', 'http://www.iconninja.com/files/904/113/246/puppy-small-pet-dog-shape-icon.png', 'lalala'],
    ['DEPOIMENTO5', 'curso de criacao', 'http://www.iconninja.com/files/904/113/246/puppy-small-pet-dog-shape-icon.png', 'lalala']
];

var depoimento1 = ".depoimento1";
var depoimento2 = ".depoimento2";
var depoimento3 = ".depoimento3";
var depoimento4 = ".depoimento4";


var depoimentosLength = depoimentosList.length;
var randomNumber = random(depoimentosLength);


console.log("depoimentosLength = " + depoimentosLength + " / randomNumber = " + randomNumber)
var insert1 = insertDepoimento(depoimento1, randomNumber);
delete depoimentosList[randomNumber];
randomNumber = random(depoimentosLength);
console.log("depoimentosLength = " + depoimentosLength + " / randomNumber = " + randomNumber)


depoimentosLength = depoimentosList.length;randomNumber = random(depoimentosLength);
var insert2 = insertDepoimento(depoimento2, randomNumber);

depoimentosLength = depoimentosList.length;randomNumber = random(depoimentosLength);
var insert3 = insertDepoimento(depoimento3, randomNumber);

depoimentosLength = depoimentosList.length;randomNumber = random(depoimentosLength);
var insert4 = insertDepoimento(depoimento4, randomNumber);
