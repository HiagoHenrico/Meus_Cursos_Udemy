/* Buscando um elemento expecifico por um ID

let itexto = document.getElementById('produto');

console.log(itexto);
*/

// Buscando todos os elementos com a tag span

let spans = document.getElementsByTagName('span');
//console.log(spans);


/* Ler valores  
console.log(spans[0].TextContent);
console.log(spans[1].innerHTML);
*/

// Alterar valores
// spans[0].textContent = 'JavaScript';
// spans[1].innerHTML = 'É legal';

//let span = document.getElementsByTagName('span')[0];

//console.log(span.innerHTML);

//span.style.textTransform = 'uppercase';

//let inp = document.querySelector('input'); // busca o primeiro elemento pela tag

//let eles = document.querySelectorAll('.texto'); //busca pela classe e devolve a primeira que ele encontrar

//let div3 = document.querySelector('#div3'); // busca elemento pelo ID

//let imp = document.querySelector('input[name=produto]'); //busca elemento pelo nome

//console.log(imp);

//Exemplo 1
/*
let btn = document.querySelector('button.btn');

btn.onclick = function(){
    alert('Botão pressionado...');
}
*/

// Exemplo 2
let btn = document.querySelector('button.btn');
let inpu = document.querySelector('input[name=produto]');

btn.onclick = function(){
    alert(`Temos o texto: ${inpu.value}`);
}