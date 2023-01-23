//Aprendendo e usando Destructuring
//destructuing com array
const num = [1, 3, 5, 7];


const [num1, num2, num3, num4] = num;

console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);

//Descartando valores
const[n1, n3, n4] = num;

console.log(n1);
console.log(n3);
console.log(n4);

//Podemos colocar valor default que será usado caso não haja no container
const [nu1, nu2, nu3, nu4 = 34, nu5] = num;

console.log(nu1);
console.log(nu2);
console.log(nu3);
console.log(nu4);
console.log(nu5);

//Destructuring com objeto
const produto = {
    nome: "Batata",
    preco: 12
}
/*
const {nome, preco} = produto;

console.log(nome);
console.log(preco);

console.log(`${nome} custa ${preco}`)
*/

const {nome} = produto;
console.log(nome);
