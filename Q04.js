/*
Faça um programa que receba três números e mostre o maior.
*/

const readlineSync = require('readline-sync');



let numero1 = readlineSync.questionFloat("Digite um numero: ")
let numero2 = readlineSync.questionFloat("Digite um numero: ")
let numero3 = readlineSync.questionFloat("Digite um numero: ")


if(numero1 < numero2 && numero1 < numero3){
    console.log(numero1+" é o menor número")
}else{
    if(numero2< numero1 && numero2 < numero3){
        console.log(numero2+" é o menor número")
    }else{
           console.log(numero3+" é o menor número")     
    }
}