//faland sobre objetos q n tinha falado antes

//outerHTML, innerHTML e innerText

//o outer da todo html do elemento
//o inner da o html interno
//e o innertext da o texto sem tag(conteudo)



const h1 = document.querySelector('h1')

const outerH1 = h1.outerHTML
const innerHTMLh1 = h1.innerHTML
const innerTXTh1 = h1.innerText

console.log(outerH1) //inteiro tipo target só q mais especifico do html
console.log(innerHTMLh1) //literalmente só o conteudo entre as tags
console.log(innerTXTh1)// pega apenas o texto

//os dois ultimos mostram no console a msm coisa
//mas o innerhtml pode altuear tudo daquele elemento
//incluindo subtags, atributos etc

//o texto apenas o texto msm


//pra pegar o elemento inteiro... vc precisa do queryselector algo body *
//ai vc pode dar remove this etc.

//se vc quer alterar com algum chamado é o documentHTML. 
//o HTML é poderoso pq ele meche em tudo visualmente no site.

//-------------------------


const TEXTO = document.querySelectorAll('section')

function callbackREMOVEtxt(valor) {
  console.log(valor.target)
  valor.target.remove()
}// e o target... é otimo pra identificar apenas um elemento especifico
//uma tag especifica praticamente, isso de innertext n sei oq n serve

//mas o innerText... ou HTML talves seja bom pra mudar tudo de um conteudo n sei
//o target é bom pra identificar o click talves

TEXTO.forEach((item) => {
  addEventListener('click', callbackREMOVEtxt)
})


//mas se vc quer mudar algo na pagina com base num comando
//ou ate botao, ai é melhor adicionar classlist na tag q vc quer
//pode ser body ou sei la
//mas ai vc vai precisar mecher no css q nem foi com a ana

//---------------------------------


//mas emfim, caso vc queira mudar apenas o CONTEUDO ESCRITO
//entre tags, vc pode usar innertext pra redefinir o alor

h1.innerHTML = '<p>yas</p>'






//AGORA SOBRE TRANSVERSING. n existe liuteralmente um objeto transversing
//mas objetos q vamos sitar faz parte do transversing

//basicamente é uma forma de navegar pelo DOM ultilizando
//as propriedades e metodos


//ficou confuso mas basicmanete .
//em vez de pegar um elemento pelo ID ou classe.
//vc pega elemento pai ou subelementos(filhos)
//e o elemento pai ou filho normalmente vem com base num evento
//normalmente click

//basicament, parentElement mostra a tag q guarda a tag clicada(pai)
//o parent do parent mostra o pai do ´pai
//previousElementsibling mostra literalmente a tag de cima
//e o nextelementsubling mostra LITERALMENTE o elemento de baixo
//childreen mostra todos as tags q ela guarda, subtags(filhos)
//e o childreen[0] mostra simplesmente a primeira
//e --variavel.cildren.lenght mostra a ultima claro

const lista = document.querySelector('.ingles')
console.log(lista)

const lista2 = lista.parentElement
const lista3 = lista.parentElement.parentElement
const lista4 = lista.previousElementSibling
const lista5 = lista.nextElementSibling
const lista6 = lista.children
const lista7 = lista.children[0]
const lista8 = lista.children[--lista.children.length]

//e vc pode dar .parentElement infinitamente pq ele só da o pai anterior

console.log(lista2)
console.log(lista3)
console.log(lista4)
console.log(lista5)
console.log(lista6)
console.log(lista7)
console.log(lista8)

//tmb da pra pegar o ultimo filho da tag q vc quer

const ultimoLI = document.querySelector('li:last-child') //pega a ultima subTag(elemento)

console.log(ultimoLI)




//agr:
//ELEMENT vs NODE

//toda tag é um elemento obviamennte, tudo em html é um element
//href, class, atributos em geral, conteudo tmb etc

//agr o node pode ser qualquer coisa
//um espaço, um comentario, etc. ent é pra pegar elemento por isso
//n pode dar previousElementsibling sem o element '-'




//agr como manipular elementos

//é possivel mover elementos no dom com metodos de node(q n tem element)

//tem esses: 

const contato = document.querySelector('.contato')
const titulo = contato.querySelector('.titulo')
//uma forma interessante de manipular elemento é dando variavel ponto

contato.appendChild(lista)
contato.insertBefore(lista, titulo)
contato.removeChild(titulo)
//contato.replaceChild(lista, titulo)


//basicament appendChild move a lista(aulas) para final de contato
//insertBefore insere a lista antes de titulo (n entendi)
//removechild basicamente remove o titulo de contato
//replaceChild substitui titulo por lista

//o child vai ser BEM importante pra mudar blocos de tags inteiras
//com as subs clro









//agr NOVOS ELEMENTOS
//podemos criar elementos com createElemnt()
//ai vc pode manipular com innerText e CllassList.add

const imagens = document.querySelector('.ingles')
const NOVOh1 = document.createElement('h1')
NOVOh1.innerText = 'nicolas'
NOVOh1.classList.add('titulo')

imagens.appendChild(NOVOh1)

//childreend é MUITO importante pra ser uma sub tag de uma maior
//ai o css pega e ja era, n adiante só criar uma h1 e pronto











//agr pra clonar ELEMENTOS
//SUPER IMPORTANTE pelo simples fato de q.. se vc muda uma variavel
//q tem o elemento, ela fica assim pra sempre

//ent vc precisa clonar caso vc queira mudar algo q ja existe e talves
//voltar ao normal dps

//pra fazer isso é o variavel(q vc deu query ou get).cloneNode(ture)
//simples

const PrimeiroH1 = document.querySelector('h1')
console.log(PrimeiroH1) //(faq)
const ClonePrimeiroH1 = PrimeiroH1.cloneNode(true)
const PAIh1 = PrimeiroH1.parentElement
ClonePrimeiroH1.innerText = 'OLA'

PAIh1.appendChild(ClonePrimeiroH1)
console.log(PAIh1)