//js assincrono

//sincrono:
//esperar uma tarefa acabar pra continuar com a proxima


//assincrono:
//mover pra a proxima tarefa antes da anterior terminar, o trabalho
//sera executado no 'fundo' e qnd terminado sera colocado na fila (task queue)

//exemplos: setTimeout, ajax, promises, fetch, async



//async é pra permitir o a funcao await
//o await serve pra vc ó iniciar outra tarefa qnd ela terminar

//normalmente é uma function async


//o promisse é pro seu codigo n travar, basicamente ele promete um valor
//ele tem argumentos:
//penPendente (Pending): "Estou trabalhando nisso..."
//Realizada (Fulfilled): "Terminei aqui está o resultado!" (resolve)
//Rejeitada (Rejected): "Deu erro por causa disso aqui." (reject)

/*.//o then e catch
then() (Então): É executado apenas se a Promise der certo (quando o 
código chama o resolve). Ele recebe o valor que foi entregue.

.catch() (Pegar/Capturar): É executado apenas se a Promise der errado 
(quando o código chama o reject ou se acontece algum erro no meio do caminho). 
Ele pega o erro para ele não quebrar a aplicação silenciosamente.
*/


//settimetout é pra delay definido por milissegundo.




//vc pode fazer um new promise(resolve, reject ou outra condicao)
//ele pode ser resolvida ou rejeitada, mas o js n vai definir ate acabar


//new tem nomes especificos, apenas construtuores
//promise, date, Array, Object, Error.

const promessa = new Promise((resolve, reject) => { setTimeout(() => {
  console.log('testando o promisse...')
  const funciona = true //precisa disso pros IFs

  if (funciona) {
    resolve(console.log('deu bom'))
  }
  else { reject(new Error(('deu ruim'))) }
}, 3000)})

//normalmente vc usa o then caso a promessa tenha dado certo

promessa.then((resolucao) => {
  console.log(resolucao)
}) //ele só apita caso de certo

//caso de errado é catch

//e pode ussar arrow function nos dois


//vc tmb pode usar .then sem nada atras desde q seja numa variavel
//tipo é comum usar o promessa.then coomo valor de variavel

//ai pode-se usar varios then pra gerar uma cadeia segura de informacao

const retorno = promessa
.then(resolucao => {
  console.log(resolucao)})
.then((resolucao => {console.log('ei meu chapa', resolucao)}))
.then(resolucao => {console.log('quero amar e ser amador')})
.then(resolucao => {
  console.log('top', resolucao)
  console.log('limpando LOG do CONSOLE...')
  return new Promise((resolve) => {setTimeout(resolve, 5000)})})
.finally(() => {
  console.clear()})

//tmb tem o FINALLY() ele roda sempre no final
//idependete se é catch uo then
//normalmente ele serve pra limpeza





//