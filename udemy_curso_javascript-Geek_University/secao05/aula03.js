//Trabalhando com FOREACH

var cursos = [

    'Programação para Leigos',
    'Algoritimos e lógica de Programação',
    'Programação em C#',
    'Programação em Java',
    'Programação em Python',
    'Banco de dados',
    'Programação Web com Django Framework',
    'Programação em JavaScript'

];

console.log(cursos);
console.log(cursos.length);

//Definindo uma Função
function imprimir(curso, indice, array){
    console.log(indice + ' - ' + curso);
    console.log(array);
}

//para cada
cursos.forEach(imprimir);

//Ultilização de uma função anõnima (lambda/callback) e template string
cursos.forEach(function(curso, indice){
    console.log(`${indice} - ${curso}`);
});

//Também pode ser feito com:
for(var i = 0; i < cursos.length; i++){
    console.log(i + ' - ' + cursos[i]);
}