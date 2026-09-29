/* 10. Escreva um programa completo para análise de uma turma contendo
três funções:

a) verificarAprovacao(nota): recebe a nota e retorna true caso ela seja
maior ou igual a 60, e false caso seja menor.

b) contarAprovados(listaAlunos): recebe um array contendo objetos com
nome e nota. A função deve percorrer os alunos, utilizar a função
verificarAprovacao() e retornar a quantidade de aprovados.

c) executarAnalise(): função principal que solicita pelo prompt os dados
de 4 alunos, armazena as informações em um array de objetos, chama a
função contarAprovados() e apresenta o resultado no console.

Entrada: Array contendo os objetos com o nome e a nota de cada aluno.
Processamento: O programa verifica individualmente a nota de cada aluno,
comparando-a com o valor mínimo de 60. Quando a nota atende ao requisito,
o aluno é considerado aprovado e sua quantidade é contabilizada.
Saída: Total de alunos aprovados.

Dificuldade: Achei mais dificil que a 9, por ser mais complexa e ter array, objetos e true

*/
function executarAnalise() {
    const alunos=[];
    for (let i =0; i< 4; i++){
        alunos.push({
            nome: prompt(`Informe o nome do ${i+1}º aluno:`),
            nota: Number(prompt(`Informe a nota do ${i + 1}º aluno:`))
        });
    }
    const resultado = contarAprovados(alunos);
    console.log(`Total de alunos aprovados:${resultado}`);
}
function contarAprovados(listaAlunos){
    let total = 0;

    for (const aluno of listaAlunos){
        const aprovado = verificarAprovacao(aluno.nota);
        if(aprovado) {
            total++;
        }
    }
    return total;
}
function verificarAprovacao(nota) {
    return nota>=60;
}
executarAnalise();