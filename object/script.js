/*

O Object.assign() serve para juntar vários objetos em um só ou fazer uma cópia deles.

Imagine que você tem duas fichas de cadastro separadas e quer juntar as informações em uma única ficha completa. É exatamente isso que ele faz.

Exemplo Simples

JavaScript
const parte1 = { nome: 'Carlos', idade: 30 };
const parte2 = { profissao: 'Engenheiro' };

//Juntando as duas partes em um objeto novo ({})
const pessoaCompleta = Object.assign({}, parte1, parte2);

console.log(pessoaCompleta); 
//Saída: { nome: 'Carlos', idade: 30, profissao: 'Engenheiro' }
 
*/


//tmb tem o delete objeto.propriedade


//tmb tem o object.defineProperties(objeto)

//basicamente

const usuario = {};

Object.defineProperties(usuario, 'id', {
  coisa: 32,
  quinta: 21,
  quadra: dar
})

console.log(usuario)

//tmb tem o keys(objeto) fala as propriedades

//values, ai vc ve os valores das propriedades

//e o entries q ve tudo


//tmb tem toString