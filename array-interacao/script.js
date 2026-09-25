//muita coisa bizarra.






/*

tem o array.map(item) => {return 'carros' + item}
o .map vai pegar eles e somar

*/

const carros = ['ford', 'fiat', 'hb20']

const newcarros = carros.map((item) => {
  return 'carro ' + item
})

console.log(newcarros)

/*

tmb existe o: .reduce

array.reduce(algo1, algo2) => {return n si oq}
basicamente ele vai somando um por 1 de uma array

*/

const numeros = [1, 10, 40, 20]

const algo32 = numeros.reduce((acumulador, atual) => {
  return acumulador + atual
})

console.log(algo32)

/*

tem o .some tmb. basicamente um if

array.some(idade => idade >= 10)

*/

//tmb tem o EVERY. é basicamente a msm coisa
//mas todos precisam ser verdade


//tmb tem o .find(), e o findIndex()

//basicamente basicamente. index fala posicao logico
//e o find só retorna o numero msm