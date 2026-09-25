//for each, faz a msm coisa do for
//pega uma lista ou queryselectorAll e mostra todos itens
//como se fosse no for mesmo

//aparentemente o foreach, primeiro oq ja sabemos q ele começa
//com um function, mas nesse function podem ter TRES(3) parametros
//o valoratual, a posição(index) e o arrayCompleto(acho q mostra tudo)

const imgs = document.querySelectorAll('img')

imgs.forEach(function(valorAtual, Posição, Completo) {
  console.log(Posição)
})

//i++ pra function zerada ai vai de 0 ao numero de lenght






//foreach e array, obviamente ele é um metodo de array
//mas funciona em getelement e queryall
//getelement n da, ent vc transforma em array com array.from

let grid = document.getElementsByClassName('grid-section')
//ele da todos diferente do query normal

let ArrayTitulo = Array.from(grid)

ArrayTitulo.forEach(function(valor) {
  console.log(valor)
})





//ele vai falar do "=>" chama-se arrow function
//basicamente ele deixa o codigo mais limpo

//do jeito antigo vc tinha q digitar functioon(parametro) e funcao
//com o arrow functions, vc cria uma variavel q executa uma funcao
//e qnd isso acontece ela é um arrow, eai vc só da o:
//const variavel = (parametro) => {return a+b}

//ai vc usa no foreach pq precisa usar o function

//pq criar uma variavel q execua funcao? basicamente pra criar
//funcoes anonimas, sem nome

const dizerOla = () => {
  console.log('ola')
}

dizerOla()

let titulos = document.querySelectorAll('h1')

titulos.forEach((titulo) => {
  console.log(titulo)
});

//top

//e se vc só tem um iten n precisa de parenteses dentro do foreach

let i = 0
for (i; i < 10; i++) {
  console.log(i)
}


//w