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

InteracaoIMG()

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

//tmb é uma pratica comum deixar esses blocos inteiros como se fossem funcoes
//pra vc só chamar na main

faqInteracao()



//agr scroll suave !!!!!!!!!!!

//imagino q ele va usar o windows.

//tem o offsetTop pra ver a distancia. 

//mas n faço ideia de como ele vai fazer

//criei o js-menu

//ele n explicou as etapas do programa pq ele vai apresentar metodos novos
///window.scrollTo(), servepra falar ate onde o scroll vai
//ent setoff é super util
//ele pede dois argumentos, inicio e onde tem q ir
//mas isso n tem animacao nenhuma ent vc pode definir
//conportamentos entende 

//tmb tem a forma de scrollIntoView()
//basicamente vc usa como se fosse um metodo do elemento
//variavel.scrollIntoView()

function scrollSuave() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]')

  if (linksInternos) {

    console.log(linksInternos)

    function scrollPraSection(item) {
      item.preventDefault()
      const href = item.currentTarget.getAttribute('href');
      const section = document.querySelector(href)
      /* metodo alternativo:
      const setTOP = section.offsetTop
      window.scrollTo({
        top: setTOP,
        behavior: 'smooth'
      })*/
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start', //opcional
      })
      console.log()
    }

    linksInternos.forEach((item) => {
      item.addEventListener('click', scrollPraSection)
    })
  }}

scrollSuave()
