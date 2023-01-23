//First Class Citizen - Ou - Cidadões de Primeira Classe

function somar(num1, num2){

    return num1 + num2;
}
let r = somar(4,6);
//console.log(r);

//Exemplo 1:

const exe = somar;
//console.log(exe(10,5));

//Exemplo 2:

function subtrair(num1, num2){
    return num1 - num2;
}

function f(num1, num2, funcao){
    return funcao(num1, num2);
}
/*
console.log(f(5, 5, somar));
console.log(f(2, 1, subtrair));
*/
//Exemplo 3:

function outra(funcao){
    return funcao;
}
const ret = outra(somar);
//console.log(ret(23,12));

/*
Cidadãos de Primeira Classe
First-Class Citizens
Higher-Order Function 

*/

function mensagem(){
    console.log('Bom dia!');
}
//mensagem();
/*
console.log(mensagem());

let ms = mensagem();
console.log(ms);
*/

let vl = [1, 3.4, true, somar];

for(let i = 0; i < vl.lenght; i++){
    console.log(typeof(vl[i]));
}



