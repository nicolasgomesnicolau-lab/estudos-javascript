//href é oq faz o botao ficar azul, ele serve pra link mas da pra deixar vazio sei la
//tudo pode  ser clicavel desde q tenha um listener
//precisa de .'nome class' qnd é href


//agr sobre DOM, dom significa basicamente document object model

//const { useCallback } = require("react");

//com ela é possivel manipular um... botao sei la
//css tmb, conteudo tmb.


//o objeto global é o window, ele tem metodos e tudo mais é o mais usado
//tipo window.innerheight retorna a altura do browser ??



const elemento = document.querySelector('.titulo');
//qnd mennciona um class vc precisa colocar .nome do class

//e class pode ter varios itens, ent existe tipo[1] qnd vc usa
//uma variavel com queryselector nele



//window.alert('bea boa')

const href = window.location.href

console.log(href)




//tmb tem o documnent q é o mais usado, mas ele é um objeto do window

//document.querySelector isso a gente usa muito, ela seleciona tag


const h1SELECIONADO = document.querySelector('h1');

// o window ele é o global, nativo, ent por isso da pra escrever
//document, alert, e eventlistener sem ele.


//element tmb é um objeto

//o class n muda nada ele só adiciona um 'id'
//por mais q tenha a proria tag id, ele é colocado antes do >
//e oq ta fora normalmente é o nome q aparece msm sei la



//toda tag html é representado pelo objeto element..
//n sei se entendi, acho q tem objetos q sao elementos tipo document pra windows

h1SELECIONADO.innerText; //retorna o texto
h1SELECIONADO.classList; //retorna as classses
h1SELECIONADO.id; //retorna o id se vc colocou
h1SELECIONADO.offsetHeight; //retorna a altura do elemento

h1SELECIONADO.addEventListener('click', function() {
  console.log('clicou em', h1SELECIONADO.innerText);
});

//ou seja da pra dar .addeventlistener tmb


//tmb é comum criar uma const de callback pra nter q escrever sempre

const cliqueHref = document.querySelector('.btn')


function callbackHref(clicou) {
  console.log('clicou em', cliqueHref.innerText)
}

cliqueHref.addEventListener('click', callbackHref)

