let algo = 0
console.log()

// Verifique a distância da primeira imagem
// em relação ao topo da página

algo = document.querySelector('.titulo')
const algo1 = algo.offsetTop;
console.log(algo1)

// Retorne a soma da largura de todas as imagens

const algo2 = document.querySelectorAll('img')
let soma = 0;
algo2.forEach((item) => {
  soma += item.offsetWidth; //se for só client as iamgens q n tao natela
  //simplesmente ele n mede
})
console.log(soma)

// Verifique se os links da página possuem
// o minimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

const algo3 = document.querySelectorAll('a[href]')
algo3.forEach((item) => {
  const algu = item.getBoundingClientRect()
  const height = algu.height
  const width = algu.width
  let verificação = 'esta de acordo com as recomendações do gogle'
  if (height < 40 || width < 40) { //se alguma das condicao for TRUE:
    verificação = 'não esta de acordo com o gogle'
  } //pra dar true apenas se AS DUAS forem verdadeira ai era &&
  console.log(`altura: ${height}, largura ${width} (${verificação})`)
})

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const algo4 = window.matchMedia('(max-width: 720px)')
const menu = document.querySelector('.menu')

if (algo4.matches) {
  menu.classList.add('menu-mobile')
  console.log(window.innerWidth, algo4.matches)
}
else {
  menu.classList.add('menu-desktop')
  console.log(window.innerWidth, algo4.matches)
}

console.log(menu)
//se for maior é false, se for menor é true

