/*

O parse e o stringify são os dois métodos fundamentais do objeto 
nativo JSON no JavaScript, usados para fazer a ponte entre dados estruturados (objetos) e texto puro (strings). Como a internet e os arquivos não entendem objetos da linguagem nativamente, tudo precisa virar texto para viajar.

JSON.stringify() (Empacotar): Pega um objeto ou array do 
JavaScript e o "achata", transformando-o em uma string de 
texto puro no formato JSON. É indispensável na hora de enviar 
dados para uma API via POST, pois o corpo (body) da requisição exige 
texto.

JavaScript*/
const usuario = { nome: "Nicolas", idade: 18 };
const textoJson = JSON.stringify(usuario); 
console.log(textoJson);/*
Resultado: '{"nome":"Nicolas","idade":18}' 
(Isso é uma string, não dá para acessar usuario.nome aqui)

//coloca tudo em aspas, pq keys de objetos n tem aspas

JSON.parse() (Desempacotar): Faz o inverso. 
Pega uma string de texto que está formatada como JSON 
(geralmente a resposta que você recebe de uma API externa) e a 
"descompacta", transformando-a de volta em um objeto JavaScript 
real para você conseguir acessar as propriedades usando ponto 
(dado.nome).

JavaScript*/
const textoJson1 = '{"nome":"Nicolas","idade":18}';
const objetoReal = JSON.parse(textoJson1);
console.log(objetoReal.nome); /* 
Resultado: "Nicolas"
faz string virar objeto

objeto é propriedade, metodo, key e value.
*/