// Duplique o menu e adicione ele em copy(copyright la em baixo)

const menu = document.querySelector('.menu')
const cloneMenu = menu.cloneNode(true)
const footer = document.querySelector('footer')
footer.appendChild(cloneMenu)
console.log(footer)



// Selecione o primeiro DT da dl de Faq

const DL = document.querySelector('dt')
console.log(DL)

// Selecione DD referente ao primeiro DT

const DDdoDT = DL.nextElementSibling
console.log(DDdoDT)

// Substitua o conteúdo html de .faq pelo de .animais
//n faço ideia
//a sulucao q achei foi append childreen

const faq = document.querySelector('#faq')
const ingles = document.querySelector('#aulas-ingles')

//ingles.appendChild(faq)
faq.appendChild(ingles)

//a gente n fez oq ele pediu
//ele queria paenas o conteudo, innerHTML. tipo = saca.
//e n mudar o... a posicao literalmente

console.log(ingles)




//w