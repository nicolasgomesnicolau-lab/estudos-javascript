export default function faqInteracao() {
  const perguntas = document.querySelectorAll('.js-tabfaq dt')

  if (perguntas.length) {

    function callbackDT(item) {
      perguntas[item].classList.toggle('ativo')
    }

    perguntas.forEach((item, posicao) => {
      item.addEventListener('click', () => {
        callbackDT(posicao)
      })
    })

    console.log(perguntas)
  }
}