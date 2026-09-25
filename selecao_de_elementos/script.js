const algo = 0
console.log()

//retorne no console todas as imagens do site.

const todasImagens = document.querySelectorAll('img')
console.log(todasImagens)

//retorne no console apenas as imagens q começam com a palavra M

const imgLetraM = document.querySelectorAll('img[src^="img/a"]')
console.log(imgLetraM, "imagem q começa com a")

//seleciona todos os links internos (href#)

const linkInternos = document.querySelectorAll('[href^="#"]')
console.log(linkInternos)

//selecione o primeiro h2 dentro de .animais-descricao

const primeiroH2 = document.querySelector('h2')
console.log(primeiroH2)

//selecione o ultimo p do site

const TodosP = document.querySelectorAll('p')
let Parray = Array.from(TodosP)
let Ultimo = Parray[Parray.length - 1]

console.log(Ultimo)