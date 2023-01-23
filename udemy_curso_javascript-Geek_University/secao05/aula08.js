const idade = 19;
const nome = 'Arthur';

function incrementa(idade){
    return idade + 3;
}

console.log(nome + ' tem ' + idade + ' anos ');

// Template Strings
console.log(`${nome} tem ${idade+3} anos.`);
//Ou
console.log(`${nome} tem ${incrementa(idade)} anos.`);
/*
Em template strings usa-se a cráse, e não aspas simples ou acento agudo

*/