const leia = require('readline-sync');

const salario = leia.questionFloat("Qual seu salário?\n");

const adicionalNoturno = leia.questionFloat("Qual seu adicional noturno?\n");

const horasExtras = leia.questionFloat("Qual o valor de suas horas extras?\n");

const descontos = leia.questionFloat("Qual o desconto?\n");

let salarioLiquido = salario + adicionalNoturno + (horasExtras * 5) - descontos;

console.log("\nSeu salário líquido é: ", salarioLiquido.toFixed(2));