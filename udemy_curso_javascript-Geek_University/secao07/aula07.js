//Objetos e suas Funções

const curso = {
    nome: 'Programação em JavaScript',
    horas: 32,
    preco: 27.99
}

/*

//Exibindo as Chaves de um Objeto 
console.log(Object.keys(curso));

//Exibindo valores de um Objeto
console.log(Object.values(curso));

//Exibindo tudo em um Objeto
console.log(Object.entries(curso));

*/

/*
Object.entries(curso).forEach(par => {
    console.log(`${par[0]}: ${par[1]}`);
})
*/

/*
Object.entries(curso).forEach(([chave, valor])=> {
    console.log(`${chave}: ${valor}`);
});
*/

//curso.nome = 'Criação de APIs ';
//console.log(curso);

/*
Object.defineProperty(curso, 'publicacao', {
    enumerable: true,
    writable: false,
    value: '07/12/2012'
});

//curso.publicacao = '22/03/2020'; Não é possivel alterar 'publicacao', porque anteriormente foi declarado 'writable: false'!

console.log(curso);

console.log(curso.publicacao);
*/

/*
Object.freeze(curso); //Freeze declara tudo como 'writable: false'

curso.nome = 'Dança das Cadeiras';

console.log(curso);
*/

//Transformando um array em uma tabela com : 'console.table'
const usuarios = [
    {nome: 'Marcos' ,empresa: '1'},
    {nome: 'Maria' ,empresa: '2'},
    {nome: 'Mario' ,empresa: '3'}

]
console.table(usuarios);
