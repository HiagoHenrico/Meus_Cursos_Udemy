// Async e Await

const novaPromise = () => new Promise((resolve, reject) => {
    let valor = Math.floor(Math.random() * 18);
    setInterval(() => {
        if(valor % 2 ==0){
            resolve(`O valor ${valor} é par...`);

        }else{
            reject(`O valor ${valor} é impar...`);
        }

    }, 2000);

});

async function exePromise(){
    try{
        const response = await novaPromise();
        console.log(response);

    }catch(erro){
        console.log(erro);

    }
}

exePromise();