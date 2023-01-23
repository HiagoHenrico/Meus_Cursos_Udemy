// Conjuntos com Set

/*
  - Conjuntos não aceitam repetição de valores;
  - Conjuntos não são indexados;

*/

// Declarando um conjunto
let cursos = new Set();

// Adicionando valores
cursos.add('Programação para Leigos');
cursos.add('Algoritimos e lógica de Programação');

// Adicionar valores concatenados
cursos.add('Programação em C#').add('Programação em Java').add('Programação em Python');

cursos.add('Banco de Dados');
cursos.add('Programação Web com Django Framework');

//console.log(cursos);

// Acessando o tamanho do conjunto
//console.log(cursos.size);

// Verificando se o valor está presente no conjunto
//console.log(cursos.has('Banco de Dados'));

// Deletar elementos de um conjunto
//let ret = cursos.delete('Programação para Leigos');
//console.log(ret);

// Exemplo 

let frutas = ['Maça',' Banana', 'Uva', 'Laranja'];
let frutas_unicas = new Set(frutas);
console.log(frutas_unicas);