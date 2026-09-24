/* 5. Crie uma função chamada somarElementos que receba um array de números como parâmetro, percorra o vetor, some todos os valores e retorne o total.
Entrada: Um array de números.
Processamento: Percorrer o array e somar todos os elementos.
Saída: A soma de todos os elementos do array.
Achei medio, por ter array
*/
function obterValores() {
    const numeros=[];
    const quantidade=Number(
        prompt("Informe a quantidade de valores que deseja inserir:")
    );
    for (let indice = 0; indice <quantidade; indice++) {
        numeros.push(
            Number(prompt(`Informe o ${indice + 1}º valor:`))
        );
    }
    return numeros;
}
function somarElementos(valores){
    let total = 0;
    for (const numero of valores) {
        total += numero;
    }
    return total;
}
function mostrarResultado(total) {
    alert(`A soma dos valores informados é: ${total}`);
}
const valoresInformados = obterValores();
const somaTotal = somarElementos(valoresInformados);
mostrarResultado(somaTotal);