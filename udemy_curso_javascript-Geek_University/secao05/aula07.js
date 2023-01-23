var numero = 42;
console.log(numero);

numero = numero + 18;
console.log(numero);

//Let
let n = 40;
console.log(n);

n = n + 10;
console.log(n);

let nm = 'Hiago';
console.log(nm);

nm = 'Henrico';
console.log(nm);

/*
Var
for (var i = 0; i < 5; i++){
    var valor = i * 3;
    console.log(valor);
}
console.log(valor);
console.log(i);
*/

/*
Let
for (let i = 0; i < 5; i++){
    let valor = i * 3;
    console.log(valor);
}
//console.log(valor); //ReferenceError
//console.log(i); //ReferenceError
*/

/*
let num = 80;
console.log(num);

let num = 40;  SyntaxError - O identificador já foi declarado
console.log(num);
*/

//const
const t = 1.44;
console.log(t);

let res = 45 * t;
console.log(res);

/*
t = 5; // TypeError
console.log(t);
*/

//Constante vs Mutação
const p = {nome: 'Hiago Henrico'};
console.log(p.nome);

/*

Não posso alterar o valor de uma constante
p = 'Barco'; Errado!

Mas podemos realizar mutação em dados contidos na constante
p.nome = "Programação em JavaScript"; - Mutação
console.log(p);

*/

/*
Dicas de como alterar variáveis em JavaScript:

- A variável poderá ser alterada? (vai variar?) se sim, use let
- A variável será constante? (não vai variar?) se sim, use const
*/

const v = 5;
for(let i =0; i<v; i++){
    console.log(v - i);
}