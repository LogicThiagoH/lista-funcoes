/*5. Crie duas funções para cálculo total de um carrinho de compras:
• a) calcularSubtotalItem(item): Recebe um objeto item com as propriedades
preco e quantidade, e retorna o valor total do item (subtotal = preco ×
quantidade).
• b) calcularTotalCarrinho(carrinho): Recebe um array de objetos (itens do
carrinho). A função deve percorrer a lista, chamar internamente a função
calcularSubtotalItem para cada produto e retornar o valor total acumulado da
compra.

entrada: array de objetos contendo preço e quantidade
processamento: calcular o subtotal e o total da compra
saída: Valor total da compra

achei dificil pq: tive que prestar atenção na hora de montar o array de objetos e fazer a função do total chamar a função do subtotal para cada item
*/

function calcularSubtotalItem(item){
return item.preco * item.quantidade
}

function calcularTotalCarrinho(carrinho){
let totalAcumulado=0
for(let i=0;i<carrinho.length;i++){
totalAcumulado += calcularSubtotalItem(carrinho[i])
}
return totalAcumulado
}

let itensCarrinho=[]
let qtdItens=Number(prompt("Quantos produtos vai cadastrar no carrinho?"))

if(!isNaN(qtdItens) && qtdItens>0){
for(let p=0;p<qtdItens;p++){
let pUnit=Number(prompt("Preço do item "+(p+1)+":"))
let qnt=Number(prompt("Quantidade do item "+(p+1)+":"))

if(!isNaN(pUnit)&&!isNaN(qnt)){
itensCarrinho.push({
preco: pUnit,
quantidade: qnt
})
}
}

let valorTotal=calcularTotalCarrinho(itensCarrinho)
alert("Total da compra: R$ "+valorTotal.toFixed(2))
}else{
alert("Quantidade de itens inválida!")
}