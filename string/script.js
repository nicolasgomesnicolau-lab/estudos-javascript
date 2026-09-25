// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
{
descricao: 'Taxa do Pão',
valor: 'R$ 39',
  },
  {
descricao: 'Taxa do Mercado',
valor: 'R$ 129',
  },
  {
descricao: 'Recebimento de Cliente',
valor: 'R$ 99',
  },
  {
descricao: 'Taxa do Banco',
valor: 'R$ 129',
  },
  {
descricao: 'Recebimento de Cliente',
valor: 'R$ 49'
  }
]
let taxa = 25

transacoes.forEach((item) => {
  numeroLimpo = item.valor.slice(3)
  if (item.descricao.includes('Taxa')) {
    valores = item.valor
    valor_taxa = valores + taxa
    console.log(`valor original: ${numeroLimpo} valor com taxas: ${valores}`)
  }
  else {console.log(`valor total ${numeroLimpo} esse numero n tem taxa`)}
})

// Retorne uma array com a lista abaixo
const transportes = 'Carro; Avião; Trem; Ônibus; Bicicleta';
let algo1 = Array.from(transportes)
console.log(transacoes)

// Substitua todos os span's por a's
const html = `<ul>
              <li><span>Sobre</span></li>
              <li><span>Produtos</span></li>
              <li><span>Contato</span></li>
            </ul>`

let algo3 = html.replace(/['span']+/g, 'a')
console.log(algo3)

// Retorne o último caracter da frase
const frase = 'Melhor do ano!';
fraseUltimoCaractere = frase.slice(-1)
console.log(fraseUltimoCaractere)

// Retorne o total de taxas

const transacoes2 = ['Taxa do Banco', 'Taxa do pão',
  'Taxa do mercado', 'depósito Bancário', 'TARIFA especial'];

let totalTaxa = 0

transacoes2.forEach((item) => {
  let top = item.padStart(20, '.')
  console.log(top)
  if (item.includes('Taxa')) {
    totalTaxa += 1
  }
})
console.log(`o total de taxas dessa array é ${totalTaxa}`)
 //split('algo).join(algo) é forte, melhor q re