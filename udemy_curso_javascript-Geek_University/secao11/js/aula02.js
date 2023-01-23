// Operadores Rest/Spread (Juntar/Espalhar) ->...

/* 
// Exemplo 01

function total(...precos){
    let total = 0;

    precos.forEach(p => total += p);

    return total;
}
console.log(total(23.44, 22, 3.45, 5.67).toFixed(2));

console.log(total(23, 67));

console.log(total(3, 6, 77));

console.log(total());
*/

/*
// Exemplo 02

frutas1 = ['Manga','Uva', 'Melãncia'];
frutas2 = ['Abacate','Uva-Paça', 'Melão'];

let compras = [...frutas1, ...frutas2];

console.log(compras);
*/


// Exemplo 03

alunos = ['Paulo', 'Fernando', 'Marquinho'];
novo = 'João';

// Forma 1
//alunos.push(novo);

// Forma 2
let = todos = [...alunos, novo];
console.log(todos);