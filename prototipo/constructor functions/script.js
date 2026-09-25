//vai ter exercicio dessa coisaaaaaaaaaaaa



// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

function Pessoa(nome, snome, idade) {
  this.nome = nome
  this.sobrenome = snome 
  this.idade = idade
}

Pessoa.prototype.nomeCompleto = function() {
  console.log(`${this.nome} ${this.sobrenome} sua idade é ${this.idade}`)
}

const pessoas = new Pessoa('nicolas', 'gomes', 18)
pessoas.nomeCompleto()

// Liste os métodos acessados por
// dados criados com NodeList,
// HTMLCollection, Document tendi foi nada
//ele quer q eu de essas coisas.prototype

console.log(NodeList)
console.log(NodeList.prototype)
console.log(HTMLCollection)
console.log(HTMLCollection.prototype)
console.log(Document)
console.log(Document.prototype)
console.log('tipo isso só retrona as propriedades desses objetos', 
  'n faço ideia do pq ele quer isso'
)

console.log()

// Liste os construtore dos dados abaixo
const li = document.querySelector('li');

li;
li.click;
li.innerText;
li.value;
li.hidden;
li.offsetLeft;
const algo = li.click();

console.log(li.click.constructor.name)
console.log(li.innerText.constructor.name)
console.log(li.value.constructor.name)
console.log(li.hidden.constructor.name)
console.log(li.offsetLeft.constructor.name)
console.log(li.click())

// Qual o construtor do dado abaixo:
li.hidden.constructor.name;

console.log(li.hidden.constructor.name)



//basicamente essa aula toda é pra falar como vc ve oq cada
//objeto retorna

//isso é bom pra vc saber tipo... qual valor da pra usar tal objeto ou n

//w