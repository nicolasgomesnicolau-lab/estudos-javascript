//falandpo abobrinha dnenovo

//basico sobre string


//o new retorna objeto... meio... obvio? n se




//FALANDO DEF LENGHT DENOVO

const comida = 'pizza '
const frase = 'a melhor de todos os tempos'

console.log(comida.length)
console.log(frase.length)

//ai tem o conct q serve pra substituir os + nas strings

const fraseFinal = comida.concat(frase, ' pizza boa')
console.log(fraseFinal)



//tmb tem o metodo includes q serve pra ver se algo é falso ou true
//numa STRING ele consegue detectar se os caracteres tem ali na ordem
//bizarro

const fruta = 'PERA'
const listaDeFrutas = 'melancia, banana, PERA'

console.log(listaDeFrutas.includes(fruta))
//funciona ate pra strings n completas tipo PE

//tmb tem o endwith



//tmb tem o metodo SLICE()
//ele corta a string de acordo com o valor q vc passa
//vai de uma possicao ate a q vc pede

//se for só um valor ent ele vai dali pra sempre

//e se for um valor negativo ele vai de tras pra frente
//ate a posicao negatiaq q vc deu

const nicolas = 'nicolas estudando muito'
const gomes = 'gomes estudando'
const minhaVida = 'top'

console.log(nicolas.slice(0, 6))
console.log(nicolas.slice(7))
console.log(gomes.slice(-7))




//tmb tem o substring.

//ele é a msm coisa q o slice mas n tem o valor negativo



//tmb tem o metodo INDEXOF()
//ele retorna a posicao em q um caractere ou palavra esta na string

console.log(nicolas.indexOf('a'))
console.log(minhaVida.indexOf('o'))
//se for uma palavra completa é estranho pq ele retorna 
//apenas o ponto de partida
//mas vai ser usado pra [] se pah n sei


//tmb tem o lastIndexOf()
//q mostra o ULTIMO caractere mencionado

console.log(nicolas.lastIndexOf('a'))
console.log(minhaVida.lastIndexOf('o'))






//tmb tem o metodo PADSTART() e PAGEND()
//basicamente ele... retorna a string com o numero multiplicado
//por algum caractere tipo

const listaPreços = ['R$ 99', 'R$199', 'R$12000']

listaPreços.forEach((item) => {
  let preçoVisual = item.padStart(10, '.')
  console.log(preçoVisual)
})

//ai o padsends é literalmente pra fazer isso começar pelo final
//tipo pra direita entende



//tmb tem o repeat q é literalmente algo q repete  a string
//multiplicada pelo valor q ta no metodo

const PALAVRA = 'OPA'
console.log(PALAVRA.repeat(5))





//tmb tem o replace q... é um metodo pra strings mas
//o primeiro valor é o substituido, e o segundo é o substituto

//mas tmb da pra meter uns /[]+/g
//basicamente esses negocio é pra vc aplicar em TODOS os substitutos
//se vc colocar apenas ' ', ', ' vc só vai alterar o primeiro espaço

//mas o/[]+/g faz aplicar a regra em tudo

let listaItens = 'caminas boné calças bermudas vestidos saias'
listaItens = listaItens.replace(/[ ]+/g, ', ')

let preco = 'R$ 1200,43'
preco = preco.replace(',', '.')


console.log(listaItens)
console.log(preco)





//tmb tem o metodo SPLIT()
//os arumentos q vc da basicamente ele retorna um objeto pra cada
//vez q aquele argumento aparece
//ele só recebe um argumento, e a cada vez q aquilo aparece na array
//ele cria uma propriedade num objeto com o nome da variavel ai

const arraylista = listaItens.split(', ')

//vc tmb pode usar ele junto com o join
//basicamente vc pega o objeto criado e adiciona o argumento q vc da
//a cada vez q deveria ter outro.

console.log(arraylista)




//tmb tem um metodo chamado toUpper() case
//basicamente é um contains de se tudo é maiusculo ou minusculo

//ai vc usa ele com if

let sexo = 'feminino'

if (sexo === sexo.toUpperCase()) {
  console.log('tudo maiusculo chefe')
}
else {
  console.log('tudo minusculo porem vou arrumar')
  sexo = sexo.toUpperCase()
  console.log(sexo)
}



//TMB TEM ESSES DE TIRAR ESPAÇOS

//str.trim(), str.trimStart(), str.trimEnd()
//Remove espaço em branco do início ou final de uma string.

const valor = ' R$ 23.00  '
valor.trim(); // 'R$ 23.00'
valor.trimStart(); // 'R$ 23.00  '
valor.trimEnd(); // ' R$ 23.00'

//w