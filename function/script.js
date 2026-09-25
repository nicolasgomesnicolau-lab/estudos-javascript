//tem o metodo .CALL

//basicamente numa function com this, caso n seja um addevent listener
//ou sei la oq

//tipo uma function retorna algo q é uma propriedade de um nome q vc
//n definil nela

//o .call basicamente cobre isso


window.marca = 'carro'
window.ano = 200

function descricaocarro(velocidade) {
  console.log(this)
  console.log(this.marca + ' ' + this.ano + velocidade)
}

descricaocarro({marca: 'honda', ano: 2015}, 100)



function Dom(seletor) {
  this.element = document.querySelector(seletor)
}

Dom.prototype.ativo = function(classe) {
  console.log(this)
  this.element.classList.add(classe)
}

const ul = new Dom('ul')
ul.ativo('banana')

console.log(ul.element)