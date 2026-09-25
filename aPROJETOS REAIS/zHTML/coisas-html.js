//muito doido realmente, as paginas sao feitas tudo em html, 
//ele armazena todas as funcoes e imagens e icones, e clicaveis tmb
//bizarro o css só enfeita msm
//div são pra isolar paginas pra sess~oes

//agr css e htmml, n sei se ele vai ensinar espero q sim

//aparntemente sim



//h1 titulo
//class pra dar nome pras coisas ai, pra podem ter muitos
//ellemtnos em class ent tem os ID
//h2 pra titulos menores na magina,
//p pra descricao.
//div pra isolar blocos pra conteudo especifico.
//section dentro de div ali pra cobrir o bloco e o p dentro dela

//nav pra... sessões como se fossem abas, aqui é onde armazena clicaveis
//clicaveis pra com href pra abas tipo faq contato etc. fica dentro do
//nav que tem o ui onde fica o li e dentro dele o href pra clicavel e ai fecha
//o a no html serve pra criar links msm, onde fica o href

//eai tem o section pra blocos ai né ja falamos

//E TUDO FICA NO BODY E ANTES DO SCRIPT.JS q tmb fica no body

//se só existe um body por site isso é legal


//algumas coisas tem a m msm class pra qnd for aplicada uma regra
//todas serem influenciadas






//essa foi a explicação geral






//-----------------------
//agr to no curso

//tags separadas, estrutura htm

//tags (<tag>) e atributos (atruibuto="">)
//e tem o conteudo tmb (<tag>conteudo</tag>)
//atritibutos ficam dentro das tags e conteudo q aparece na tela entre as tags, fora mas entre o inicio e fim

<a href="clica aqui chefe">botão</a>

//-----------------------
//tags mais comuns

//p: vai marcar um paragrafo, interessante. tipo blocos de texto

//h1, h2, h3, h4, h5, h6: vao marcar titulos de tamanhos diferentes

//a: pra marcar o link

//As tags <ul> e <li> trabalham sempre juntas para criar listas
//ou seja, listas como um menu de navegação ou uma lista de compras
//basicamente pra... uma especie de menu mas pra agrupar arias informações
//entede?, 
//dados menores saca.

//<div> é basicamente pra blocos tmb, vc define q aquilo é pra
//um conteudo especifico. normal eles terem class
//e h2 dentro deles com p etc. e section

//section< podem estar dentro dos divs pra agrupar conteudos
//basicamente ele funciona como um capitulo basicamente dentro do div
//mas podem n estar no div tmb tipo, pq ela n é algo vazio
//ela é como... um topico, o div normalmente separa conteudos

//<nav> basicamente uma coleção de link (cheio de href)
//é tipo um menu., dentro deles sempre tem um ul, dentro do ul 
//tem o <li>, e dps do li tem o <a>




//em resumo, div separa conteudos em bloco pra n misturar
//section separa titulo e coisas assim topicos pra n confundir tmb
//e o ul e li, sao pra listas de coisas tipo... de dados de um titulo



//-----------------------
//estrutura de documento html

//sempre começa com a tag <!DOCTYPE>
//ai vc coloa o tipo de coumento q é html
//<DOCTYPE html>

//dps a tag <HTML>, n é essencial mas é uma boa pratica
//normalmente c usa o atributo lang pra falar a linguagem

//a terceira é a tag <head> onde vc coloca toda informação q o
//navegador precisa, tipo os meta la
//vc tmb coloca o <title> q é o nome q fica ali em cima.
//vc tmb liga o html com o css ali no head com a tag link

//a quarta o <body> basicamente onde vai ficar todo conteudo




//no body normalmente a estrututura é h1 dps os divs h2 p ai A as vezes



//normalmente... section separa blocos do site(h1), mas se um section(h1) tem um bloco q precisa de varios outros blocos(varios h2) ele usa um div(com uma class claro) e nesse div ele cria varias sections dentro do div (h2), q por sua vez o section vai ta linkado aos links internos do nav

//mas eu acho(n tenho certeza) q qnd é um site com paginas inteira pra cada aba, se usa uma div pra cada pagina, e dentro dos divs tem os sections e se precisar de varios h2 outro div

//mas a tag <nav> normalmente é usado pra sites com uma pagina só, isso é interessante, com as # pra llinks internos

//pra sites com varias paginas(q n é tudo numa só no scroll) n usa o nav, ent como eles se comunicam? 
//simples, eles precisam ter varios html, e eles basicamente se interagem por conta da tag <a> e os href="nome-do-html.html" nome da aba<a> 
//ai tudo linka no css

//mas sites mais modernos usam o index.html, eles usam umas engenharias ai com o css tipo o taget ou input type="cheackbox" da a impressao de varias paginas mas na verdade é meio q uma só.




//onde colocar o class? basicamente no section ou div ou nav
//basicamente q esteja armazenando conteudo ou botoes ou sections(div)