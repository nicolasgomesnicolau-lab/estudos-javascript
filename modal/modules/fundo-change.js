//const classAula = document.querySelector('.ingles-explicacao')
//const classImg = document.querySelectorAll('img')
//classImg.forEach((item) => {const lista = Array.from(item); console.log(item)})

export default function background() {
  const imagens = ['img1', 'img2', 'img3']

  function callbackTeclas(evento) {
    let body1 = document.querySelector('body')
    if (evento.key === 'e') {
      document.body.classList.toggle('img1')
      if (body1.classList.length > 1) {
      imagens.some(img => body1.classList.remove(img))
      body1.classList.add('img1')
    }
  }
    else if(evento.key === 'f') {
      document.body.classList.toggle('img2')
      if (body1.classList.length > 1) {
      imagens.some(img => body1.classList.remove(img))
      body1.classList.add('img2')
    }
    }
    else if(evento.key === 'c') {
      document.body.classList.toggle('img3')
      if (body1.classList.length > 1) {
      imagens.some(img => body1.classList.remove(img))
      body1.classList.add('img3')
    }
    }
    let imagemVer = imagens.some(img => body1.classList.contains(img))
    if (imagemVer) {
    console.log(body1.className)
  }
  }
  window.addEventListener('keydown', callbackTeclas)
}