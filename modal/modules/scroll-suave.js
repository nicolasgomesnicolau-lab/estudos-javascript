export default function scrollSuave() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]')

  if (linksInternos) {

    console.log(linksInternos)

    function scrollPraSection(item) {
      item.preventDefault()
      const href = item.currentTarget.getAttribute('href');
      const section = document.querySelector(href)
      /* metodo alternativo:
      const setTOP = section.offsetTop
      window.scrollTo({
        top: setTOP,
        behavior: 'smooth'
      })*/
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start', //opcional
      })
      console.log()
    }

    linksInternos.forEach((item) => {
      item.addEventListener('click', scrollPraSection)
    })
  }}