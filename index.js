
var botao1 = document.getElementById("btn1");//pega o valor do id
var botao2 = document.getElementById("btn2");
var botao3 = document.getElementById("btn3");
var label1 = document.getElementById("label1");
var label2 = document.getElementById("label2");
var label3 = document.getElementById("label3");
var gabarito = [];
var opcoes = [];
var letra;

// adiciona um evento digo que ele finciona com o click e digo a funcao do click 
botao1.addEventListener('click', function () {
    letra = "a";
    opcoes.push(letra);
    console.log(letra);
})

botao2.addEventListener('click', function () {
    letra = "b";
    opcoes.push(letra);
    console.log(letra);
})

botao3.addEventListener('click', function () {
    letra = "c";
    opcoes.push(letra);
    console.log(letra);
})



function Opcao() {
    var input = document.getElementById('a');
    //var div =  document.getElementById("demo");
    //div.innerHTML = input.value;
    var letra = input.value;
    switch (letra) {
        case 'a':
            return opcoes[0] = 'a';
        case 'b':
            return opcoes[1] = 'b';
        case 'c':
            return opcoes[2] = 'c';
        default:
            return "opcao errada";
    }


    // opcoes["a"] = letra ;
}

//var result = Opcao('a');

console.log(opcoes);
//console.log(letra);