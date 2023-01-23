//Aprendendo a ultilizar MAP

var valores = [2, 4, 6, 8, 10];

var dobro = valores.map(function(valor){
    return valor * 2;
});

console.log(dobro);

//Usando uma FUNÇÃO também e possivel obter o mesmo resultado!
function dobrar(valor){
    return valor * 2;
}

dobro = valores.map(dobrar);

console.log(dobro);

//Encadeando MAPS para realizar múltiplas transformações
function soma_4(valor){
    return + 4;
}
function dividir_por_5(valor){
    return valor / 5;
}

var resultado = valores.map(dobrar).map(soma_4).map(dividir_por_5);
console.log(resultado);

/*

Passo 1 -> dobbrar = [4,8,12,16,20]
Passo 2 -> soma_4 = [8,12,16,20,24]
Passo 3 -> dividir_por_5 = [1.6,2.4,3.2,4,4.8] 

*/