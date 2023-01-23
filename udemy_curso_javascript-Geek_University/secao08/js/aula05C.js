/*

function removerBotao(btn){
    // Recuperar o elemento div
    let divElement = document.querySelector('#app');

    // Remove o filho selecionado da div
    divElement.removeChild(btn);
    

    // Simplificando
    document.querySelector('#app').removeChild(btn);
}

*/

let btns = document.querySelectorAll('button');

let divElement = document.querySelector('#app');

for(let i = 0; i < btns.length; i++){

    btns[i].onclick = function(){
        document.querySelector('#app').removeChild(this);
    };

}

