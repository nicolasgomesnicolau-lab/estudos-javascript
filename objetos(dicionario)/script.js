//crie um objeto com seus dados pessoais

const dadospessoais = {
  nome: 'nicolas',
  nomeDOmeio: 'gomes',
  sobrenome: 'nicolau',
  idade: 18,
  tamanho: 1.79,
  peso: 85,
}

//crie um metodo no objeto anterior q mostre o nome completo

dadospessoais.nomecompleto = function() {
  return `${this.nome} ${this.nomeDOmeio} ${this.sobrenome}`
}

console.log(dadospessoais, dadospessoais.nomecompleto())

//modifique o valor da prorpiedade preço pra 3000

const carro = {
  preço: 1000,
  portas: 4,
  marca: 'audi',
}

carro.preço = 3000

console.log(carro)

//crie um objeto de cachorro q represente um labrador (????????)
//preto com 10 anos, que late ao ver um hommem

const cachorro = {
  raça: 'labrador',
  cor: 'preto',
  idade: 10,
  latir() {
    addEventListener('click', function(){
      console.log('AUAUAAUAUAUU!')
    })
  }
}

console.log(cachorro, cachorro.latir())