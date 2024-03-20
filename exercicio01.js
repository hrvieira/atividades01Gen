const leia = require('readline-sync');

const salario = leia.questionFloat("Qual o seu salário?\n");
console.log("\nSeu salário é: ", salario.toFixed(2));

const abono = leia.questionFloat("\nQual o valor do seu abono?\n");
console.log("\nSeu abono é: ", abono.toFixed(2));

let novoSalario = salario + abono;

console.log("\nSeu novo salário é: ", novoSalario.toFixed(2))

