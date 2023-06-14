/*
Elabore um programa que receba a idade e a altura de várias pessoas, calcule e mostre a média das alturas daquelas com mais de 50 anos. 
Para encerrar a entrada de dados, digite idade menor ou igual a zero.
*/

const readlineSync = require('readline-sync');

let somaAlturas = 0;
let contadorPessoas = 0;

let idade = 1
  while (true) {
    idade = readlineSync.questionFloat("Digite a idade (ou um valor menor ou igual a zero para encerrar):")
    if(idade <=0){
        console.log(`Encerrando....`)
        break
    }
    let altura = readlineSync.questionFloat("Digite a altura (em metros):");
    if (idade > 50) {
      somaAlturas += altura 
      contadorPessoas++;
    }
    
    
  }
  if (contadorPessoas > 0) {
    let mediaAlturas = somaAlturas / contadorPessoas;
    console.log(`A média das alturas das pessoas com mais de 50 anos é: ${mediaAlturas.toFixed(2)} metros.`);
    }


    // node 10.js - comando para executar o código