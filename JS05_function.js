//CALCULANDO ÁREA DO QUADRADO
function areaQuadrado (lado){
  return "função areaQuadrado ativa\n"+"area: "+lado*lado;

}
console.log(areaQuadrado(2));//imprime 4
console.log(areaQuadrado(4));//imprime 16
console.log(areaQuadrado(8));//imprime 64

//CALCULANDO IMC
function imc(peso, altura){
  let imc = peso/ (altura**2);
  return "funcão imc ativa\n"+"imc: "+imc.toFixed(2);
}
console.log(imc(80,1.8));

//VERIFICANDO A COR FAVORITA
function corFavorita(cor){
  (cor)? cor=cor.toLowerCase():cor; // verifica se cor é true e caso seja utiliza a função toLowerCase()
  switch(cor){
    case "azul": return "função corFavorita ativa\n"+"cor: Azul Gosta do céu!";
    case "verde": return "função corFavorita ativa\n"+
    "cor: Verde Gosta de floresta!";
    default: return "função corFavorita ativa\n"+"cor: não foi passada como argumento";
  }
}
console.log(corFavorita("azul"));
console.log(corFavorita("verde"))
console.log(corFavorita());

//FUNÇÕES COM FUNÇÕES COMO ARGUMENTOS

//PRIMEIRO JEITO DE SE FAZER
function mostrarConsole(){
  console.log("função mostrarConsole ativa");
}
// addEventListener("click",mostrarConsole);

//SEGUNDO JEITO DE SE FAZER
//PASSANDO UMA FUNÇÃO ANÔNIMA COMO ARGUMENTO
// addEventListener("click",function(){console.log("função addEventListener ativa")});


//fuctionFactorial

//exemplo de função recursiva
function factorialFunction(n){
  if(n == 1 || n == 0){
    return 1;
  }
  else{
    return (n *factorialFunction(n-1));
  }
}
// Retorna fatorial
console.log(factorialFunction(6));


let a, b, c, d, e;
a = factorialFunction(0); //a recebe o valor 1
b = factorialFunction(1); //b recebe o valor 1
c = factorialFunction(2); //c recebe o valor 2
d = factorialFunction(3); //d recebe o valor 6
e = factorialFunction(4); //e recebe o valor 24

