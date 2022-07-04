//cancela um timeOut 

const timeOut = 3000 //3 seg

const fim = () => {
    console.log("acabou");
}

let timer = setTimeout(fim, timeOut);
console.log("guardou e limpou em seguida");
clearTimeout(timer);