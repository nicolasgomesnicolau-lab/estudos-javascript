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






//animação ao scroll.

//basicamente ele quer adicioanr IN nas sections
//enquanto vc n tiver no bloco ela n aparece

//isso é chamado de evento de scroll
//ai vc precisa sber adistancia do objeto pro q o usuario ve
//ai vc usa getboundingClientReact().top
//e qnd chega no numero negativo é pq é pra parecer

//e pra isso vc usa o window com eventolister(scroll, callback)
//adicionar primeiro a msm class em todas section

//outra coisa, n da pra colocar um valor fixo
//precisa se adaptar a tela, com a regra de aparecer sempre na METADE
//da tela

function scrollintro() {

  const INsections = document.querySelectorAll('.js-scroll')

  if (INsections) {

    const metadeDaTela = window.innerHeight * 0.60
    document.querySelector('.js-scroll').classList.add('ativo')

    console.log(INsections)

    function scrollEvent(item) {
      INsections.forEach((item) => {
        const topo = item.getBoundingClientRect().top - metadeDaTela
        if (topo < 0) {item.classList.add('ativo')}
        else {item.classList.remove('ativo')}})
    }

    window.addEventListener('scroll', scrollEvent)
}}

//mano QUE CONFUSÃO

//ACHO Q SITES TIPO O POP LINGO Q MOSTRA BASICAMENTE COISAS RELACIONADAS
//A BANCO DE DADOS... PRECISA TER UM HTML TENSO SEI LA

//NA REAL ACHO Q TA SAFE PQ... O HTML DEVE SER BASICO
//E TUDO FICA COM O JS, ELE CRIA TAGS E ELEMENTOS E COLOCA CONTEUDOS 
//VARIAVEIS SIMPLES ASSIM, AI ELE VAI TER UM BANCO DE DADOS DE IMAGENS ETC
//E CONTEUDO... E VAI COLOCAR LA COM IMPORTS OU... APIS SEI LA

//sites complexos com muitas abas, o js simplesmente APAGA o html
//da pagina q vc tava e pronto

scrollintro()






//agr cunstructor FUNCTIONS!

//ta falando como se cria um objeto e suas propriedades

//ai tem os .nomes la pra chamar ou redefinir ou criar algo novo
//eles ficam dentro das chaves etc isso ja lembravamos


//ele quer copiar propriedades de objetos em outros
//ele quer copiar as propriedades e apenas mudar os valores
//mas sem influenciar

//pra isso vc... faz um function algo() e pra definir propriedades
//vc faz this.propriedade = valor

//ai vc da const objeto = new algo();
//ai vc vai usando os pontos pra redefinir valores

function Carro(marca, preco) { //isso chama-se funcao contrutora
  this.marca = marca; //precisa ter this pq vc ta se referindo ao carro
  this.preco = preco;
}

//parametro é essencial pra n ser repetitivo

const honda = new Carro('honda', 2000); //carro vira uma propriedade de honda
honda.andar = () => {console.log('anda ai')}

console.log(Carro(), honda.marca)

//ai o new é pra cada.. novas definicoes ai

//e tmb... marca padrao no console vc só da marca
//mas ai caso vc queira saber o da honda ai é ponto msm

//tmb existem outras funcoes construtoras de forma mais simples
//em vez de dar ponto em tudo vc apenas adiciona parametros e pronto




//o new basicamente... cria um objeto vazio com base no prototipo q vc da
//ai ele te da as propriedades definiveis

function carro2(marca, precoinicial) {
  const taxa = 1.2
  const precofinal = precoinicial * taxa
  this.marca = marca
  this.preco = precofinal
}

const xaiomi = new carro2('xaiomi', 2000)

console.log(xaiomi.marca, xaiomi.preco)