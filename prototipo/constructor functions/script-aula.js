//toda funcao vai ter essa propriedade chamada prototype
//basicamente mostra propriedades de uma funcao construtora
//e vc tmb pode manipular, redefinir, ou criar novas propriedades

//ela serve pra resolver um problema de q...
//cada new function construtora vc ta criando copias e copias
//daquela funcao q tem uma funcao dentro

//aparentemente vqnd vc cria uma funcao(q é uma propriedade)
//dentro da funcao q vc vai dar new isso pesa na memoria

//mas qnd vc... cria a funcao utilizando prototype
//vc basicamente cria uma propriedade function compartilhada

//ent a cada new function construtora vc apenas copia propriedades normais
//e as functions vc n copia vc simplesmente compartilha a msm



//ai pra fazer isso vc basicamente da funcao(nomeDelaNoCaso)
//funcao.prototype.novometodo = () => {console.log('opa)}

function monstro(nome) {
  this.nome = nome
}

monstro.prototype.atacar = function() {
  const nome = this.nome
  console.log(`${nome} atacou, top né?`) //isso n aparece nos new
}//ela n é copiada, se vc der console.log ela n aparece
//porem essa é justamente a ideia
//vc só ve se vc dar goblin.atacar()

//inclsuive n pode usar arrow function em prototype


const goblin = new monstro('goblin')

goblin.atacar()

console.log()

//obviamente o protype ó retorna propriedades de functions

//basicamente n cria funcoes em functions construtoras pq vc sempre copia












//agr prototype 2.

//ele mostrou o .charAt() a posicao revela a palavra dali '-'

const pais = 'brasil'
const estado = new String('maranhao') //criando um... objeto? yes

console.log(pais)
console.log(estado)
console.log(estado.toUpperCase())

//llembrando q prototype existe em todos os objetos
//mas ele é como se fosse algo compartilhado ent vc meio q
//adiciona um prototype entende, ai vc pode adicionar funcao ou propriedade



//agr ele ta mostrando o objeto Array q transforma em array e pronto

const lista = document.querySelectorAll('li')

const listaArray1 = Array.prototype.slice.call(lista)
const listaArray2 = Array.from(lista)

console.log(listaArray2)

//n entendi a diferença

//bassicamente trasnforma de nodeList pra Array

//e node list n tem as mesmas propriedades. tipo posicao
//toupperCase eu acho etc



//tmb tem array.from(lista) CLARO ja usamos esse
//a diferença ´é q o outro ta linkado ao prototipo

//


//tmb tem o metodo getOwnPropertyNames(variavel) basicamente
//retorna propriedades. CARA, eu N FAÇO ideia do pq ele ta ensinando isso
//é tipo o basico do basico do basico. o addeventlistener é muito mais
//complexo

console.log(Object.getOwnPropertyNames(lista))



const Carro = {
marca: 'Ford',
preco: 2000,
acelerar() {
return true;
  }
}

Carro // Object
Carro.marca // String
Carro.preco // Number
Carro.acelerar // Function
Carro.acelerar() // Boolean
Carro.marca.charAt // Function
Carro.marca.charAt(0) // String

//ELE Só TA SE REPETINDO

//blz ele ta focando pro q os valores retonram

//string, function, number ou sei la oq

//tem uma propriedade chamada CONSTRUCTOR de object
//ele retorna o tipo de valor q aquela propriedade retorna

//