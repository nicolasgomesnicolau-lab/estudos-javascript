//agr array

//é basicmanete listas, e pra chamar itens especifico é nome da lista[posicao]

//a 'lista' é chamada de ray

const array = ['bea', 'anabia', 'yasmin'];

//pra pegar item especifico

const yasmin = array[2]; //começa no 0

console.log(yasmin);

//pra substituir

const anabiaPARAamanda = array[1] = 'amanda';

console.log(array);

//pra adicionar

const adicionaMENINAerrada = array[3] = 'julia'; //gambiarra mesmo

console.log(array);

// pra adicionar certo 

const adicionandoDEformaCERTA = array.push('sabrina');

console.log(array);

//pra tirar o ultimo item .pop

array.push('heloisa');

array.pop(); //se tira isso aparece

console.log(array);

// pra saber quantidade de itens é lenght

console.log(array.length);









//agora loops, (o mais diferente em relação ao python
//vc cria um variavel no lloop eu acho.
//a primeira é o inicio a segunda é condicao e a terceira incremento (??)

//vc só da let uma vez (n pode ser const) eai é como se a variavel
//fosse uma config de loop. inicio, fim, e a ordem, o ++ significa ir de 1+1
//o terceiro iten tmb pode ser variavel-- pra ser regressivo
//ou de 2 em 2 com variavel +=2 ou multiplicando tipo *=

//precisa ser <q numero ou <=, se for = fica infinito
for (let numero = 0; numero < 10; numero++) {
  console.log(numero);
}

//pra fazer o 'in' do py em js, vc usa o of
//vc precisa ainda criar uma variavel de inicio mas usa o of pro final
//nesse caso vc n coloca = 0, nem variavel ++

let nomes = ['nicolas', 'geovanna', 'beatriz', 'leticia'];

for (let pessoas of nomes) {
  console.log(pessoas);
}
//ou vc faz igual o normal mas comparando com i

for (let i = 0; i < nomes.length; i++) {
  console.log(i)
}




//agr while loop
//mais simples né mas sei la.
let i = 0
while (i < 10) {
  console.log(i);
  i++;
}






//tmb tem o tal do break

for (let pessoas of nomes) {
  console.log(pessoas)
  if (pessoas === 'beatriz') {
    break
  }
}






//existe tmb o forEach (conceito novo) é uma forma mais facil de
//usar o for em array
//basicamente oq o of faz no for.
//vc da nome do array.forEach(function(parametro){console.log(argumento)})
//e ja era

//tmb da pra ver o index(numero da posição, apenas colocando outro parametro)
//(parametro, 2parametro)

nomes.forEach(function(nomes, posição){
  console.log(nomes, posição)
})

//tmb da pra fazer com outra sintaxe
//mas ai precisa do ; antes e dps sempre ;

let inicio = 0
let fim = 30

for (;inicio < fim;) {
  console.log(inicio);
  inicio++;
}