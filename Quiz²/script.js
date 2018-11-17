var opcao_1 = document.getElementById("opcao1");//
var opcao_2 = document.getElementById("opcao2");
var opcao_3 = document.getElementById("opcao3");
var opcao_4 = document.getElementById("opcao4");

var opcao02_1 = document.getElementById("opcao2_1");
var opcao02_2 = document.getElementById("opcao2_2");
var opcao02_3 = document.getElementById("opcao2_3");
var opcao02_4 = document.getElementById("opcao2_4");

var opcao03_1 = document.getElementById("opcao3_1");
var opcao03_2 = document.getElementById("opcao3_2");
var opcao03_3 = document.getElementById("opcao3_3");
var opcao03_4 = document.getElementById("opcao3_4");

var opcao04_1 = document.getElementById("opcao4_1");
var opcao04_2 = document.getElementById("opcao4_2");
var opcao04_3 = document.getElementById("opcao4_3");
var opcao04_4 = document.getElementById("opcao4_4");

var opcao05_1 = document.getElementById("opcao5_1");
var opcao05_2 = document.getElementById("opcao5_2");
var opcao05_3 = document.getElementById("opcao5_3");
var opcao05_4 = document.getElementById("opcao5_4");

var opcao06_1 = document.getElementById("opcao6_1");
var opcao06_2 = document.getElementById("opcao6_2");
var opcao06_3 = document.getElementById("opcao6_3");
var opcao06_4 = document.getElementById("opcao6_4");

var opcao07_1 = document.getElementById("opcao7_1");
var opcao07_2 = document.getElementById("opcao7_2");
var opcao07_3 = document.getElementById("opcao7_3");
var opcao07_4 = document.getElementById("opcao7_4");

var opcao08_1 = document.getElementById("opcao8_1");
var opcao08_2 = document.getElementById("opcao8_2");
var opcao08_3 = document.getElementById("opcao8_3");
var opcao08_4 = document.getElementById("opcao8_4");

var opcao09_1 = document.getElementById("opcao9_1");
var opcao09_2 = document.getElementById("opcao9_2");
var opcao09_3 = document.getElementById("opcao9_3");
var opcao09_4 = document.getElementById("opcao9_4");

var opcao10_1 = document.getElementById("opcao9_1");
var opcao10_2 = document.getElementById("opcao9_2");
var opcao10_3 = document.getElementById("opcao9_3");
var opcao10_4 = document.getElementById("opcao9_4");

var resu = document.getElementById("result")
var btn_prox = document.getElementById("buttonDiv");
var pontos = [];
var p = pontos.length;
var i = 0;
var t = 0;
var text;
var gabarito = ["a", "c", "a", "a", "b", "d", "d", "a", "a", "c"];

var letra;

opcao_1.addEventListener('click', function () {
    pontos[0] = "a";
    console.log(pontos);

})
opcao_2.addEventListener('click', function () {
    pontos[0] = "b";
    console.log(pontos);
})
opcao_3.addEventListener('click', function () {
    pontos[0] = "c";
    console.log(pontos);

})
opcao_4.addEventListener('click', function () {
    pontos[0] = "d";
    console.log(pontos);;

})

opcao02_1.addEventListener('click', function () {
    pontos[1] = "a";
    console.log(pontos);

})
opcao02_2.addEventListener('click', function () {
    pontos[1] = "b";
    console.log(pontos);
})
opcao02_3.addEventListener('click', function () {
    pontos[1] = "c";
    console.log(pontos);

})
opcao02_4.addEventListener('click', function () {
    pontos[1] = "d";
    console.log(pontos);;

})

opcao03_1.addEventListener('click', function () {
    pontos[2] = "a";
    console.log(pontos);

})
opcao03_2.addEventListener('click', function () {
    pontos[2] = "b";
    console.log(pontos);
})
opcao03_3.addEventListener('click', function () {
    pontos[2] = "c";
    console.log(pontos);

})
opcao03_4.addEventListener('click', function () {
    pontos[2] = "d";
    console.log(pontos);

})

opcao04_1.addEventListener('click', function () {
    pontos[3] = "a";
    console.log(pontos);

})
opcao04_2.addEventListener('click', function () {
    pontos[3] = "b";
    console.log(pontos);
})
opcao04_3.addEventListener('click', function () {
    pontos[3] = "c";
    console.log(pontos);

})
opcao04_4.addEventListener('click', function () {
    pontos[3] = "d";
    console.log(pontos);

})

opcao05_1.addEventListener('click', function () {
    pontos[4] = "a";
    console.log(pontos);

})
opcao05_2.addEventListener('click', function () {
    pontos[4] = "b";
    console.log(pontos);
})
opcao05_3.addEventListener('click', function () {
    pontos[4] = "c";
    console.log(pontos);

})
opcao05_4.addEventListener('click', function () {
    pontos[4] = "d";
    console.log(pontos);

})

opcao06_1.addEventListener('click', function () {
    pontos[5] = "a";
    console.log(pontos);

})
opcao06_2.addEventListener('click', function () {
    pontos[5] = "b";
    console.log(pontos);
})
opcao06_3.addEventListener('click', function () {
    pontos[5] = "c";
    console.log(pontos);

})
opcao06_4.addEventListener('click', function () {
    pontos[5] = "d";
    console.log(pontos);

})

opcao07_1.addEventListener('click', function () {
    pontos[6] = "a";
    console.log(pontos);

})
opcao07_2.addEventListener('click', function () {
    pontos[6] = "b";
    console.log(pontos);
})
opcao07_3.addEventListener('click', function () {
    pontos[6] = "c";
    console.log(pontos);

})
opcao07_4.addEventListener('click', function () {
    pontos[6] = "d";
    console.log(pontos);

})

opcao08_1.addEventListener('click', function () {
    pontos[7] = "a";
    console.log(pontos);

})
opcao08_2.addEventListener('click', function () {
    pontos[7] = "b";
    console.log(pontos);
})
opcao08_3.addEventListener('click', function () {
    pontos[7] = "c";
    console.log(pontos);

})
opcao08_4.addEventListener('click', function () {
    pontos[7] = "d";
    console.log(pontos);

})

opcao09_1.addEventListener('click', function () {
    pontos[8] = "a";
    console.log(pontos);

})
opcao09_2.addEventListener('click', function () {
    pontos[8] = "b";
    console.log(pontos);
})
opcao09_3.addEventListener('click', function () {
    pontos[8] = "c";
    console.log(pontos);

})
opcao09_4.addEventListener('click', function () {
    pontos[8] = "d";
    console.log(pontos);

})

opcao10_1.addEventListener('click', function () {
    pontos[9] = "a";
    console.log(pontos);

})
opcao10_2.addEventListener('click', function () {
    pontos[9] = "b";
    console.log(pontos);
})
opcao10_3.addEventListener('click', function () {
    pontos[9] = "c";
    console.log(pontos);

})
opcao10_4.addEventListener('click', function () {
    pontos[9] = "d";
    console.log(pontos);

})


function Botao() {

    while (i < 10) {
        if (pontos[i] == gabarito[i]) {
            t++;
            console.log(i, pontos[i], " ", gabarito[i]);
        }

        i++;
    }
    //t += -1;
    console.log(i, " ", t);
    nota(t);
    function nota(t) {
        if (t >= 7) {
            text = " /10 </br> Parabens !!!";
            console.log(t, text);
        }
        else if (t < 7) {
            text = " /10 </br> Tenta novamente </br> voce consegue acertar mais opções";
            console.log(t, text);
        }

    }
    var show_text = t + text;
    resu.innerHTML = show_text;
}



/*document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}*/

