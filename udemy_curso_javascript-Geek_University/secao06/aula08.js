//Funções Closures
/*
let variavel = 'Global'; //Pode ser acessada em qualquer parte do projeto

function imprimir(){
    console.log(variavel);
}

function outra(){
    let xuxu = 'local'; //Pode ser acessada localmente no bloco/contexto

    imprimir();
    console.log(xuxu); //Local
}

outra(); //Global
*/

// Novo exemplo:
let variavel = 'global';

function externa(){

    let variavel = 'local';

    function interna(){
        return variavel; //??
    }
    return interna;
}

let executa = externa();

console.log(executa()); //local 

/*

Estamos estudando CLOSURES (contexto léxico de uma função)

Não a linguagem de programação chamada Clojure
*/