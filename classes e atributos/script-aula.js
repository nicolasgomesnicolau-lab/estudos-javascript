//SOBRE DOM ALGO SUPER IMPORTANTE.
//esses comandos pareciam inuteis, mas percebi q sites interativos
//o html precisa MUDAR NA HORA poro usuario






//vai ensinar mais sobre dom


//ele ta falando do classList
//tem umonte de objeto pra class list, bom lembrar q tmb existe className

//classlist.add, .remove, .toggle, .contains, .replace

//ele da exemplos de adicionar ou remover ATIVO
//add vc ja sabe pra q é, remove tmb
//agr o toggle é pra adicionar ou remover class
//contains pra ver se o class list é true ou falso com aspas
//e o replace é o replace '-'

//pra saber metodo ou propriedade de cada iten especifico é com Foreach

//tudo é sobre classes nesse exemplo, add é pra adicionar classe entende?
//ai vc pode remover classe,
//toggle adiciona se n tiver e remoe se for true
//contains vc ja sabe
//replace tmb

const menu = document.querySelector('.menu')
console.log(menu)

const éTrue = menu.classList.contains('menu')
console.log(éTrue)

const liDoMenu = document.querySelector('a')
console.log(liDoMenu)

const AddClassLi = liDoMenu.classList.add('link-aulas')

//se der console em algum query, ele vai te mostrar todos itens
//com aquela class
//praa ter dois itens da msm classe é só ter o msm nome
//caso queira mais controle sobre as diferentes tags bota id

//qnd vc da add numa tag q ja existe vc ta dando sobrenome só






//agr a parte interessante
//ATRIBUTES, vc pode manipular atribulos de uma class eu acho
//atributos é os comandos dentro da tag

const grid = document.querySelector('.grid-section')
console.log(grid)

const atributos = grid.attributes
console.log(atributos)





//tmb tem metodos q retornam ou definem de acorcdo com o tributo
//selecionado
//oos comandos: getattribute, setaattribute, hasatribute
//e removeatributte, nomes sao bem explicativos

//normalmente se usa variavelQuery.get n sei oq

const imagens = document.querySelector('img')
console.log(imagens)

const temSRC = imagens.hasAttribute('src')
console.log(temSRC)

//ai pra adicionar atributos

const imagem1 = document.querySelector('img')
console.log(imagem1)

const adicionarAlt = imagem1.setAttribute('alt', 'primeira-imagem')
console.log(imagem1)

//alt é um atribuo q coloca na tag <img> é basicamente pra
//deixar o nome menos feio

//pra pegar um item de uma class, tipo ta numa sub dessa class entende
//basicamente vc pega uma tag dentro desse class

let classMenu = document.querySelectorAll('.menu a')
console.log(classMenu)



//pra modificar o valor dentro de um atributo
//vc precia dar o set, o primeiro valor é atributo q vc quer mudar o valor
//o segundo é o conteudo q vc quer nele

let algo1 = document.querySelector('a[href^="https"]')
let algo2 = algo1.setAttribute('href', 'https://www.gogle.com')

console.log(algo1)