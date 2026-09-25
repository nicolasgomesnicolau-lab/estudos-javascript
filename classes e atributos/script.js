//exerccios
let algo = 0
console.log('oi')

//adiciona a class ativa a todos os itens do menu

let classMenu = document.querySelectorAll('.menu a')
classMenu.forEach((item) => {item.classList.add('ativo')})
console.log(classMenu) //pra mechar em cada item é foreach msm

//remove o classe ativo de todos os itens do menu e mantenha apenas no primeiro

classMenu.forEach((item, posição) => {
  if (posição > 0) {
  item.classList.remove('ativo');
}}) 
console.log(classMenu)

//verifique se as imagens possuem atributo alt

let img = document.querySelectorAll('img')

img.forEach((imgs) => {
  const tem = imgs.hasAttribute('alt');
  console.log(tem)})


//modifique o href do link externo no menu

let algo1 = document.querySelector('a[href^="https"]')
let algo2 = algo1.setAttribute('href', 'https://www.gogle.com')
let algo3 = 0
let algo4 = 0

console.log(algo1)

