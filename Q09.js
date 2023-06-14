/*
Faça um programa que receba dez números, calcule e mostre a soma dos números pares e dos números impares.
*/
const readlineSync = require('readline-sync');


let numero = readlineSync.questionFloat("Digite um numero: ")


let numeros = []
let somaPar = 0
let somaImpar = 0
for(i=0; i<10; i++){
 numeros[i]= readlineSync.questionFloat("Digite um numero: ")
 if((numeros[i]%2)==0){
   somaPar=numeros[i]+somaPar
 }else{
   somaImpar=numeros[i]+somaImpar
 }
}
console.log(`Números: ${numeros} `)
console.log(`Soma dos Números pares: ${somaPar} `)
console.log(`Soma dos Números impares: ${somaImpar}`)
