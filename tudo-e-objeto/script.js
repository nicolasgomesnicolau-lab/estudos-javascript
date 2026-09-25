//nomeie 3 propriedades ou metodos de string

const propriedades = ['.tostring, .fixed, .wigth']

const metodos = ['function(), console.log(), math.random() é um metodo']

// nomeie 5 propriedades ou metodos de elementos do DOM

const DOM = ['document.queryselector(\'.class q adicionou\')',
  'class.addListenerEvent(\'click\', function() {console.log})',
  'class.classlist.add(\'alguma coisa ai\')'
]

//busque na web um objeto (metodo) capaz de interagir com o clipboard
//é a parte q lida com control C control V

const botão = document.querySelector('.btn')

const copia = addEventListener('click', function() {
  const mensagem = 'pizza é muito bom'
  navigator.clipboard.writeText(mensagem); //era pra ta em aspas mas é pra aparecer no alerta
  alert(`copiado chefe! ${mensagem}`); //ou console.log mas alert descobri agr
})

//ou vc usa uma bibliote, basicamente vc precisa ir pesquisando como faz oq
//vc nunca vai saber de tudo em programação e vc literalmente vai ter q pesquisar


//w