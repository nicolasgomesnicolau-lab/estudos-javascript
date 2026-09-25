function callbackATIVO(valor) {
  const alguinho = this.classList.toggle('ativo')
  valor.preventDefault() //valor n this, pq n é um evento
  console.log(valor.target)
} //precisou usar this, pq item em si n é um elemento
//mas o this preve isso.
console.log()

// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

const algo1 = document.querySelectorAll('a')
algo1.forEach((valor) => {
  valor.addEventListener('click', callbackATIVO)
})
console.log()

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

function callbackTarget(valor) {
  console.log(valor.target)
}

const algo2 = document.querySelectorAll('body *')//era pra ser '*'
//ou "cody *"
algo2.forEach((valor) => {
  valor.addEventListener('click', callbackTarget)
})

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove()
//remove um elemento

function callbackREMOVE(valor) {
  const alguinho = this.classList.toggle('ativo')
  //valor.currentTarget.remove()
  //AQUI VC N QUER MUDAR O CLASS, VC QUER LITERALMENTE MUDAR O ELEMTO
  //EXCLUIR AQUELA TAG DO BODY EU ACHO
  //o target devolve tudo daquele elemento em si
  //n apenas classList, por isso. classlist apenas devolve class
  //alem de q. valor ta ligado ao algo2, q devolve o body daquilo.

  //eu odeio o gemini era só ter dado target remove '='
}

algo2.forEach((valor) => {
  valor.addEventListener('click', callbackREMOVE)
})

// Se o usuário clicar na tecla (t), aumente todo o texto do site.

//const algo4 = document.querySelectorAll('')
console.log()

function teclaT(evento) {
  console.log(evento.key)
  if (evento.key === 't') {
    document.documentElement.classList.toggle('textomaior')
  }
}//documentElement é pra falar literalmente com html do css

algo2.forEach((item) => {
  addEventListener('keydown', teclaT)
})



//eu odeio o gemini era só ter dado target remove '='
//e pra poder sidentificar qualquer item q o usuario clicar
//é simplesmente fazendo *, ou body *

//classlist, e currentTarget é bem importante pelo visto
//e body.acho q tinha algo assim? n lembro
//era isso msm, body.classlist igual a algo, se n for ent remove a class
//se tiver a class ja sabe

//a forma de mudar o site é só mudando o body msm
//ai precisa dar document antes

//.key pra saber a tecla



//----------------------------------