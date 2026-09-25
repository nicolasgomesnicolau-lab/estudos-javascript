export default function login() {
  const modalContainer = document.querySelector('.modal-container')
  const botao = document.querySelector('a[href^="#login"')
  const fechar = document.querySelector('.fechar')
  console.log(modalContainer)
  console.log(botao)
  console.log(fechar)

  botao.addEventListener('click', () => {
    modalContainer.classList.add('ativo')
  })

  fechar.addEventListener('click', () => {
    modalContainer.classList.remove('ativo')
    console.log('opa')
  })



  const formulario = document.querySelector('.modal form')
  console.log(formulario)

  formulario.addEventListener('submit', (item) => {
    item.preventDefault()

    const dados = new FormData(formulario)

    const gmail = dados.get('gmail')
    const senha = dados.get('senha')

    console.log(gmail, senha)
})}
//criar funcao de slide, é ate q facil, basicamente for
//for... class add. dps de segundos, class remove.