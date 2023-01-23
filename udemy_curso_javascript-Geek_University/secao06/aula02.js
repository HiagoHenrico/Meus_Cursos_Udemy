//Funções com parâmetro e retorno

function cal(ano_nascimento){
    const data = new Date(); //gera a data atual

    const idade = data.getFullYear() - ano_nascimento;

    return idade;
}
/*
let d = new Date();
console.log(d.getFullYear());

let r = cal(1990, 'Andre');
console.log(r);

console.log(cal(1990));
*/
function cal2(ano_nascimento){
    const data = new Date();
    const idade = data.getUTCFullYear() - ano_nascimento;

    console.log(idade);
}

let i = cal(1990);
const data = new Date();
console.log('Data Completa: ' + data);
console.log('Ano: ' + data.getFullYear());
console.log('Mês: ' + data.getMonth()); //0 para janeiro, 1 para fevereiro...etc

//Se liga!
function somar(num1 ,num2){
    return num1 + num2;
}
console.log(somar(4, 6)); //10

console.log(somar(4)); //NaN

console.log(somar(4, 6, 8)); //10

console.log(somar(4, 6, 8, 3, 2 ,1, 19)); //10

