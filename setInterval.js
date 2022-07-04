//setInterval irá rodar uma função N vezes
//depois de X milissegundos

const timeOut = 1000;

const verifica = () => {
    console.log("checando...")
}

let intervalo = setInterval(verifica, timeOut);

setTimeout( ()=> clearInterval(intervalo), 6000)