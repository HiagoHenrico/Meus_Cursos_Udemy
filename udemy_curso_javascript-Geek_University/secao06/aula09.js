/*

Função Fabrica - Function Factory

*/

function fabricarc(n, p){
    const desconto = 0.90;
    return {
        nome: n,
        preco: (p * desconto).toFixed(2)
    }
}

console.log(fabricarc('Programação em C#', 27.99));
console.log(fabricarc('Banco de Dados', 34.99));

let cursos = []

for(let i = 0; i < 5; i++){
    cursos.push(fabricarc(`Curso ${i + 1}`, `${20.67 + i * 3}`));
}

console.log(cursos);