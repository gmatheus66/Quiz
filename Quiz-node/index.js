// npm install pug
// npm install express
//

const pug = require('pug');
const url = require('url');
const express = require('express');

const compiledInicio = pug.compileFile('inicio.pug');
const compiledInstr = pug.compileFile('instrucoes.pug');
const compiledJogar = pug.compileFile('jogar.pug');
const compiledSobre = pug.compileFile('sobre.pug');
const compiledResultado = pug.compileFile('resultado.pug');
const app = express();

const host = '127.0.0.1';
const porta = 3000;
var parts;
var query;
var questao;
var opcao;
var escolha = [];
var resultado = 0;
var gabarito = ["b", "c", "a", "d", "b", "d", "d", "a", "b", "c"];

app.get('/', (req, res) =>{
    res.send(compiledInicio({}));
});

app.get('/sobre', (req,res) =>{
    res.send(compiledSobre({}));
});

app.get('/jogar', (req,res) =>{
    res.send(compiledJogar({}));
    parts = url.parse(req.url, true);
    query = parts.query;
    questao = query.q;
    opcao = query.op;
    ponto(questao, opcao);

});

app.get('/instrucoes', (req,res) =>{
    res.send(compiledInstr({}));
});

app.get('/resultado', (req,res) =>{
	mostrar_Resultado();
	res.send(compiledResultado({}));
});

app.listen(porta, host,() =>{
    console.log(`http://${host}:${porta}`);
});

function ponto(questao, opcao) {

	if(questao == 1){
		if(opcao == 1){
			escolha[0] = 'a' ;
			console.log(`escolha: ${escolha}`);
		}
		else if(opcao == 2){
			escolha[0] = 'b';
			console.log(`escolha: ${escolha}`);
		}
		else if(opcao == 3){
			escolha[0] = 'c';
			console.log(`escolha: ${escolha}`);
		}
		else if(opcao == 4){
			escolha[0] = 'd';
			console.log(`escolha: ${escolha}`);
		}
		
	}
	else if(questao == 2){
		if(opcao == 1){
			escolha[1] = 'a' ;
			console.log(`escolha: ${escolha}`);
		}
		else if(opcao == 2){
			escolha[1] = 'b';
			console.log(`escolha: ${escolha}`);
		}
		else if(opcao == 3){
			escolha[1] = 'c';
			console.log(`escolha: ${escolha}`);
		}
		else if(opcao == 4){
			escolha[1] = 'd';
			console.log(`escolha: ${escolha}`);
		}
	}
	else if(questao == 3){
		if(opcao == 1){
			escolha[2] = 'a' ;
			console.log(`escolha: ${escolha}`);
		}
		else if(opcao == 2){
			escolha[2] = 'b';
			console.log(`escolha: ${escolha}`);
		}
		else if(opcao == 3){
			escolha[2] = 'c';
			console.log(`escolha: ${escolha}`);
		}
		else if(opcao == 4){
			escolha[2] = 'd';
			console.log(`escolha: ${escolha}`);
		}
	}
	else if(questao == 4){
		if(opcao == 1){
			escolha[3] = 'a' ;
			console.log(`escolha: ${escolha}`);
		}
		else if(opcao == 2){
			escolha[3] = 'b';
			console.log(`escolha: ${escolha}`);
		}
		else if(opcao == 3){
			escolha[3] = 'c';
			console.log(`escolha: ${escolha}`);
		}
		else if(opcao == 4){
			escolha[3] = 'd';
			console.log(`escolha: ${escolha}`);
		}
	}
	else if(questao == 5){
		if(opcao == 1){
			escolha[4] = 'a' ;
			console.log(`escolha: ${escolha}`);
		}
		else if(opcao == 2){
			escolha[4] = 'b';
			console.log(`escolha: ${escolha}`);
		}
		else if(opcao == 3){
			escolha[4] = 'c';
			console.log(`escolha: ${escolha}`);
		}
		else if(opcao == 4){
			escolha[4] = 'd';
			console.log(`escolha: ${escolha}`);
		}
	}
	else if(questao == 6){
		if(opcao == 1){
			escolha[5] = 'a' ;
			console.log(`escolha: ${escolha}`);
		}
		else if(opcao == 2){
			escolha[5] = 'b';
			console.log(`escolha: ${escolha}`);
		}
		else if(opcao == 3){
			escolha[5] = 'c';
			console.log(`escolha: ${escolha}`);
		}
		else if(opcao == 4){
			escolha[5] = 'd';
			console.log(`escolha: ${escolha}`);
		}
	}
	else if(questao == 7){
		if(opcao == 6){
			escolha[6] = 'a' ;
			console.log(`escolha: ${escolha}`);
		}
		else if(opcao == 2){
			escolha[6] = 'b';
			console.log(`escolha: ${escolha}`);
		}
		else if(opcao == 3){
			escolha[6] = 'c';
			console.log(`escolha: ${escolha}`);
		}
		else if(opcao == 4){
			escolha[6] = 'd';
			console.log(`escolha: ${escolha}`);
		}
	}
	else if(questao == 8){
		if(opcao == 1){
			escolha[7] = 'a' ;
			console.log(`escolha: ${escolha}`);
		}
		else if(opcao == 2){
			escolha[7] = 'b';
			console.log(`escolha: ${escolha}`);
		}
		else if(opcao == 3){
			escolha[7] = 'c';
			console.log(`escolha: ${escolha}`);
		}
		else if(opcao == 4){
			escolha[7] = 'd';
			console.log(`escolha: ${escolha}`);
		}
	}
	else if (questao == 9){
		if(opcao == 1){
			escolha[8] = 'a' ;
			console.log(`escolha: ${escolha}`);
		}
		else if(opcao == 2){
			escolha[8] = 'b';
			console.log(`escolha: ${escolha}`);
		}
		else if(opcao == 3){
			escolha[8] = 'c';
			console.log(`escolha: ${escolha}`);
		}
		else if(opcao == 4){
			escolha[8] = 'd';
			console.log(`escolha: ${escolha}`);
		}
	}
	else if(questao == 10){
		if(opcao == 1){
			escolha[9] = 'a' ;
			console.log(`escolha: ${escolha}`);
		}
		else if(opcao == 2){
			escolha[9] = 'b';
			console.log(`escolha: ${escolha}`);
		}
		else if(opcao == 3){
			escolha[9] = 'c';
			console.log(`escolha: ${escolha}`);
		}
		else if(opcao == 4){
			escolha[9] = 'd';
			console.log(`escolha: ${escolha}`);
		}
	}
		
}


function mostrar_Resultado() {
	for (var i = 0; i <= 9; i++) {
		if(escolha[i] == gabarito[i]){
			resultado++;
			let t = i + 1;
			console.log(`resul: ${resultado}, escolha: ${escolha[i]} opção: ${t};`);
		}
		else{
			let t = i + 1;
			console.log(t);
		}
	}
}