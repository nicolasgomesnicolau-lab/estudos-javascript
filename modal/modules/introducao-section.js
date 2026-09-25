export default function scrollintro() {

  const INsections = document.querySelectorAll('.js-scroll')

  if (INsections) {

    const metadeDaTela = window.innerHeight * 0.60
    document.querySelector('.js-scroll').classList.add('ativo')

    console.log(INsections)

    function scrollEvent(item) {
      INsections.forEach((item) => {
        const topo = item.getBoundingClientRect().top - metadeDaTela
        if (topo < 0) {item.classList.add('ativo')}
        else {item.classList.remove('ativo')}})
    }

    window.addEventListener('scroll', scrollEvent)
}}