//Funções Construtoras

//criando uma função construtora

function Pessoa(n, s, raca = 'Humano'){
    //atributos privados só conseguimos fazer uso dentro da função construtora
    let altura = 0.30;
    let peso = 0.5;
    let idade = 0;
    let nome = n;
    let sexo = s;

    //atributo público pode ser acessado fora da função construtora
    this.raca = raca;

    //método privado só conseguimos fazer uso dentro da função construtora
    let imprimir_dados = function(){
        console.log(`Nome: ${nome}, Idade: ${idade} ,Peso: ${peso}, Altura: ${altura}, Sexo: ${sexo}, Raça: ${raca}`);
    }

    //método público conseguimos acessar fora da função construtora
    this.fazer_aniversario = function(){
        idade += 1;
        imprimir_dados();
    }

    //método publico
    this.getIdade = function(){
        return idade;
    }

}

//Instanciando um Objeto
const angelica = new Pessoa("Angelica", "Feminino");

console.log(angelica);

//console.log(angelica.peso); PRIVADO
console.log(angelica.raca); //Publico

angelica.fazer_aniversario(); //Publico

//Instanciar um Novo Objeto
const arthur = new Pessoa("Arthur", "Masculino");

arthur.fazer_aniversario();
arthur.fazer_aniversario();
console.log(arthur.getIdade);

console.log(typeof(Pessoa)); //Function
console.log(typeof(arthur)); //Objeto