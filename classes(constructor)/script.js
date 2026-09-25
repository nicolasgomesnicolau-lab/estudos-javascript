//classes é basicamente uma funcao construtora

//igual qnd vc faz function.prototype.nome_constructor-function = ()


/*mas com classes vc faz: 
class funcao {
  constructor(argumentos) {
  this.nseioq = argumento
  this.nseioq2 = argumento}
element() {
const nseioq = algo
return n sei oq
aqui basicamente a funcao desse function constructor, oq ele vai retornar
}}

*/

// 1. A função construtora
function Usuario(nome, email) {
  this.nome = nome;
  this.email = email;
}

// 2. Adicionando método no protótipo manualmente
Usuario.prototype.dizer = function() {
  return `Olá, meu nome é ${this.nome}, e meu gmail é ${this.email}`;
};

const user1 = new Usuario("Nicolas", "nicolas@email.com");

//outro jeito com class

class UsuarioNovo { //o class n precisa citar um function existente ele cria
  constructor(nome, email) { //pór isso é pratico
    this.nomeC = nome
    this.emailC = email
  }
falar() {
  const Mnome = this.nomeC
  const Memail = this.emailC
  return (`ola, meu nome é ${Mnome}, e meu email é ${Memail}`)
  }
static nomeGmail() {
  return new UsuarioNovo('lucas', 'sabrina@gmail')
  //precisa ser novo do class n doa funcao
}
}

const UsuarioClass = new UsuarioNovo('nicolas', 'nicolasgomes@gmail')
const botaoazul = UsuarioNovo.nomeGmail() //sem new pq ja retorna

console.log(UsuarioClass.falar())
console.log(botaoazul)
console.log(user1.dizer())

//tmb tem a static, q é basicamente vc botar algo por padrao
//inclusive se vc quer botar valor padrao no function normal
//vc usa aquele || ai if null = algo se pah

