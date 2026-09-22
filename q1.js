
/*
1. Crie uma função chamada calcularAreaRetangulo que receba dois parâmetros:
base e altura. A função deve calcular e retornar o valor da área (área = base ×
altura).

Achei facil por ser apenas uma multiplicação.
Entrada: Base e altura
Processamento: Multiplicar a base pela altura
Saída: Área do retângulo

*/

function calcularAreaRetangulo(base, altura) {
    let area = base * altura;
    return area;
}

let n1 = Number(prompt("Digite a base do retângulo:"));

let n2 = Number(prompt("Digite a altura do retângulo:"));

let resultado = calcularAreaRetangulo(n1, n2);

alert("A área do retângulo é: " + resultado);