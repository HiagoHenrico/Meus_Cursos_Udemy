function Alerta(){

    alert('O botão foi clicado!');
}

function AlterarT(elemento){
    elemento.innerHTML = 'Eu estou-lhe avisando!';
}

function MudarCor(){
    // #000000 (preto), #FFFFFF (branco)
    let cores = ['green', 'red', 'purple', 'orange', 'blue', 'black', 'yellow'];

    const num = Math.floor((MAth.random() * cores.lenght) +1);
    document.backgroundColor = cores[num];
    //document.body.style.background = cores[num];

}

function escrever(input){
    let span = document.getElementById('texto');

    span.innerHTML = input.value;
}