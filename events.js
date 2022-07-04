const { inherits } = require("util");
const { EventEmitter } = require("events");

function personagem(nome){
    this.nome = nome;
}

inherits(personagem, EventEmitter);

const chapolin = new personagem("chapolin");

chapolin.on("ajuda", () => console.log(`Eu! o ${chapolin.nome} colorado!`))

console.log("peça ajuda ao melhor herói do universo: ");

const pedido = [];

process.stdin.on("data", (data) =>{
    pedido.push(data.toString().trim());
    chapolin.emit("ajuda");
    process.exit();
});



