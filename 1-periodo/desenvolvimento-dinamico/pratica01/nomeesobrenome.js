let rlSync = require('readline-sync');
let nome = rlSync.question("Qual o seu nome? \n");
let sobrenome = rlSync.question("Qual o seu sobrenome? \n");

console.log(`Olá seu nome é:  ${nome} ${sobrenome}!`);