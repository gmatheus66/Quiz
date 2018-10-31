
var botao1 = document.getElementById("btn1");
var botao2 = document.getElementById("btn2");
var botao3 = document.getElementById("btn3");
var gabarito =[];
var opcoes = [];
var letra;
var i;

botao1.addEventListener('click', function(){
   letra = "a";
   opcoes.push(letra);
   console.log(letra);
})

botao2.addEventListener('click', function(){
    letra = "b";
    opcoes.push(letra);
    console.log(letra);
 })

 botao3.addEventListener('click', function(){
    letra = "c";
    opcoes.push(letra);
    console.log(letra);
 })


function Opcao(){
    var input = document.getElementById('a');
    //var div =  document.getElementById("demo");
    //div.innerHTML = input.value;
    var letra = input.value;
    switch(letra){
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