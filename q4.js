/*
4. Crie uma função chamada calcularIMC que receba o peso (kg) e a altura (m). A
função deve calcular o IMC e retornar uma string com a classificação:
• IMC < 18.5: "Abaixo do peso"
• IMC entre 18.5 e 24.9: "Peso normal"
• IMC ≥ 25.0: "Sobrepeso"

Achei Medio por ter uma multiplicação, uma divisão e uma verificação de condições.
Entrada: Peso e altura 
Processamento: Calcular o IMC e verificar a classificação
Saída: Classificação do IMC
*/
function calcularIMC(peso, altura) {
    let imc = peso / (altura * altura);

    if (imc<18.5){
    return "Abaixo do peso";
    } else if (imc <25) {
    return "Peso normal";
    } else {
    return "Sobrepeso";
    }
}
let peso = Number(prompt("Digite seu peso em kg:"));
let altura = Number(prompt("Digite sua altura em metros:"));
let resultado = calcularIMC(peso, altura);
alert("Classificação: " + resultado);