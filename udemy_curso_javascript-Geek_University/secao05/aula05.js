//Aprendendo a ultilizar Filter

var numeros = [1, 2, 3, 4, 5, 6 , 7, 8, 9, 10];

function filtrar_pares(n){
    return n % 2 === 0;
}
console.log(filtrar_pares(3)); //false
console.log(filtrar_pares(8)); //true

function filtrar_impares(n){
    return n % 2 !== 0;
}

function filtrar_multiplos_5(n){
    return n % 5 === 0;
}

//Array
console.log(numeros);

//Filtração
var ret = numeros.filter(filtrar_pares);
console.log(ret);

ret = numeros.filter(filtrar_impares);
console.log(ret);

ret = numeros.filter(filtrar_multiplos_5);
console.log(ret);

//Exemplo
var aluno = [
    {nome: 'Pedro', nota: 8.3},
    {nome: 'Alana', nota: 5},
    {nome: 'Alan', nota: 9},
    {nome: 'Malo', nota: 7.5}


];
function filtrar_maior_8(aluno){
    return aluno.nota > 8;
}

function filtrar_maior_7(aluno){
    return aluno.nota > 7;
}

//Maiores que 8
var filtrados = aluno.filter(filtrar_maior_8);
console.log(filtrados);
console.log(filtrados.length)

//Maiores que 7
filtrados = aluno.filter(filtrar_maior_7);
console.log(aluno.length);
console.log(filtrados.length);