export default function InteracaoIMG() {
  const imagens = document.querySelectorAll('.js-tabmenu li')
  const explicação = document.querySelectorAll('.js-tabcontent section')

  if(imagens.length && explicação.length) {
    function callbackIMG(valor) {
      explicação.forEach((item) => {
        item.classList.remove('ativo')
      })
      explicação[valor].classList.toggle('ativo')
      console.log(valor)
    }

    console.log(explicação)

    imagens.forEach((item, posicao) => {
      item.addEventListener('click', () => {callbackIMG(posicao)})
    })
  }
}