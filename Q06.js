/*
Faça um programa que receba um número, calcule e mostre a tabuada desse número.
*/

const readlineSync = require('readline-sync');


let numero = readlineSync.questionFloat("Digite um numero: ")

console.log("Tabuada: </br>")
for(i=0;i<=10;i++){
    console.log(`${numero} * ${i} = ${numero*i}`)
}
