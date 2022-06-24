const perguntas = [
    "O que aprendi hoje?",
    "O que me deixou aborrecido?",
    "O que eu poderia fazer para melhorar?",
    "O que me deixou feliz hoje?",
    "Quantas pessoas ajudei hoje?"
]

const ask = (index = 0) =>{
    process.stdout.write(perguntas[index] + "\n");
}

ask();

const respostas = [];
process.stdin.on("data", data =>{
    respostas.push(data.toString().trim());
    if(respostas.length < perguntas.length){
        ask(respostas.length);
    }else{
        console.log("respostas: \n" + respostas);
        process.exit();
    }
});    
