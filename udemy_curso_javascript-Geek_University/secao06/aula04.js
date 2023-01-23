//Entendendo e usando as Arrow Functions

//Forma 1
function somar1(num1, num2){
    return num1 + num2;
}

console.log(4, 6);

//Forma 2
function somar2(num1, num2){
    return num1 + num2;
}

console.log(somar2(4, 6));

//Forma 3
let somar3 = somar1;

console.log(somar3(3, 7));

//Arrow Function
let somar4 = (num1, num2) => {
    return num1 + num2;
}
console.log(somar4(2, 3));


/*
Atenção:

Caso a sua função tenha apenas um parâmetro de entrada e executa apenas uma linha,
você pode simplificar ainda mais usando Arrow Function
*/

let dobrar = valor => valor * 2;
console.log(dobrar(4));

function mensagem(){
    console.log('Boa Noite');
}
mensagem();
//ou
const msg = () => console.log('Boa Noite'); 
msg();