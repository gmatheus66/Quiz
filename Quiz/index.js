// npm install pug
// npm install express
// npm install --save pug
//npm install express-session
//

const pug = require('pug');
const url = require('url');
const express = require('express');
const session = require('express-session');

const compiledInicio = pug.compileFile('inicio.pug');
const compiledInstr = pug.compileFile('instrucoes.pug');
//const compiledJogar = pug.compileFile('jogar.pug');
const compiledSobre = pug.compileFile('sobre.pug');
const compiledTemplate = [pug.compileFile('question/question1.pug'),pug.compileFile('question/question2.pug'),pug.compileFile('question/question3.pug'), pug.compileFile('question/question4.pug'), pug.compileFile('question/question5.pug'), pug.compileFile('question/question6.pug'), pug.compileFile('question/question7.pug'), pug.compileFile('question/question8.pug'), pug.compileFile('question/question9.pug'), pug.compileFile('question/question10.pug'), pug.compileFile('resultado.pug')];
const compiledTeste = pug.compileFile('teste.pug');

const app = express();
app.use(session({ secret: 'XXassasas¨¨$', resave: false, saveUninitialized: true }));

const host = '127.0.0.1';
const porta = 3000;
var parts;
var query;
var questao;
var opcao;
var escolha = [];
var pergunta ;
var t = 0;
//				 2	 3  	1	4	 2	  4		4	1	 2	  3
//var gabarito = ["b", "c", "a", "d", "b", "d", "d", "a", "b", "c"];
var gabarito = [2,3,1,4,2,4,4,1,2,3];

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', (req, res) =>{
	req.session.pergunta=0;
    res.send(compiledInicio({}));
});

app.get('/sobre', (req,res) =>{
    res.send(compiledSobre({}));
});

app.get('/jogar', (req,res) =>{
    res.send(compiledJogar({}));

});

app.get('/instrucoes', (req,res) =>{
    res.send(compiledInstr({}));
});

app.get('/resultado', (req,res) =>{
	mostrar_Resultado();
	res.send(compiledResultado({}));
});

app.get('/q', (req,res) =>{
	parts = url.parse(req.url, true);
    query = parts.query;
    opcao = query.op;
    pergunta = req.session.pergunta;
    //console.log(`valor da variavel pergunta: ${pergunta}`);
	if (query.op) {
		// salva num array na seessão com as respostas
		// incrementa session.pergunta
		escolha[pergunta] = opcao;		
		pergunta = ++req.session.pergunta;
		console.log(`${escolha[pergunta]}, opcao: ${opcao} session: ${req.session.pergunta}`);
		if (req.session.pergunta == 10) {

			console.log(`${escolha}, session: ${req.session.pergunta}`);
			mostrar_Resultado();

			
			//res.write(`<h2>resultado: ${t}/10</h2>`);
			res.status(200).send(compiledTemplate[pergunta]({ resul: `${t}`,}));
			// compara as respostas
			// redireciona para resultado OU exibe apenas o resultado
		} 
		else {
			res.status(200).send(compiledTemplate[pergunta]({}));
		}
	}
	else{

		//console.log(`pergunta ${pergunta}, opcao: ${opcao}`);
		res.status(200).send(compiledTemplate[pergunta]({}));
	}

});

app.get('/q2', (req,res) => {
	res.render("teste.pug",{
				resul: `${t}`,
			});
});


app.listen(porta, host,() =>{
    console.log(`http://${host}:${porta}`);
});




function mostrar_Resultado() {
	for (var i = 0; i <= 9; i++) {
		
		if(escolha[i] == gabarito[i]){
			t = t + 1;
			console.log(`contador: ${t}, escolha: ${escolha[i]}, indice: ${i}`);
		}
		else{
			//console.log(t);
		}
	}
	
}