/*
    8. Faça um programa que receba a idade, a altura e o peso de 25 pessoas, calcule e mostre:
        a. A quantidade de pessoas com idade superior a 50 anos;

        b. A média das alturas das pessoas com idade entre 10 e 20 anos;

        c. O percentual de pessoas com peso inferior a 40 quilos entre todas as pessoas analisadas.
*/

const readlineSync = require('readline-sync');

let numero = readlineSync.questionFloat("Digite um numero: ")

let i =0
let maior50 = 0
let somaAltura = 0
let contadorAltura = 0
let mediaAltura = 0
let contadorPeso=0
while (i<5){
    let idade = readlineSync.questionFloat("Idade: ")
    let altura = readlineSync.questionFloat("Altura: ")
    let peso = readlineSync.questionFloat("Peso: ")
    if(idade > 50){
        maior50 = maior50 +1
    }
    if(idade >=10 && idade <=20){
        contadorAltura = contadorAltura + 1
        somaAltura = somaAltura + altura
    }
    if(peso<40){
        contadorPeso = contadorPeso +1
    }
    i = i +1
    
}
mediaAltura = somaAltura / contadorAltura
let percentual = (contadorPeso*100)/i

console.log(`A quantidade de pessoas com idade superior a 50 anos: ${maior50}`)
console.log(`A média das alturas das pessoas com idade entre 10 e 20 anos: ${mediaAltura}`)
console.log(`O percentual de pessoas com peso inferior a 40 quilos entre todas as pessoas analisadas: ${percentual} %`)