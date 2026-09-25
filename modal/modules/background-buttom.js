export default function backgroundInteracao() {
    let opcoes = []
    let imgsNumber = []
    let imgs = []

    for (let i=1; i<30; i++) {
      opcoes.push(`opcao${i}`)
      imgsNumber.push(i)
      imgs.push(`img${i}`)
}
    let body1 = document.querySelector('body')
    const background = document.querySelector('a[href="#back"]');
    background.addEventListener('click', (item) => {
      item.currentTarget.classList.toggle('ativo')
      console.log(item.currentTarget);
    });
    if (background.classList.contains('ativo')) {
      body1.addEventListener('click', (item) => {
        background.classList.remove('ativo')
        console.log('oi')})}
    const opcaoBack = document.querySelectorAll('a[href^="opcao"]');
    let pararLoop = false
    console.log(opcaoBack)
    opcaoBack.forEach((item) => {
      item.addEventListener('click', async (evento) => {
        evento.preventDefault();
        const destino = item.getAttribute('href');
        const teste = destino.slice(5)
        const destinoNumero = Number(teste)
        console.log(destinoNumero)
        console.log(imgsNumber.includes(destinoNumero))
        if (imgsNumber.includes(destinoNumero)) {
          const imagem = `img${destinoNumero}`
          body1.classList.toggle(imagem)
          if (body1.classList.length > 1) {
          imgs.forEach((img) => {body1.classList.remove(img)})
          body1.classList.toggle(imagem)}
        }
        const interromper = () => {
          pararLoop = true;
          if (body1.classList.length > 1) {
            imgs.forEach((img) => {body1.classList.remove(img)})
            body1.classList.remove(imagem)}
            };
          if (destinoNumero === 54) {
            interromper()}
        if (destinoNumero === 0) {
          pararLoop = false
          console.log('achamo')
          const esperar = (ms) => new Promise(resolve => setTimeout(resolve, ms));
          async function espera2r(){
            for (let i = 1; i<27; i++) {
              if (pararLoop) {
                body1.classList.remove(`ativo`)
                break;
              }
              body1.classList.add(`img${i}`)
              await esperar(2000);
              console.log(i)
            }
          }
          espera2r()
          }
        }
      )
    }
  )
  
} 
//criar funcao de slide, é ate q facil, basicamente for
//for... class add. dps de segundos, class remove.