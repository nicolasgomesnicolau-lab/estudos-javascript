//retorne o url da pagina atual ultilizando o objeto windows

const urlPagina = window.location.href

//href aqui é um objeto e n a tag html

console.log(urlPagina)


//seleciona o primeiro elemento da pagina que possua class ativa

const elemento = document.querySelector('.titulo');
//qnd mennciona um class vc precisa colocar .nome do class

function mensagem() {
  console.log('clicou');
}

elemento.addEventListener('click', mensagem) //por algum motivo
//n pode ter parenteses no mensagem


//retorne a lingua do navegador

const lingua = window.navigator.languages
//o idioma ta no navegador ent window, ai navigator ai lenguages

console.log(lingua)

//retorne  a largura da janela

const largura = window.innerWidth;

console.log(largura);