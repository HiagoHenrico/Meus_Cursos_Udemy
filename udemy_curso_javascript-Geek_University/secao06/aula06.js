//Funções CallBacks

const cursos = [
    'Programação para Leigos',
    'Algoritimos e Lógica de Programação',
    'Programação em C',
    'Programação em Java',
    'Programação em Python',
    'Banco de Dados',
    'Programação em JavaScript',
    'Programação Web com Django Framework'

];
function exibir(cursos, indice){
    console.log(`${indice + 1} - ${cursos}`);
}

cursos.forEach(exibir); //Aqui ocorre o CALLBACK

//Com Lambda
cursos.forEach(function(curso, indice){
    console.log(`${indice + 1} - ${cursos}`);

    
});

//Usando Arrow
cursos.forEach((curso, indice) => console.log(`${indice + 1} - ${curso}`));

//Exemplo
const precos = [23.55, 78, 899.89, 12.34, 5.78, 65];
/*
let menores = []
for(let p in precos){
    if(precos[p] < 50){
        menores.push(precos[p]);

    }
}
*/
/*
for(let i =0; i < precos.length; i++){
    if(precos[i] < 50){
        menores.push(precos[i]);
    }
}
console.log(menores);
*/

//Forma 1:
menores = precos.filter(function(preco){
    return preco < 50;
});
console.log(menores);
//Forma 2:
menores = precos.filter(preco => preco < 50);
console.log(menores);