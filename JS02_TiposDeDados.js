var nome = "Luan";                      //String
var idade = 24;                         //Number
var possuiFaculdade = true;             //Boolean
var time;                               //undefined
var comida = null;                      //Null
var simbolo =  Symbol();                //Symbol
var novoObjeto = {}                     //Object
var lista = ["A", "B"];                 //Object
var matematica = Math;                  //Object [Math] {}
var absoluto = matematica.abs;          //[Function: abs]
var assincrono = async function(){};    //[AsyncFunction: assincrono]

console.log(typeof(nome));              //String
console.log(typeof(idade));             //Number
console.log(typeof(possuiFaculdade));   //Boolean
console.log(typeof(time));              //undefined
console.log(typeof(comida));            //Null
console.log(typeof(simbolo));           //Symbol
console.log(typeof(novoObjeto));        //Object
console.log(typeof(lista));             //Object
console.log(matematica);                //Object [Math] {}
console.log(absoluto);                  //[Function: abs]  exemplo: absoluto(10 * -23) | 230
console.log(assincrono);                //[AsyncFunction: assincrono]


var sobrenome = "Souza";
console.log(nome +" "+sobrenome);

var pontuacao = 25;
var frase = "A pontuação é "+pontuacao;
console.log(frase);

//ASPAS SIMPLES E DUPLA
console.log('JavaScript é "super" fácil');
console.log("JavaScript é 'super' fácil");
console.log("JavaScript é \"super\" fácil");
console.log(`JavaScript é "super" fácil`);
//console.log("JavaScript é "super" fácil") ERRO

//TEMPLATE STRINGS
var frase1 = 'Sua pontuação é '+pontuacao+"! Parabéns";
var frase2 = `Sua pontuação é ${pontuacao}! Parabéns`;
console.log(frase1);
console.log(frase2);


//EXERCÍCIOS
// Declare uma variável contendo uma string
var ex1 = "Exemplo um" 
// Declare uma variável contendo um número dentro de uma string
var ex2 = "Exemplo dois: "+24;
// Declare uma variável com a sua idade
var ex3 = `Minha idade é ${idade} anos`;
// Declare duas variáveis, uma com seu nome
// e outra com seu sobrenome e some as mesmas
var ex4 = nome + " "+sobrenome
// Coloque a seguinte frase em uma variável: It's time
var ex5 = "It's time";
// Verifique o tipo da variável que contém o seu nome
var tipo = typeof(nome);

console.log(ex1);
console.log(ex2);
console.log(ex3);
console.log(ex4);
console.log(ex5);
console.log(tipo);

