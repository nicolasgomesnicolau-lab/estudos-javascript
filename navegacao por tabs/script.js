//lista de conteudo

//geralmente uma lista de itens e outra lista de itens
//sendo q a primeira normalmente é uma lista de navegação

//basicamente... a gente vai fazer umas telas q sao links pra navegações
//nessa caso cada imagem... seria uma explicacao
//com o ingle n sei a efetividade
//talves com elas né, as meninas


//ele fala pra adicionar outra classe nessas referencias de navegações
//pra se comunicar com js. basicamente espalçço js-tabmenu nas imagens




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


//é uma boa pratica fazer um block inteiro do codigo em IF
//pq se o html... some ou uma tag deixa de exiitir
//da erro, ent vc deixa dentro do if