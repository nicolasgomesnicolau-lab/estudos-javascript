'use stric' //se botar um T ali no final as variaveis globais
//n funcionam :/



//agr escopo

//basicamente global e n global

//variaveis foras de funcao funcionam fora e dentro da funcao
//variaveis criadas na funcao só funcionam na propria funcao

const bea = 'dendela'

function dendela() {
  console.log(bea);
}
dendela()
console.log(bea); //se fosse criada 'bea' dentro da funcao ia dar erro


//variavel global (erro)
//basicamente se vc n usa chave var, const, ou let a variavel vira globl

function hot() {
  geovanna = 'variavel global sem querer';
  //ou terrible things< ou scary things
  console.log(geovanna);
}
hot();
console.log(geovanna); //mas isso é um erro

//se vc botar 'use strict ele da erro nesse tipo de variavel'






//escoppo de funcao, variaveis de funcao podem ser acessadas pelas funcoes claro

//agr ele explica var, const, e let

//basicamente var é ruim pq vaza pra fora do bloco
//basicamente escopo global

//w