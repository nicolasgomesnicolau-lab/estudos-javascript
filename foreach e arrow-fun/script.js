//OPA

let algo = 0
console.log()

//mostre no console cada paragrafo do site

let paragrafo = document.querySelectorAll('p')
console.log(paragrafo)

//mostra o texto dos paragrafos no console

let Parray = Array.from(paragrafo)
Parray.forEach((valor) => {console.log(valor.innerText)})

//como corrigir os erros abaixo


let imgs = document.querySelectorAll('img')

let ArrayImgs = Array.from(imgs) //n precisa ser array pq o query ja é

ArrayImgs.forEach((item, index) => {console.log(item, index)});

let i = 0;
imgs.forEach(() => { console.log(i++); })

imgs.forEach(() => {console.log(i++)})
//w