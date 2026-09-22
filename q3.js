/*
3. Crie uma função chamada celsiusParaFahrenheit que receba uma temperatura
em Celsius e retorne a conversão para Fahrenheit (F = (C × 1.8) + 32).

Achei facil por ser apenas uma multiplicação e uma soma.
Entrada: Temperatura em Celsius
Processamento: Multiplicar a temperatura por 1.8 e somar 32
Saída: Temperatura em Fahrenheit
*/
function celsiusParaFahrenheit(celsius) {
    let fahrenheit = (celsius * 1.8) + 32;
    return fahrenheit;
}
let temperatura = Number(prompt("Digite a temperatura em Celsius:"));
let resultado = celsiusParaFahrenheit(temperatura);
alert("A temperatura em Fahrenheit é: " + resultado);