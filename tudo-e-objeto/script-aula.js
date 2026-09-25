//nome minusculo e maiusculo, sei la ele ta falando essas coisas

let nome = 'NicOlAs';

let nomeminusculo = nome.toLowerCase(); //minusculo

let nomemaiusculo = nome.toUpperCase() //maiusculo

console.log(nome, nomeminusculo, nomemaiusculo);

//int e float

const altura = 1.84;

const alturaString = altura.toString(); //string

const alturaINT = altura.toFixed(); //arredonda o valor

console.log(altura, alturaString, alturaINT);

//funcoes tmb tem metodos

function areaQuadrado(lado) {
  return lado * lado;
}

const functionToString = areaQuadrado.toString(); //mostra o esqueleto da funcao

const totalArgumentos = areaQuadrado.length; //mostra qnts argumetnos

console.log(functionToString, totalArgumentos);







//um dos mais importantes pra INTERAÇÃO
//elementos do DOM, basicamente vc cria um elemento com tag tipo <a>
//ai o class da um nome, oq aparece na tela é oq fica entre abertura e fechamento
//e o href é oq te manda pra outro lugar ou nenhum, é oq deixa azul e clicavel

//document serve pra dar funcao ao butao. tem varios objetos pra document
//document é a ponte entre script e html

const btn = document.querySelector('.btn'); //pra selecionar um elemento no html

//e da pra botar o addeventlistener no btn

btn.addEventListener('click', function() {
  console.log('clicou q eu vi');
})

//tmb tem o objeto classlist, q fala a classe e o valor

//tmb da pra adicionar com btn(ou o nome q deu).classlist.add

console.log(btn.classList.add('ativo'))