// funções agr doideera. basicmanete a msm coisa q python
//function nome(parametro) {}

function potencia(numero) {
  const conta = numero * numero;
  return conta;
}

const resultado = potencia(23)
console.log(resultado);

//ou

function frase(valor) {
  console.log(valor);
}

frase('eai pessoal');

//da pra fazer contas com o valor retornado de uma função tmb

function algo() {
  const numero = 1.14;
  return numero;
}

const valores = (25 * 7) / algo();

console.log(valores);

//pra criar uma variaveis de fora da função ja sao globais

let fun = 23

function teste() {
  console.log(fun);
}

teste();

//ai tem os parametros ja sabemos, e os argumentos sao qnd vc chama ela

function div(primeiro, segundo) {
  const contas = primeiro / segundo;
  return contas;
}

const res = div(225, 5); //argumento e resposta armazenada bro

console.log(res);

//argumentos podem ser funções

addEventListener('click', function() {
  console.log('clicou chefe!');
});

//funcao anonima, onde elas n tem nome, sao quase reativo msm

//type of é interessante pra filtrar valores

function terceiraidade(idade) {
  if (typeof idade !== 'number') {
    return 'informe sua idade meu chefe!';
  }
  else if (idade >= 60) {
    console.log('ja esta na terceira idade');
    return true;
  }
  else {
    console.log('n esta na terceira idade');
    return false;
  }
}

const resu = terceiraidade('opaaaaaaa')

console.log(resu)

function faltavisitar(visitados) {
  const totalpaises = 193
  return `faltam visitar ${totalpaises - visitados} paises`
}

const guardaP = faltavisitar(43)

console.log(guardaP)

//como pegar variaveis feitas em funções

//simplesmente crie fora das funções :)

