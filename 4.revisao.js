/*4. Crie uma função chamada exibirResumoProduto que receba um objeto
representando um item do estoque com as propriedades nome, preco e quantidade.
A função deve retornar uma string formatada no padrão:
"Produto: [nome] | Preço: R$ [preco] | Estoque: [quantidade] unidades."

entrada: objeto com nome, preço e quantidade
processamento: formatar a string do item
saída: A srtring formatada

achei fácil pq: só precisei criar o objeto e depois montar a string com as informações dele usando a função que retorna o texto formatado
*/

function receberProduto(){
let produto ={
nome: prompt("Digite o nome do produto:"),
preco: Number(prompt("Digite o preço do produto:")),
quantidade: Number(prompt("Digite a quantidade do produto:"))
}
return produto
}

function exibirResumoProduto(produto){
let texto =`Produto: ${produto.nome} | Preço: R$ ${produto.preco.toFixed(2)} | Estoque: ${produto.quantidade} unidades.`
return texto
}

let produto= receberProduto()

if(produto.nome && !isNaN(produto.preco) && !isNaN(produto.quantidade)){
let resultado =exibirResumoProduto(produto)
alert(resultado)
}else{
alert("Preencha os dados corretamente!")
}