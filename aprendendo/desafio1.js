module.exports = function getFlag(){
    const nome = process.argv[2];
    const sobrenome = process.argv[3];

console.log(`Seu nome é ${nome} ${sobrenome}`);
}