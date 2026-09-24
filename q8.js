/*
8. Crie duas funções para autenticação de acesso:
a) validarSenha(senha): retorna true se a string senha tiver pelo menos 6
caracteres, ou false caso contrário.
b) autenticarUsuario(usuario, senha): chama internamente a função
validarSenha. Se a senha for válida, retorna "Acesso concedido para
[usuario]". Caso contrário, retorna "Senha muito curta para o usuário
[usuario]".
Entrada: Valor da venda e percentual de desconto.
Processamento: A primeira função calcula o desconto e a segunda verifica se o valor da venda é maior que 100.
Saída: Valor final da venda com desconto, se aplicável.
Achei dificil, por ter duas funções e uma verificação de condição.
*/
function validarSenha(senha){
    if(senha.length>=6){
        return true
    }
    return false
}
function autenticarUsuario(usuario,senha){
    if(validarSenha(senha)){
        return `Acesso concedido para ${usuario}`
    }else{
        return `Senha muito curta para o usuário ${usuario}`
    }
}
let usuario=prompt("Digite o usuário:")
let senha=prompt("Digite a senha:")
const resposta=autenticarUsuario(usuario,senha)
alert(resposta)