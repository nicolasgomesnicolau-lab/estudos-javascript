/*history api

A History API é uma ferramenta nativa do navegador que 
permite ao JavaScript manipular o histórico de navegação da aba 
(as setinhas de voltar e avançar) e alterar a URL exibida 
na barra de endereços sem precisar recarregar a página.

Em uma aplicação tradicional antiga, cada vez que você clicava 
em um link, a página inteira dava um refresh, 
o servidor processava tudo de novo e mandava um HTML novo.

O usuário clica em um link interno.

O JavaScript intercepta o clique, usa o fetch para baixar apenas 
os dados novos que precisa, atualiza o conteúdo da tela dinamicamente 
e usa a History API para mudar a URL 
visível (ex: de /home para /perfil).

Se o usuário apertar o botão de "Voltar" do navegador, 
a API garante que a página não quebre e restaure o estado anterior.

Fim da tela "piscando": Em sites antigos, cada clique exigia que 
o navegador destruísse a página atual, pedisse um arquivo HTML novo 
para o servidor 
e redesenhasse tudo do zero, causando aquela piscada branca na tela.


*/

//basicamente existem funcoes que mechem no html DOM pra cada pagina
//cada pagina é uma funcao, o html é simples
//ai provavelmtente tem um delete na troca n sei

//ai botoes de troca de aba n atualizam a pagina e sim mudam o html

//isso por conta do history API q mascara mudando a URL







//É INCRIVEL, o INNERHTML é MUITO poderoso
//ele literalmente MUDA TUDO cara bizarro
//tipo vc pode escrever normal, se vc da igual ja era
//ele n muda só o conteudo saca

//ai no html vc bota o data-path="nome das propriedadews das rotas"]
//é comum aplicacoes de sites enormes terem apenas o nav no html


//EXEMPLO DE APLICACAO:::::::::::::

// 1. Dicionário com o "HTML" (conteúdo) de cada função de página


const rotas = { //precisa do history pq a gente ta na porta 3000
  "/history-api(importante)/": `
    <div class="page-content">
      <h1>Bem-vindo à Home!</h1>
      <p>Esta é a página inicial da nossa aplicação de página única (SPA).</p>
      <p>Note que a URL muda e a página não dá refresh!</p>
    </div>
  `,
  "/history-api(importante)/sobre": `
    <div class="page-content">
      <h1>Sobre Nós</h1>
      <p>Nós criamos interfaces fluidas usando JavaScript puro e a History API.</p>
      <p>Aqui o DOM é manipulado em tempo real.</p>
    </div>
  `,
  "/history-api(importante)/contato": `
    <div class="page-content">
      <h1>Fale Conosco</h1>
      <p>Mande uma mensagem para o nosso suporte através do e-mail: contato@exemplo.com</p>
    </div>
  `,
  "404": `
    <div class="page-content">
      <h1>Página não encontrada</h1>
      <p>Ops! O endereço que você tentou acessar não existe.</p>
    </div>
  `
};

// 2. Função principal que renderiza a tela com base no caminho (path)
function carregarPagina(caminho) {
  const app = document.getElementById("app");
  
  // Pega o conteúdo correspondente ou joga a página 404 se não achar
  const conteudoHtml = rotas[caminho] || rotas["404"];
  
  // Injeta o conteúdo dinamicamente no HTML existente
  app.innerHTML = conteudoHtml;
}

// 3. Função que gerencia a troca quando o usuário clica nos botões internos
function navegarPara(caminho) {
  // Altera a URL na barra de endereços e cria o histórico (History API)
  window.history.pushState({}, "", caminho); //
  //EXPLICANDO MELHOR ESSA LINHA ↑↑↑↑↑↑↑: {
  //hstory ele é tipo algo q identifica o link q vc esta, e estava
  //ent ele serve pra controlar e sincronizar, pra poder
  //identificar onde vc tava, esta e onde pode ir

  //pushState é a ordem pra mandar pra esse outro link(mas ele n vai de 
  //vdd, pq se fosse ia atualizar é só uma maquiagem)(ele nem é necessario)
  //mas pra n bugar tudo se o usuario clica em back ent precisa dele

  //agr os argumentos(parte mais confusa):
  //{} é onde vc guarda dados extras, como n precisamos deixa vazio
  //"" o titulo da pagina, normalmente deixa vazio pq o caminho é o titulo
  //caminho é simplesmente a nova url }
  
  // Atualiza o conteúdo visual na tela
  carregarPagina(caminho);
}

// 4. Captura os cliques nos botões do menu
const botoes = document.querySelectorAll(".nav-btn");

botoes.forEach(botao => {
  botao.addEventListener("click", (e) => {
    const caminho = e.target.getAttribute("data-path");
    navegarPara(caminho); //pega o atributo q o botao tem
    //e isso é o path-name
  });
});

// 5. Ouve as setinhas de "voltar" e "avançar" oficiais do navegador
window.addEventListener("popstate", () => {
  // Pega a URL atual do navegador e redesenha a tela correspondente
  carregarPagina(window.location.pathname);
});

// 6. Carrega a página correta assim que o site abre pela primeira vez
carregarPagina(window.location.pathname);



//path name significa literalmente o nome da pagina ali em cima
//tipo nome da pasta