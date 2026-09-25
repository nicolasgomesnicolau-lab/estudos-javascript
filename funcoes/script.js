//crie uma funcao pra verificiar se o valor é true

function éverdadeiro(valor) {
  const verdade = true
  if (valor) {
    console.log('é verdadeiro');
    return true;
  }
  else {
    console.log('é falso')
    return false
  }
}

const verdadeiro = éverdadeiro('paia')

console.log(verdadeiro)

//crie uma funcao matematica que retorne o perimetro de um quadrado
//soma dos quatro lados de um quadrado

function perimetro(lado) {
  if(lado) {
    const peri = lado + lado + lado + lado
    console.log(`o perimetro de ${lado} é ${peri}`)
    return peri
  }
  else {
    console.log('o valor digitado n é verdadeiro')
    return false
  }
}

const perim = perimetro(100)

console.log(perim)

//crie uma função q retorne o nome completo, com os parametros nome e sobrenome

function nomecompleto(nome, sobrenome) {
  if (nome, sobrenome) {
    return `${nome} ${sobrenome}`
  }
}

const nomeusuario = nomecompleto('nicolas', 'nicolau')

console.log(nomeusuario)

//crie uma função que verifique se o numero é par

function épar(numero) {
  if (numero % 2 === 0) {
    return true, 'é par'
  }
  else {
    return false, 'é impar'
  }
}

const éparouimpar = épar(10)

console.log(éparouimpar)

//crie uma função que retorne o tipo de dado do argumento (typeof)

function qualargumento(tipo) {
  if (tipo) {
    return typeof tipo
  }
}

const arg = qualargumento(' ');

console.log(arg);

//addEventlistener. aparecer o nome completo com o evento scroll ocorrer
//pra aparecer com scroll precisa de tela pra isso, ent melhor fazer com click



addEventListener('click', function() {
  console.log('nicolas gomes nicolau')
});

//corrija a função abaixo
//e tentar chamar uma variavel de uma função
//obs: variaveis de funcoes diferentes podem ter o msm nome a n ser q seja fora de uma funcao
//e os paramtros podem sim ter o msm nome de outras

function precisovisitar(paisesvisitados) {
  const totalpaises = 193;
  return `ainda faltar ${totalpaises - paisesvisitados} paises pra visitar`;
}
  function javisitei(paisesvisitados) {
    totalpaises = 193
    return `ja visitei ${paisesvisitados} do total de ${totalpaises} paises`;
  }

precisovisitar(20)
javisitei(20)
