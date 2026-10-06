/*1. Crie uma função chamada calcularJurosSimples que receba três parâmetros:
capital, taxa (em porcentagem) e tempo (em meses). A função deve calcular e
retornar o valor dos juros:

entrada: capital, taxa e tempo
processamento: calcular o juros
saida: o resultado do juros
achei medio: pq tive que prestar atenção na hora de converter a porcentagem dividindo por 100 dentro da função e garantir que o cálculo do montante ficasse correto
*/



function calcularJurosSimples(cap,tax,m){
    
let taxaDecimal=tax/100
return cap*taxaDecimal*m
}


let cap= Number(prompt("Informe o valor do capital:"))
let tax =Number(prompt("Informe a taxa de juros (%):"))
let m= Number(prompt("Informe o tempo em meses:"))

if(!isNaN(cap)&&!isNaN(tax)&&!isNaN(m)){
let res = calcularJurosSimples(cap, tax, m)
let total= cap + res
alert("Resultado dos juros: R$ "+res.toFixed(2)+"\nMontante total: R$ "+total.toFixed(2))
}else{
alert("Digite valores válidos!")
}