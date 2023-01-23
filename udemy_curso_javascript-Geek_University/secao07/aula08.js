/*
Herança 

Herança - É uma classe herdada de outra classe que a extende

Exemplo:

funcionarios
    nome,
    sobrenome,
    email,
    cpf,
    função,
    registro

clientes
    nome,
    sobrenome,
    email,
    cpf,
    renda

funções
   descrição,
   salário

*/

class Funcao{
    constructor(descricao, salario){
        this._descricao = descricao;
        this._salario = salario;

    }
    
    get descricao(){
        return this._descricao;
    }

    set descricao(descricao){
        this._descricao = descricao;
    }

    get salario(){
        return this._salario;
    }

    set salario(salario){
        this._salario = salario;
    }

}

class Pessoa{
    constructor(nome, sobrenome, email, cpf){
        this._nome = nome;
        this._sobrenome = sobrenome;
        this._email = email;
        this._cpf = cpf;
    }

    get nome(){
        return this._nome;
    }

    set nome(nome){
        this._nome = nome;
    }

    get sobrenome(){
        return this._sobrenome;
    }

    set sobrenome(sobrenome){
        this._sobrenome = sobrenome;
    }

    get email(){
        return this._email;
    }

    set email(email){
        this._email = email;
    }

    get cpf(){
        return this._cpf;
    }

    set cpf(cpf){
        this._cpf = cpf;
    }

    // Metodos extras

    get nome_completo(){
        return this._nome + ' ' + this._sobrenome;
    }

    set nome_completo(nome_completo){
        // Transforma a string em um array onde cada elemento do array será as partes da string separadas por um espaço
        nome_completo = nome_completo.split(' ');

        // Remove e retorna o elemento da posição 0 do array
        this._nome = nome_completo.shift();

        // Junta os elementos do array em uma string separando cada elemento por espaço
        this._sobrenome = nome_completo.join(' ');

    }

    imprimir_dados(){
        console.log(` ${this.nome} ${this.sobrenome}`);
    }

}

class Funcionario extends Pessoa{
    constructor(nome, sobrenome, email, cpf, funcao, registro){
        super(nome, sobrenome, email, cpf);
        this._funcao = funcao;
        this._registro = registro;
    }

    get funcao(){
        return this._funcao;
    }

    set funcao(funcao){
        this._funcao = funcao;
    }

    get registro(){
        return this._registro;
    }

    set registro(registro){
        this._registro = registro;
    }

}

class Cliente extends Pessoa{
    constructor(nome, sobrenome, email, cpf, renda){
        super(nome, sobrenome, email, cpf);
        this._renda = renda;
    }

    get renda(){
        return this._renda;
    }

    set renda(renda){
        this._renda = renda;
    }
}

const c1 = new Cliente('Felicity','Jones','felicity@gmail.com','123.456.789.00',6789.44);
const c2 = new Cliente('Angelo','Karya','angelo@gmail.com','678.475.890.22',2344.34);

console.log(c1);
console.log(c2);

console.log(c1.nome_completo);
console.log(c2.nome_completo);

//Alterando nome_completo
c1.nome_completo = 'Karl Max';
console.log(c1);
console.log(c1.nome_completo);

//Verificando o get
//c2.imprimir_dados();

//Adicionando Funções a Classe

const programador = new Funcao('Programador', 4889.66);
const suporte = new Funcao('Suporte', 2999.55);

//console.log(programador);
//console.log(suporte);

const f1 = new Funcionario('Pedro', 'Silva', 'pedro@gmail.com','898.345.333.11', programador, 'F89er3');
const f2 = new Funcionario('Pascal','Marino', 'marino@gmail.com','333.567.433.12', suporte, 'Fidu88');

console.log(f1);
console.log(f2);

console.log(f1.funcao.salario);

f1.imprimir_dados();