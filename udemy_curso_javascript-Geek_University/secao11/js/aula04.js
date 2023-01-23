// Usando for of

/*
Exemplo 1

let nome = 'Geek University';

for (let letra of nome){
    console.log(letra);
}
*/

/*
Exemplo 2

let numeros = [1, 2, 3, 4, 5];

for(let numero of numeros){
    console.log(numero);
}
*/

/*
Exemplo 3

let numeros = [1, 2, 3, 4, 5];

for(let indice in numeros){
    console.log(`Indice: ${indice}, valor: ${numeros[indice]}`);
}
*/

/*
Exemplo 4

let cursos = new Map([
    [1,'Programação para Leigos'],
    [2,'Programação em C#'],
    [3,'Programação em PHP'],
    [4,'Programação em Java'],
    [5,'Programação em Python'],
    [6,'Lógica de Programação '],
    [7,'Banco de Dados']

]);

for(let curso of cursos){
    console.log(`${curso[0]} - ${curso[1]}`)
}

//cache/valor
for(let curso of cursos){
    console.log(curso);
}

//Somente a chave
for(let chave of cursos.keys()){
    console.log(chave);
}

//Somente o valor
for(let valor of cursos.values()){
    console.log(valor);
}

// Chave e valor
for(let [chave, valor] of cursos.entries()){
    console.log(`${chave} - ${valor}`);
}
*/

/*
Exemplo 5
*/
let conjunto = new Set([1, 2, 3, 4, 5, 5]);

for(let numero of conjunto){
    console.log(numero);
}