//Fuções com parâmetros variáveis e valor padrão

//Exemplo 1:
function somar1(){
    let soma = 0;
    for(let i = 0; i < arguments.length; i++){
        soma += arguments[i];
    }
    return soma;

}
/*
console.log(somar1()); //0

console.log(somar1(2)); //2

console.log(somar1(2, 5)); //7

console.log(somar1(5, 3, 9)); //17

console.log(somar1(2, 4,  6, 8, 12)); //32
*/

//Exemplo 2:
function exibir_vl(num1, num2){

    for(let i in arguments){
        console.log(arguments[i]);
    }
}
/*
exibir_vl();

exibir_vl(4, 6);

exibir_vl(4, 6, 8);

exibir_vl(3, 6, 8, 12, 44, 56);
*/

//Gambiarra 01:
function somar03(num1 ,num2,num3 ){
    num1 = num1 || 1;
    num2 = num2 || 2;
    num3 = num3 || 3;
    return num1 + num2 + num3;
}

/*
console.log(somar03(4, 5, 6)); //15
console.log(somar03()); //6
console.log(somar03(2)); //7
console.log(somar03(2, 2)); //7
console.log(somar03(2 ,2, 2)); //6
console.log(somar03(2, 2, 2, 2)); //6

console.log(somar03(0, 0, 0)); //ERA PARA SER 0, MAS ELE RETORNA 6!
*/

//Gambiarra 02:
function somar04(num1, num2, num3){
    num1 = isNaN(num1) ? 1 : num1;
    num2 = isNaN(num2) ? 2 : num2;
    num3 = isNaN(num3) ? 3 : num3;

}
/*
console.log(somar04(4, 5, 6)); //15
console.log(somar04()); //6
console.log(somar04(2)); //7
console.log(somar04(2, 2)); //7
console.log(somar04(2 ,2, 2)); //6
console.log(somar04(2, 2, 2, 2)); //6

console.log(somar04(0, 0, 0)); ////ERA PARA SER 0, MAS ELE RETORNA 6!
*/

//Forma atual (RECOMENDADA)
function somar5(num1 = 1, num2 = 2, num3 = 3){
    return num1 + num2 + num3;
}
/*
console.log(somar5(4, 5, 6)); //15
console.log(somar5()); //6
console.log(somar5(2)); //7
console.log(somar5(2, 2)); //7
console.log(somar5(2 ,2, 2)); //6
console.log(somar5(2, 2, 2, 2)); //6

console.log(somar5(0, 0, 0)); ////ERA PARA SER 0, MAS ELE RETORNA 6!

//Exemplo com valor não numérico
console.log(somar5('a', 'b', 'c'));
console.log(somar5(true, false, 'c'));
console.log(somar5(2, true, false));
*/

/*
EM JAVASCRIPT:
1 É CONSIDERADO TRUE!
0 É CONSIDERADO FALSE!
*/

function somar6(num1 = 1, num2 = 2, num3 = 3){
    if(Number.isSafeInteger(num1) && Number.isSafeInteger(num2) && Number.isSafeInteger(num3)){
        return num1 + num2 + num3;
    }else{
        return 'Não foi possivel efetuar a soma.';
    
    }
}

console.log(somar6(4, 5, 6)); //15
console.log(somar6()); //6
console.log(somar6(2)); //7
console.log(somar6(2, 2)); //7
console.log(somar6(2 ,2, 2)); //6
console.log(somar6(2, 2, 2, 2)); //6

console.log(somar6(0, 0, 0)); ////ERA PARA SER 0, MAS ELE RETORNA 6!

//Exemplo com valor não numérico
console.log(somar6('a', 'b', 'c'));
console.log(somar6(true, false, 'c'));
console.log(somar6(2, true, false));
