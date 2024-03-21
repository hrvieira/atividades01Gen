const leia = require('readline-sync');

let num1, num2, num3, num4;

// num1 = 5.0;
// num2 = 6.0;
// num3 = 7.0;
// num4 = 8.0;

// num1 = 5.0;
// num2 = 6.0;
// num3 = -7.0;
// num4 = 8.0;

num1 = leia.questionFloat("Qual o primeiro valor?\n");
num2 = leia.questionFloat("Qual o segundo valor?\n");
num3 = leia.questionFloat("Qual o teceiro valor?\n");
num4 = leia.questionFloat("Qual o quarto valor?\n");

let diferenca = (num1 * num2) - (num3 * num4);

console.log(`A diferença é: ${diferenca.toFixed(1)}`)
