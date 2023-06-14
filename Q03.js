/*
Faça um programa que receba dois números e mostre o menor.
*/


const readlineSync = require('readline-sync');



let numero1 = readlineSync.questionFloat("Digite um numero: ")
let numero2 = readlineSync.questionFloat("Digite um numero: ")

if(numero1<numero2){
    console.log("O número menor é " +numero1)
}else{
    console.log("O número menor é " +numero2)
}
