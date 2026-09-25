//ler documents. e CONSOLE.log
//e claro os functons e for it




//ainda dimensoes e diostancias
//mas eventos


//falando q um metodo pra ativar um evento
//é o addevenlistener, dando exeplo de click 
//esse tipo de evento é chamado de callback
//dispara caso algo ocorra

const img = document.querySelectorAll('img')

console.log(img)
img.forEach((item) => {
  item.addEventListener('click', () => {
    const url_imagem = item.src;
    const nomedaimagem = url_imagem.split('http://127.0.0.1:5500/ZOI/img/')
    console.log(`clicou legal! ${nomedaimagem[1]}`)
  })
})

//uma boa pratica é fazer funcoes callback pro addeventlistener
//tipo function callback console.log(clicou

function callback() {
  console.log('clicou')
}

const titulo1 = document.querySelector('h2')

titulo1.addEventListener('click', callback)
//n é pra usar com () pq dai ela ativa sem ninguem clicar em nada



//calback é referente ao evento q ocorreu
//ent vc pode passar por padrao ali na funcao algum parametro

const tituloPrincipal = document.querySelector('h1')

function callbackComParametro(evento) {
  const target = evento.target
  console.log(evento, target)
}

tituloPrincipal.addEventListener('click', callbackComParametro)

//ai o event ele tem propriedades tmb, q vc pode
//criar na propria funcao com base no parametro
//parametro.currenttarget, .target, .type, .path
//o currenttarget mostra o nome do class clicado
//o target é onde o click ocorreu
//o type é o tipo de evento
//e o path... n explicou
//----------------------


//tmb tem um event bem famoso:
//preventdefault
//ele é pra links, imageina o seguinte.
//um link externo vai pra outro site, mas caso vc queira fazer
//outra coisa com esse link externo, vc precisa prever o padrao
//basicamente mudar oq um link faz NESSA COISA

const linkExterno = document.querySelector('a[href^="https"')

function handlecallback(event) {
  event.preventDefault()
  console.log(even)
}

linkExterno.addEventListener('click', handlecallback)



//agr ele vai falar do THIS
//parece confuso esse conceito mas vamos la

//eles explicam do jeito mais complicado do mundo
//mas em arrays ele serve pra citar outros objetos em outros
//tipo n da pra citar o objeto nome num funciton, pq ele é outro objeto
//ai pra citar ele num novo objeto tem q usar o THIS

//basicamente pra citar objetos de qualquer array
//ent vc pode ver eles em functions normais msm pra funcionar em arrays

//e se ele tiver num function callback, ele retorna o elemento
//se vc simplesmente dar console this

const imgUnica = document.querySelector('img')
function callbackTeste(event) {
  console.log(this)
  console.log(this.getAttribute('src'), this.target)
}

imgUnica.addEventListener('click', callbackTeste)






//AGORA UMA DAS COISAS MAIS IMPORTANTEs

//existem diversos eventos:
//click, scroll, resize, keydown, keyup, mouseenter

/*resize: Disparado quando você redimensiona a janela do 
navegador (muda o tamanho da tela).

keydown: Disparado quando você pressiona uma tecla do 
teclado (enquanto segura a tecla abaixada).

keyup: Disparado quando você solta a tecla do teclado que 
estava pressionada.

mouseenter: Disparado quando o mouse entra (passa por cima) 
de cima de um elemento HTML específico.
*/

//addEventListener('keydown', callbackComParametro)

//eventos podem ser adicionadoao window, document e claro a elementos

//o scroll é usado com o window por exemplo
//pelo fato de ser um moimento da pagina inteira

//keydown aparentemente window tmb
//e obviamente o rezise

const classAula = document.querySelector('.ingles-explicacao')
const classImg = document.querySelectorAll('img')
console.log(classImg)

const minhaLista = [document.querySelectorAll('img')]

classImg.forEach((item) => {const lista = Array.from(item); console.log(item)})

window.addEventListener('keydown', callbackTeclas)

//existe .key inclusive 
//event .key


//agr ele ta falando do evento keyboard.
//n é um comando ou algo q digita no listenerevent

//ele da um exemplo de if tecla 'a' faça isso
//no caso document.body.classlist.toggle('algo)

//é interessante usar o toggle pq ele faz qnd n tem e tira qnd tem




//ent uma forma simples de fazer interações com js
//é adicionando classes pro body q o css escuta
//só pra lembrar q o css pode trabalhar com classes usando .nomeclass


//inclusive o site ficou muito bom com esses callback ai no listener keydow
//-------------------------------










//agr ele ta falando de foreach pra evento(pra leementosAll)

//basicamente se vc tem um queryselectorall
//e quer um event pra todos esses itens da tag ou elemento
//vc usa variavel.foreach((parametro) => {parametro.addeventlistener})

//e vc ainda precisa de outro foreach ANTEs pro calback
//basicamente vc faz um callback pra target normal né emfim


const imagens = document.querySelectorAll('img')

function callbackImagens(evento) {
  const elementoImagem = evento.target.getAttribute('src')
  console.log(elementoImagem, 'oi')
}



imagens.forEach((valor) => {
  valor.addEventListener('click', callbackImagens)})






  //falando agr sobre