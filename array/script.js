//crie um array com os anos q o brasil ganhou a copa
//58 62 70 94 etc

let BrasilCopas = [1958, 1962, 1970, 1994, 2002]

//interaja com o array ultilisando um loop, pra mostrar no console
//a seguinte mensagem, o brasil ganhou a copa de ${ano}

BrasilCopas.forEach(function(ano) {
  console.log(`O brasil ganhou a copa de ${ano}`)
})

//interaja com um loop nas fruntas abaixo e para ao chegar em pera

let frutas = ['banana', 'maçã', 'pera', 'Uva', 'melancia']

let i = 0
for (i of frutas) {
  console.log(i);
  if (i === 'pera')
    break
} //n da pra usar break no forEach
//mas tmb dava pra usar o for padrao, e no console sim usar as frutas
//simples né

//coloque a ultima fruta da array acima de uma variavel
//sem remover a mesma do array

let ultimaFruta = frutas[4]

console.log(ultimaFruta)

//pra n ter contar na mao sempre da pra usar o lenght - 1

ultimaFruta = frutas[frutas.length - 1]

console.log(ultimaFruta)