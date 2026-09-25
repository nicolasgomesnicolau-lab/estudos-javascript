//exemplo real

console.log('oi')

function dom(seletor, classe) {
  this.elemento = document.querySelector(seletor)
  return this.elemento.classList.add(classe)
  }

const ativarLi = new dom('li', 'sabrina')