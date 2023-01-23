//Objetos vs JSON

/*
 JSON - JavaScript Object Notation
*/

const curso = {
    nome: 'Programação em C#',
    horas: 27,
    preco(){
        return this.horas * 0.54
    }
}

//console.log(curso); //Objeto JavaScript
//console.log(curso.preco());
//console.log(typeof(curso));


//Convertendo o objeto JavaScript para JSON
const json = JSON.stringify(curso);
console.log(json); //Objeto JSON
console.log(typeof(json));

//Convertendo Objeto JSON para Objeto JavaScript
//const obj = JSON.parse(json);
//console.log(obj);
//console.log(typeof(obj));

//Exemplo de JSON Errado!
/*
const json_errado = "{'nome:' 'Programação em C#', 'preco':45 }";
console.log(json_errado);
console.log(typeof(json_errado));

const novo_obj = JSON.parse(json_errado);
connsole.log(novo_obj);
console.log(typeof(novo_obj));
*/

//CORREÇÃO
const json_corrigido = '{"nome": "Programação em C#", "preco":45 }';
console.log(json_corrigido);
console.log(typeof(json_corrigido));

const novo_obj = JSON.parse(json_corrigido);
console.log(novo_obj);
console.log(typeof(novo_obj));
