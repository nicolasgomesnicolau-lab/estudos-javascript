const pessoas = {nicolas: 18, maria: 20, lucas: 32}

console.log(pessoas)

//pra substituir:
pessoas.nicolas = 'andreas'

console.log(pessoas)

//pra adicionar

pessoas.lucas = 'opa'

console.log(pessoas)

//agr entrou uns comandos loucos, area: e lados: sei la, function no bagulho

const quadrado = {
  lados: 4,
  area: function(lado) {
    return lado * lado;
  },
  perimetro: function(lado) {
    return this.lados * lado;
  },
}

const la = quadrado.lados; //4
const ar = quadrado.area(5) // 25
const peri = quadrado.perimetro(5); // 20)

console.log(quadrado.area(5))

//this é pra pegar um iten dentro do objeto(dicionario) como um variavel
//pra chamar uma funcao no objeto é variavel(do objeto).item()
//e n bota nome acho q pq o proprio nome do item ja seria o nome

//funcoes em dobjetos sao um METODO aparentemente

//tmb da pra fazer item()

quadrado.cinco = function() {
  return 5;
}
console.log(quadrado.cinco())

//exemplo ruim mas na criação da pra botar area() direto
//em vez de area: function anonima

//e bibliotecas podem vir dentro de objetos ja q da pra fazer funcoes

const pi = Math.PI //acho q objeto
const random = Math.random() //metodo

console.log(pi, random)

//objeto, prorieda. um item dentro de objeto é propriedade, e dentro dele é item

//existe tmb o console.table pra mostrar todos as propriedades de um on

console.table(quadrado)

//vc tmb pode definir uma variavel como propriedade de um objeto

const menu = {
  width: 800,
  height: 50,
  backgroundColor: '#845',
}

const bg = menu.backgroundColor

console.log(bg)

//tmb tem o comando objeto(nome q colocou).hasownproperty(propriedade)
//pra saber se aquela propriedade existe ou nAO  :/

//entender objetos nativos do js é interessante
//tipo .lenght pra contar caracteres

//w