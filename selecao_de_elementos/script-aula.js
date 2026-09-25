const ingles = document.getElementById('aulas-ingles')

console.log(ingles, "getelement das explicações.")

const gridsection = document.getElementsByClassName('grid-section')

console.log(gridsection, "getelement grid-section")



const primeiraAli = document.querySelector('li');

console.log(primeiraAli, "primeiro<ali> (pór ser query)")

const linkInterno = document.querySelector('[href^="#"]');

console.log(linkInterno, "primeiro link interno(primeiro por ser query)")

const todosLinksInterno = document.querySelectorAll('img');

console.log(todosLinksInterno, 'queryAll img (tag por isso sem ponto)')

//primeiraAli.classList.add('grid-section')

const grid = document.querySelectorAll('.grid-section');

console.log(grid, "queryAll")
/*
const frutas = [1, 2, 3, 4]
const i = 0
for (i of frutas) {
  console.log(i)
}
  */
let i = 0
for (i of gridsection) {
  console.log(i, "for")}


const arraygrid = Array.from(gridsection)

console.log(arraygrid, "array")


//seleção de elemtnos:

//como pegar um elemento 

//com getElementbyId. ai vc pode dar funcoes a uma ID especifico
//e vc pode colocar num const claro. e sim fca nuum document
//só funciona pa elementos q tem id
//se vc selelciona oq n existe ele retorna null
//tmb tem o .innerText q retorna o txt da id






//outra forma de selecionar elementos é por class ou por tag
//a gnte ja fez isso com o query mas nessecaso é usando get tmb
//getelementbtclassname e getelementbytagname
//é estranho pq nos parenteses tem q colocar as aspas e o nome da tag
//ou nome do class

//e tmb da pra dar console[posicao] ai ele só retorna
//o primeiro elemento de um class por exemplo

//parece uma ray esses get, pq aparece em posicoes

//.lenght pra ver quantidade de itens




//agr o QUERYSELECTOR

//retorna o primeiro elemento que combinar com o seu celetor css
//n entendi nada
//basicamente se vc tem um href  tlgd, vc pode selecionar href
//super interessante, ou tags tmb claro, id seleciona com #
//sempre usando . pra href
//pra tag n usa nada

//const linkInterno = document.querySelector('[href^="#"]')
//nessa caso ^ significa começa com, ai pra comandos vc usa []
//ai é cmeça com ="#" ou seja links internos






//mas o queryselector retornao o PRIMEIRO

//ja o queryselectorAll retorna TODOS os elementos q ta nas aspas

//ele tmb pode usar osicoes de array, isso vai ser util



//pra adicionar  uma class a uma tag

//vc us o const queryselector da tag.classlist.add




//e pra usar o query all. vc precisa usar .class name
//pra pegar tudo




//por parecer um array da pra usar o foreach. q é tipo um lood
//pra passar por cada item do queryall



//tem tem o array.from(variavel) basicamente transforma as informações
//em arrays, ou seja esses get element ai é como se fosse array
//e vc pode literalmente transformar em arrays
//e tem o arraygrid.pop q remove o ultimo iten, literalmente é um array
//e vc pode remover o ultimo iten de um getelement q mostra varios


//Array.from(realmente transforma um queryall numa array





// o [] no query selector é um filtro praticamente
//nele vc filtra pelo ATRIBULO
//e tem o ^ antes do = q é pra falar "primeiro q encontrar"