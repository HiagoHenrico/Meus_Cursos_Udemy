//Objetos vs Funções

//Criando objeto através de uma Função Fabrica - em inglês: factory function
/*
const pessoal = (nome, sobrenome) => {
    return {
        andar: () => console.log(`${nome} ${sobrenome} está andando...`)

    }
}

const p1 = pessoal('Felicity', 'Karma');
console.log(p1);
console.log(typeof(p1));

p1.andar();
*/


//Criando objeto através de uma função construtora
function Pessoal2(nome, sobrenome){
    this.nome = nome
    this.sobrenome = sobrenome;

    this.andar = function(){
        console.log(`${this.nome} ${this.sobrenome} está andando...`);
    }

}

const p2 = new Pessoal2('Felino', 'Makarone');
console.log(p2);
//console.log(typeof(p2));

//p2.andar();

//Criando atraves de uma classe
class Pessoal3{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    andar(){
        console.log(`${this.nome} ${this.sobrenome} está andando...`);
        
    }

}

const p3 = new Pessoal3('Manuel', 'Piau');
console.log(p3);
console.log(typeof(p3));
p3.andar();