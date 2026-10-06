/*3. Crie uma função que apresente um menu ao usuário com as seguintes opções:
a. Converter de real para euro
b. Converter de euro para real
c. Converter de real para dólar
d. Converter de dólar para real
e. Fechar o programa.
O programa deve apresentar esse menu em loop atá o usuário selecionar fechar
programa. Caso ele escolha outras opções, o usuário deve entrar com os dados
e o resultado deve ser mostrado na tela. Após mostrar o resultado da conversão
pedida, o programa volta para o menu.

entrada: O que o usuário deseja fazer
processamento: conversão e repetição
saída: o resultado da conversão

achei dificil pq: tive que usar while e  prestar atenção nas taxas das cotações na hora de multiplicar ou dividir e para manter o loop do menu rodando sem travar o navegador
*/

function menuConversor(){
let op=""

while(op!=="e"&&op!=="E"){
op = prompt(
"ESCOLHA UMA OPÇÃO:\n"+
"a. Real -> Euro\n"+
"b. Euro -> Real\n"+
"c. Real -> Dólar\n"+
"d. Dólar -> Real\n"+
"e. Fechar programa"
)

if(!op) break

let val=0
switch(op.toLowerCase()){
case "a":
val = Number(prompt("Valor em R$:"))
if(!isNaN(val)) alert("EUR: "+(val / 5.88).toFixed(2))
break
case "b":
val = Number(prompt("Valor em EUR:"))
if(!isNaN(val)) alert("BRL: R$ "+(val * 5.88).toFixed(2))
break
case "c":
val = Number(prompt("Valor em R$:"))
if(!isNaN(val)) alert("USD: "+(val / 5.23).toFixed(2))
break

case "d":
val = Number(prompt("Valor em USD:"))
if(!isNaN(val)) alert("BRL: R$ "+(val * 5.23).toFixed(2))
break

case "e":
alert("Saindo do sistema...")
break

default:
alert("Opção inválida! Escolha de A até E.")
}
}
}

menuConversor()