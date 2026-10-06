/*
6. Crie duas funções para gerenciar a fila de reprodução de um usuário:
• a) converterParaSegundos(minutos, segundos): Recebe os minutos e
segundos de uma faixa e retorna a duração total convertida apenas para
segundos (totalSegundos = (minutos × 60) + segundos).
• b) calcularTempoPlaylist(playlist): Recebe um array de objetos (onde cada
objeto é uma música com as propriedades {titulo, minutos, segundos}).
A função deve percorrer a lista de músicas, chamar internamente a função
converterParaSegundos para cada faixa e retornar a duração total de toda a
playlist em segundos.

entrada: array de objetos com nome, minutos e segundos de várias músicas
processamento: calcular o tempo de cada música em segundos, e depois, o tempo total da plylist em segundos
saída: tempo total da playlist em segundos

achei difícil: porque tive que prestar atenção para passar os dois parâmetros, minutos e segundos, na função de conversão e depois acumular tudo no loop
*/

function converterParaSegundos(minutos,segundos){
return (minutos*60)+segundos
}

function calcularTempoPlaylist(playlist){
let duracaoTotal=0
for(let m=0;m<playlist.length;m++){
let faixa=playlist[m]
duracaoTotal += converterParaSegundos(faixa.minutos,faixa.segundos)
}
return duracaoTotal
}

let faixasPlaylist=[]
let qtdFaixas=Number(prompt("Quantas músicas deseja adicionar?"))

if(!isNaN(qtdFaixas)&&qtdFaixas>0){
for(let k=0;k<qtdFaixas;k++){
let nomeMusica=prompt("Título da música "+(k+1)+":")
let min=Number(prompt("Minutos da música "+(k+1)+":"))
let seg=Number(prompt("Segundos da música "+(k+1)+":"))


if(!isNaN(min)&&!isNaN(seg)){
faixasPlaylist.push({
titulo: nomeMusica,
minutos: min,
segundos: seg
})
}
}

let totalSegs=calcularTempoPlaylist(faixasPlaylist)
alert("Duração total da playlist: "+totalSegs+" segundos")
}else{
alert("Quantidade inválida informada!")
}