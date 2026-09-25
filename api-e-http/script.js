//o principal protocolo pra se comunicar com APIs é o http

//e pra falar com apis de verdade(fora dos arquivos do seus computador)
//vc usa o method 'POST'
//ai tem esse site de exemplo: 'https://jsonplaceholder.typicode.com/posts'

//tmb é interessante vc colocar em consts a URL e options
//tipo caso tenha varios fetch naquela api

const url = 'https://jsonplaceholder.typicode.com/posts'
const options = {
  method: 'POST', //feito pra dar dados n pegar. tipo criar algo
  //com os dados DADOS na api q vc chama
  body: '{"title": "javaScript"}',
  Headers: {
    "Content-Type": "aplication/json; charset=utf=8"
  }
} //as pessoas coolocam em variaveis pq é muita coisa q precisa dar
//pra receber a resposta, ai vc só mete um options logo

async function buscando() {
  const pega = await fetch(url, options)
  const pegaJson = await pega.json()
  console.log('enviado', pegaJson)//com o post vc literalmente ta mandando
  //uma informacao n recebendo entende
}

buscando()
//no forms vc da prevent default no formulario
//dps pega a resposta com o id do input com .value


//usando GET:
//q no caso n precisa de options nesse exemplo
const url1 = 'https://api.github.com/users/nicolasgomesnicolau'

async function buscando1() {
  const pega1 = await fetch(url1) // Como é GET, o fetch vai direto sem options complexas
  const pegaJson1 = await pega1.json()
  console.log("name user:", pegaJson1.login)
  console.log("amout of repository:", pegaJson1.public_repos)
}

buscando1()



/*
princiapis method:

get: puxa informacao, como informacao de usuario

post: manda informacao tipo pra criar usuarios, ou posts etc

put: normalmente pra atualizar informacoes

delete: deleta uma informacao

e no network aparece content type fetch pra tudo se pah

no network tmb tem status tipo: 
404 Not Found: A URL ou o recurso que você procurou não existe.
200 OK: Sucesso padrão (muito comum em GET e PUT).
201 Created: Sucesso absoluto para um POST que acabou 
de criar algo novo no banco.
*/


const urlPUT = 'https://jsonplaceholder.typicode.com/posts/2'
const optionsPUT = {
  method: 'PUT', //atualizar dados
  body: '{"title": "javaScript"}', //corpo da mensagem
  Headers: {
    "Content-Type": "aplication/json; charset=utf=8" //tipo de conteudo
  }
}

fetch(urlPUT, optionsPUT)
.then(resposta => resposta.json())
.then(jsonR => console.log(jsonR))