/*9. Crie duas funções para avaliar o desempenho de um aluno:
a) calcularMediaArray(notas): recebe um array de números (notas) e retorna
a média aritmética simples dessas notas.
b) avaliarAluno(aluno): recebe um objeto aluno contendo as propriedades
nome e notas (onde notas é um array com 3 notas). A função deve chamar
internamente a função calcularMediaArray. Se a média for ≥ 60, retorna
"Aprovado", caso contrário, retorna "Reprovado".
Entrada: Nome do aluno e suas notas
Processamento:Soma as notas, calcula a média e verifica se ela é maior ou igual a 60.
Saída: A média das notas e a situação do aluno, "Aprovado" ou "Reprovado".
Achei difícil, achei complicado trabalhar com duas funções, porque uma função precisa chamar a outra. tambem tive um pouco de dificuldade para entender como passar as notas para a função.
*/
function calcularMediaArray(notas){
    let soma =0;
    for (let i =0; i <notas.length; i++) {
        soma +=notas[i];
    }
    let media= soma/notas.length;
return media
}
function avaliarAluno(aluno){
    const media = calcularMediaArray(aluno.notas)
    if(media >= 60){
        return "Aprovado"
    }else{
        return "Reprovado"
    }
}
let aluno ={
    nome: prompt("Digite o nome do aluno:"),
    notas: [
        Number(prompt("Digite a primeira nota:")),
        Number(prompt("Digite a segunda nota:")),
        Number(prompt("Digite a terceira nota:"))
    ]
}
const resposta =avaliarAluno(aluno)
alert(resposta)
