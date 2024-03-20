const leia = require('readline-sync')

const nota1 = leia.questionFloat("Qual sua primeira nota?\n");
const nota2 = leia.questionFloat("\nQual sua segunda nota?\n");
const nota3 = leia.questionFloat("\nQual sua terceira nota?\n");
const nota4 = leia.questionFloat("\nQual sua quarta nota?\n");

let media = (nota1 + nota2 + nota3 + nota4)/ 4

console.log("Sua média é: ", media.toFixed(1));
