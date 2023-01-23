//Funções anônimas(Lambdas)

let num = [1, 2, 3, 4, 5, 6];

function dobrar(valor){
    return valor *2;
}
let r = num.map(dobrar);

console.log(num);
console.log(r);

//Funções Anônimas - Lambdas 
let r2 = num.map(function(valor){
    return valor * 2;
});
console.log(r2);

console.log(dobrar(9));

const outra = function(valor){
    return valor *  2;
}
console.log(outra(9));

//Exemplo:
function somar(v1, v2){
    return v1 + v2;
}
let = exibir = function(n1,n2, cal = somar){
    console.log(cal(n1,n2));
}

exibir(2,3);

exibir(6, 3, somar);

exibir(3, 4, function(n1,n2){
    return n1 + n2;
});

exibir(3, 7, (v1, v2) => v1 * v2);