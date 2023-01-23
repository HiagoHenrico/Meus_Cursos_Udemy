function gritar() {
    alert("AHHHHHHHHHHHHHHHHHHHHHHHHH!");
}

function perguntar() {
    var nome;
    nome = prompt("Qual é o seu nome?");
    alert("Olá " +  nome);
}

function mudar_texto() {
    var h1 = document.getElementsByTagName("h1");
    
    // alert(h1[0].innerText);
    if(h1[0].innerText == "Geek University"){
        h1[0].innerText = "Evolua seu lado geek!";
    }else{
        h1[0].innerText = "Geek University";
    }

   // h1[0].innerText = "Evolua seu lado geek!";

}

function incrementar() {
    var pl = document.getElementById("pl");

    pl.innerText = parseInt(pl.innerText) + 1;
}