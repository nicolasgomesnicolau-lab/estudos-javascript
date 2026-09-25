//exercicios

// Transforme o objeto abaixo em uma Constructor Function
function pessoa(nome, idade) {
this.nome = nome,
this.idade = idade
return console.log(nome + ' andou')}

pessoa('nicolas', 18)


// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos

const pessoa1 = new pessoa('maria', 25)
const pessoa2 = new pessoa('bruno', 15)
const pessoa3 = new pessoa('joao', 20)

console.log()

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

function dom(elemento) {
  const selecionado = document.querySelectorAll(elemento)
  this.addClass = (classe) => {selecionado.forEach((item) => {item.classList.add(classe)})}
  this.removeClass = (classe) => {selecionado.forEach((item) => {item.classList.remove(classe)})}
}

const dom1 = new dom('li')
dom1.addClass('ativa-na-leticia')