//dimensoes e elemtnos

//ele ta falando comandos pra ver tamanho do elemento(tag, atributo etc)
//n sei oq isso significa

//se vc se pergunta como q uma tag html tem tamanho
//ele literalmente só mede o tamanho do conteudo q aparece
//na tela no html, se é css fica maior

const algo = 0



//client.height = height(contorno, quadrado) + padding(espaço interno)
//padding mede o espaço entre o conteudo e a borda
//o height mede o espaço todo, altura e largura, e calcula a area no final
const section = document.querySelector('#aulas-ingles') //# pra id
const algo1 = section.clientHeight;
console.log(section)
console.log(algo1)

//basicamente esses comandos sao uteis no js pra interação e animações

//animação q precisa de calculo é com js aparentemente




//clientHeight = mede só a altura do elemento em pixels.
//clientWidth = mede só a largura do elemento em pixels.

const algo2 = section.clientWidth
console.log(algo2)

//tmb tem o variavel.offsetheight(da o tamanho incluindo com o padding)
//e o variavel.scrollheight (da o tamanho total do texto até a parte
//q precisa do scroll pra ver)

const algonovo = document.querySelector('.ingles-lista') //. pra nomes
const algo3 = algonovo.scrollHeight;
const algo4 = algonovo.offsetHeight;
console.log(algo3)
console.log(algo4)



//tmb tem o offsetTop e offsetLeft

//eles calculam a istacia do elemento ate o topo da pagina
//ou ate a esquerda da pagina
//n o topo total, mas o topo da... tipo entre o conteudo e a tag pai

const algo5 = section.offsetTop
const algo6 = section.offsetLeft

console.log(algo5)
console.log(algo6)

//vai se fudeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee





//o proximo é esse: getbandingclientreact()
//retorna objeto de valores de width, height, e distancia do elemento e mais
//vc cria uma variavel onde vc pega a variavel do leemento com esse get
//ai vc pode só dar ponto height etc é uma function incluusive

const rect = section.getBoundingClientRect();

const algo7 = rect.height;
const algo8 = rect.width;
const algo9 = rect.top;
console.log(algo7);
console.log(algo8);
console.log(algo9);
console.log(rect);




//o proximo é: o window
//OLHA SO ISSOOOOOOOOOOOOOOOOOOO
//basicamente é a tela completa do navegador
//ele n mede nenhum elemento especifico

//objetos do window é:
//innerwidth(largura da janela)
//outerwith(soma devtools tmb)
//ai o msm serve pra innerheight e outer height

//tem tem: pageYOffset(distancia total do scroll horizonaltal)
//tem tem: pageXOffset(distancia total do scroll vertical)
//os dois medem a distancia q o usuario ta do scroll pro inicio da page

console.log(window.innerHeight)
console.log(window.outerHeight)
console.log(window.pageYOffset)

if (window.pageYOffset > 0) {
  console.log(`epaaaaa scrollou chefe ta na posicao ${window.pageYOffset}`)
}


//qnd o usuario diminui a tela isso inflcuencia nos valores tmb









//matchMedia()
//ver tamanho do bowser. metodo do windows claro
//e ele é uma funcao. vc dogota p ,axo,p de çargura pou height

//ai pra fazer o if, vc usa o if com a variavel q tem ele
//com .matches em seguida. o matches retorna true or false

const tamanho = window.matchMedia('(max-width: 600px)')

if (tamanho.matches) {
  console.log(tamanho.matches)
}
else {
  console.log(tamanho.matches)
}
console.log(window.innerWidth)
//se for menor é true, se for maior é false
//maior ou menor q o max né
//inteiro é mil 


//emfim ai da pra usar isso pra identifica se é mobile



//ai ele de uuma dica de..
//vc pode clicar em allgo no html no site
//ai vc usa o console e escreve $0 q é selecionado oq vc clicou
//usando innertext