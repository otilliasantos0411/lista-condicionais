/*
Faça um programa que receba quatro notas de um aluno, calcule e mostre a média aritmética das notas e a mensagem de aprovado ou reprovado, considerando para aprovação média 7.
*/
const readlineSync = require('readline-sync');


let nota1 =  readlineSync.questionFloat("Digite a Nota 01:");
let nota2 = readlineSync.questionFloat("Digite a Nota 04:");
let nota3 =  readlineSync.questionFloat("Digite a Nota 03:");
let nota4 =  readlineSync.questionFloat("Digite a Nota 04:");
let media = (nota1+nota2+nota3+nota4)/4

if(media >= 7){
    console.log("Média aritmética: "+ media + " - Aluno Aprovado!")
}else{
    console.log("Média aritmética: "+ media + " Aluno reprovado")
}

// node 1.js - comando para executar o código