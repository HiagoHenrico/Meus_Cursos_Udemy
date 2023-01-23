//Tratamento de erros com try catch

//Tratamos erros com try/catch

try{
    console.log(nome);
}catch(e){
    console.log('Não foi possivel exibir nome.');
    console.log(e.name);
    console.log(e.message);
}
console.log('Oi..');


//Exemplo:
//Lançando erros
function dividir(num1, num2){
    if(num1 === 0 || num2 === 0){
        throw("Os valores devem ser positivos."); //lançando uma exceção (erro)
    }else{
        return num1 / num2;
    }

}
try{
   let r = dividir(8,2);
   console.log(r);
}catch(e){
    console.log('Não foi possivel dividir');
}finally{
    console.log('Continue...');
}


