function InteracaoIMG() {
  const imagens = document.querySelectorAll('.js-tabmenu li')
  const explicação = document.querySelectorAll('.js-tabcontent section')

  if(imagens.length && explicação.length) {
    function callbackIMG(valor) {
      explicação.forEach((item) => {
        item.classList.remove('ativo')
      })
      explicação[valor].classList.toggle('ativo')
      console.log(valor)
    }

    console.log(explicação)

    imagens.forEach((item, posicao) => {
      item.addEventListener('click', () => {callbackIMG(posicao)})
    })
  }
}


//ACORDDING LIST

//basicamente ele quer adicionar no faq algo q
//apareça a resposta apenas caso vc clique nela.
//ent vc adiciona uma classe pra mostra basicamente isso

function faqInteracao() {
  const perguntas = document.querySelectorAll('.js-tabfaq dt')

  if (perguntas.length) {

    function callbackDT(item) {
      perguntas[item].classList.toggle('ativo')
    }

    perguntas.forEach((item, posicao) => {
      item.addEventListener('click', () => {
        callbackDT(posicao)
      })
    })

    console.log(perguntas)
  }
}

InteracaoIMG()
faqInteracao()

//tmb é uma pratica comum deixar esses blocos inteiros como se fossem funcoes
//pra vc só chamar na main