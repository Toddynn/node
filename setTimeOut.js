//rodar uma função depois de X milissegundos

const timeOut = 3000 //3 seg

const fim = () => {
    console.log("acabou");
}

setTimeout(fim, timeOut);