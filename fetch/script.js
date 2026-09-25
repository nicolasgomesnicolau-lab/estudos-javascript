// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar

const cep_usuario = document.querySelector('#cep')
const formulário = document.querySelector('form')
const section = document.querySelector('.acionado')
const bitBody = document.querySelector('.bit')
const formBit = document.querySelector('.form-bit')
const formPiada = document.querySelector('.joke')
const sectionJoke = document.querySelector('.piada')

let digitado = ''

formulário.addEventListener('submit', async (e) => {
  e.preventDefault()
  digitado = cep_usuario.value;
  console.log(`seu cep é ${digitado}`)
  const buscando = await fetch(`https://viacep.com.br/ws/${digitado}/json/`)
  const resposta = await buscando.json()
  const resposta_objeto = Object.values(resposta)
  section.innerHTML = resposta_objeto
  resposta_objeto.forEach((item) => {
    console.log(item)
  })
})

const imagems = fetch('./auxuliares.avif')
.then(certo => certo.blob())
.then(imagem => {
  const blobURL = URL.createObjectURL(imagem)
  console.log(blobURL)
  const imagemHTML = document.querySelector('.botao-imagem')
  imagemHTML.href = blobURL
  //tmb pode colocar no body ou num div msm
})

//w

// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
//utilize este valor a cada 3



async function bitcoin() {
  const resultado_bruto = await fetch('https://blockchain.info/ticker')
  const resposta_json = await resultado_bruto.json()
  console.log(`o bitcoin esta no preço de: R$${resposta_json.BRL.last}`)
  formBit.addEventListener('submit', () => {
    bitBody.innerHTML = (`o bitcoin esta no preço de: R$${resposta_json.BRL.last}`)
  })
}
//w
bitcoin()

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima

async function piada() {
  const respostaRuim = await fetch('https://api.chucknorris.io/jokes/random')
  const resposta_json = await respostaRuim.json()
  console.log(resposta_json.value)
  formPiada.addEventListener('submit', () => {
    sectionJoke.innerHTML = resposta_json.value
  })
}

piada()

// querendo ou n, then e await acabam fazendo a msm funcao
//ambos esperam as respostas

//vc tmb pode fazer fetch toda hora com setInteral tipo
//nome da funcao, delay

setInterval(piada, 100000) //tmb da pra fazer tudo da function
//como um arrow function do setinterval 

/*
da pra ter catch sem then? e da pra ter 
then qnd o fetch fica numa variavel?

fetch('https://api.exemplo.com')
  .catch(erro => console.log("Deu erro:", erro));

const requisicao = fetch('https://api.exemplo.com');

requisicao.then(resposta => resposta.json())
        .then(dados => console.log(dados));
*/

//w