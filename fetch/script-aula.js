1//fetch API

//permite fazer request http atrves do metodo fetch()

//esse metodo retorna solucao de uma promise.

//n fica literalmente no new promise mas ele é um tipo de promise
//assim como await then e catch e finally


//vc pode puxar de /arquivos e tmb de sites claro


//ent vc faz um fetch ele é um promise, e vc da um then((responde) => {
//  })

//normalmente num POST vc manda tudo de uma vez
//token, duracao etc tudo q a API pedir, ai ela vai dar sucesso ou n
//ai vc tem o then e catch
//vc tmb usa o method post pra qnd é um link. e o headrs é a 
//tipo de carta, pode ser autorizacao, ou tipo de conteudo etc

fetch('./doc.txt')
.then((resposta => {
  return resposta.text()}))
.then((corpo => {
  console.log(corpo)
  let conteudo = document.querySelector('.conteudo')
  conteudo.innerHTML = corpo //inner é literalmente o conteudo entre as tags
}))

//basicamente no fetch se vc quer o conteudo vc precisa ter um return
//ai o corpo pega isso pra... grudar sei la




//agr falando sobre o json

//basicamente se vc dar then(response => response.json)

//ele serve pra pegar um json e transformar em um objeto no js

fetch('https://viacep.com.br/ws/01001000/json/')
.then(resposta => resposta.json())
.then(pronto => {
  console.log(pronto.cep) //uma das propriedades
})
//tem q usar o argumento pra ver tudo
//e precisa ser http

async function buscarcep(cep) {
  try{
    const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    const pronto = await resposta.json()
    const jsonLista = Object.values(pronto)
    console.log('-----------------------')
    jsonLista.forEach((item) => {
      console.log(item)
    })
    console.log('-----------------------')
  } catch(erro) {console.log('deu ruim')}
} //await na resposta e na chamada

buscarcep('06414025')

//ai nesse promise pode ter text ou json

///existe tmb fetch em htmls, pra puchar blocos grandes de html
//e aplicar no seu


//tmb tem o blob, basicamente ele transofrma o arquivo e bytes
//bits agrupados, ent ele pode dar uma imagem pra vc
//ele serve pra musica, documento, imagem, video etc
//tudo isso é feito em byte
//ai vc pode mostrar ele na tela
//vc pode criar um url com URL.createObjectURL(meublob)
//ai ele cospe um audio ou imagemetc

const imagems = fetch('./auxuliares.avif')
.then(certo => certo.blob())
.then(imagem => {
  const blobURL = URL.createObjectURL(imagem)
  console.log(blobURL)
  const imagemHTML = document.querySelector('.botao-imagem')
  imagemHTML.href = blobURL
  //tmb pode colocar no body ou num div msm
})

//tmb tem o clone ele vai colar a resposta pra vc n interferir diretamente
//no arquivo principal

fetch('./auxuliares.avif')
  .then(resposta => {
    // Cria uma cópia gêmea idêntica da resposta original
  const respostaParaOGps = resposta.clone();

    // Lê a primeira via como Blob
  resposta.blob().then(imagem => {
    console.log("Blob gerado com sucesso!");
  });

    // Lê a segunda via (a cópia) para ver o tipo ou status sem dar erro de stream consumido
  respostaParaOGps.text().then(texto => {
    console.log("Consegui ler o texto da cópia também!");
  });
});

//pra conseguir usar foreach no fetch, vc precisa transformar em objeto
//const algo = object.values() ou keys ou entries emfim

//e nunca esquecer q tem q ter ou clone ou blob ou text ou json nos then
//ai o proximo then só libera


//w