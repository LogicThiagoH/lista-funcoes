/*
6. Crie uma função chamada formatarPessoa que receba um objeto representando
uma pessoa com as propriedades nome, idade e profissao. A função deve retornar
uma frase formatada no padrão: "Olá, meu nome é [nome], tenho [idade] anos e
trabalho como [profissao]."
Entrada: Um objeto com as informações da pessoa
Processamento: A função deve acessar as propriedades do objeto e formatar uma mensagem
Saída: Uma mensagem formatada com as informações da pessoa
Achei medio, por ter um objeto e uma função
*/
function formatarPessoa(pessoa){
    return `Olá, meu nome é ${pessoa.nome}, tenho ${pessoa.idade} anos e trabalho como ${pessoa.profissao}.`
}

const pessoa={
    nome:prompt("Digite o nome:"),
    idade:Number(prompt("Digite a idade:")),
    profissao:prompt("Digite a profissão:")
}

let resultado=formatarPessoa(pessoa)
alert(resultado)
