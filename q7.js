/*
7. Crie duas funções para processar o valor de uma venda:
a) aplicarDesconto(valor, percentual): recebe o valor e a porcentagem de
desconto, retornando o valor com o desconto aplicado.
b) processarVenda(valorBruto): recebe o valor bruto. Se for maior que 100,
chama internamente a função aplicarDesconto (com 10% de desconto) e
retorna o valor ajustado. Caso contrário, retorna o valor bruto sem
alterações.

Entrada: Valor da venda e percentual de desconto.
Processamento: A primeira função calcula o desconto e a segunda verifica se o valor da venda é maior que 100.
Saída: Valor final da venda com desconto, se aplicável.
Achei Dificil, por ter duas funções e uma verificação de condição.
*/
function aplicarDesconto(valor,percentual){
    let desconto=valor*(percentual/100)
    return valor-desconto
}
function processarVenda(valorBruto){
    if(valorBruto>100){
        return aplicarDesconto(valorBruto,10)
    }
    return valorBruto
}
const valor=Number(prompt("Digite o valor da venda:"))
let resultado=processarVenda(valor)

alert(`Valor final: R$ ${resultado.toFixed(2)}`)