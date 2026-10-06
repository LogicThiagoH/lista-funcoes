/*2. Escreva uma função chamada verificarOrcamento que receba dois parâmetros:
valorProduto e saldoDisponivel. A função deve retornar true se o saldo for suficiente
para comprar o produto (saldo maior ou igual ao valor) e false caso contrário.

entrada: valor do produto e saldo disponível
processamento: verificar se há dinheiro suficiente no saldo para comprar o produto
saída: se é possível ou não comprar o produto

achei medio pq: tive que prestar atenção na condição de comparação e em como retornar o valor booleano direto sem precisar criar funções extras para o prompt
*/

function verificarOrcamento(valorProduto,saldoDisponivel){
return saldoDisponivel >= valorProduto
}

let vProd= Number(prompt("Informe o valor do produto:"))
let sDisp =Number(prompt("Informe o saldo disponível:"))


if(!isNaN(vProd)&&!isNaN(sDisp)){
let podeComprar= verificarOrcamento(vProd, sDisp)
if(podeComprar){
alert("Compra liberada! Seu saldo é suficiente.")
}else{
let falta =vProd - sDisp
alert("Saldo insuficiente! Faltam R$ "+falta.toFixed(2))
}


}else{
alert("Preencha valores numéricos válidos!")
}