/*
2. Escreva uma função chamada ehPar que receba um número como parâmetro e
retorne true se o número for par e false caso seja ímpar.

Achei facil por ser apenas uma verificação de resto da divisão.
Entrada: Número
Processamento: Verificar se o número é divisível por 2
Saída: true ou false
*/

function ehPar(numero) {
    return numero % 2 === 0;
}
let n = Number(prompt("Digite um número:"));
let resultado = ehPar(n);
alert("O número é par? " + resultado);