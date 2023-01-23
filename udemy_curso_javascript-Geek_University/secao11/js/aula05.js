// Object Short Sintax

const nome = 'Hiago';
const idade = '17';
const horas = 4;

/* Array comum
const curso = {
    nome : nome,
    idade : idade,
    instrutor : 'Rafael',
    carga_horaria: horas,
};
*/

// Array com Object Short Sintax
// Só e possivel quando o atributo do objeto é a variável tem o mesmo nome
const curso = {
    nome,
    idade,
    instrutor: 'Rafael',
    carga_horaria: horas,
};

console.log(curso);

