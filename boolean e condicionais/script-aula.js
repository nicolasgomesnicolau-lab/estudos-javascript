//assunto osbre True e false, e condicionais if
//se for True vc da if variavel q ja da

//pra dar if variavel vc precisa usar parenteses

// tudo fica dentro do parenteses ate os operadores
//e os sinais sao iguais
//e precisa dos {} a cada if

//pra dar elif, aqui vc precisa fazer else if
//if testa todas as condicoes, elif n testa se a primeira for verdadeira


let nicolas = true;

if (nicolas == true) {
  console.log('aqui é True');
  nicolas = false
} 

if (nicolas == false) {
    console.log('eai chapa, aqui é FALSE');
    nicolas = 2
}

if (nicolas != 3) {
  console.log('aqui é tudo dois!');
  nicolas = true
}

if (nicolas) {
  console.log('oh meu chefe aqui é True');
}

//interessante
//se é falso literalmente n existe

//tudo isso é considerado false

console.log('todos os valores sao FALSE:');

let w4xxy = 0;

if (!w4xxy) {
  w4xxy = 0
  console.log(w4xxy);
}
if (!w4xxy) {
  w4xxy = NaN
  console.log(w4xxy);
}
if (!w4xxy) {
  w4xxy = null
  console.log(w4xxy);
}
if (!w4xxy) {
  w4xxy = false
  console.log(w4xxy);
}
if (!w4xxy) {
  w4xxy = undefined
  console.log(w4xxy);
}
if (!w4xxy) {
  w4xxy = ''
  console.log(w4xxy);
  w4xxy = 225
}
if (!w4xxy) {
  console.log('nao vai aparecer pq é TRUE')
}

console.log('agr os TRUE:')

//tudo isso é true

let leticia = ' ';

if (leticia) {
  leticia = true
  console.log(leticia);
}
if (leticia) {
  leticia = 1
  console.log(leticia);
}
if (leticia) {
  leticia = '  '
  console.log(leticia);
}
if (leticia) {
  leticia = 'andre'
  console.log(leticia);
}
if (leticia) {
  leticia = (-5)
  console.log(leticia);
}
if (leticia) {
  leticia = ({})
  console.log(leticia);
  leticia = null
}
if (leticia) {
  leticia = ({})
  console.log('nao aparece pq é false');
}


console.log('gf');

//nos if tem o == e ===. o 3 é se é EXATAMENTE igual, o 2 se adapta tipo 0 == false
//é true, e tmb tem 1== e !===

//tmb tem && q compara se uma expressao é verdadeira tipo gato e cao
//shift 7 no teclado for it
//basicamente isso... quer saber se as duas sao verdades e n necessariamente
//iguais

const cão = 'cão'
const gato = 'gato'

let ver = gato && cão
let olha = 5 - 5 && 5 + 5


if (leticia && nicolas){
  console.log('é false pq n é igual')
}
if (leticia && nicolas){
  console.log('é false pq n é igual')
}
if (cão && cão){
  console.log(`é cão mesmo!`)
}
if (cão && gato){
  console.log(`é por ser string!`)
}
if (5 >= 5 && 7 > 2){
  console.log('5 igual a 5 e 7 maior q dois ent sim')
}

//se amboms os valores forem True ele retorna o ultimo valor
if (ver){
  console.log(ver)
}
//se um for falso e outro verdadeiro simplemente ele só da o falso
console.log(olha)

//tmb tem o || q sempre retorna o primeiro valor verdadeiro

if (true || true){
  console.log('verdadeiro')
}
if (true || false){
  console.log('vai mostrar o true')
}
if (gato || cão){
  console.log('vai mostrar gato pq ambos sao verdadeiro mas gato é o primeiro')
}

//tmb tem o switch q é uma especie de condicional.
//se vc tem uma variavel com valor, vc pode dar switch variavel
//e flar caso valor seja tal vc faz algo, n entendi
//precisa dar os dois pontinhos
//caso um valor seja real ele só continua msm q o case n seja verdade
// ent vc precisa do break

let cor = 'azul'

switch (cor) {
  case 'azul':
    console.log('n entendi pra q serve essa coisa')
    break
  case 'vermelho':
    console.log('n vai aparecer pq n é vermelho e por conta do break')
  case 'verde':
    console.log('n vai aparecer pq n é verde e por conta do break')
  default:
    console.log('sei la, isso é como se fosse um else. mas n entendi o switch')
}

//sem o break ele executa tudo caso algum seja verdadeiro.
//se tiver break funciona como if

//mas essa parece inultio
