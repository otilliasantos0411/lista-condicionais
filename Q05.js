/*
Faça um programa que receba dois números e execute as operações listas a seguir, de acordo com a escolha do usuário.
*/
const readlineSync = require('readline-sync');



let numero1 = readlineSync.questionFloat("Digite primeiro numero:")
let numero2 = readlineSync.questionFloat("Digite segundo numero: ")
let opcao = readlineSync.questionFloat("Digite uma opção:  1- Media 2- Diferenca 3- Produto 4- Divisao:")

let operacao = 0

switch(opcao){
    case 1: 
        operacao = (numero1 + numero2 ) /2
        console.log(`Operacao media entre os numeros ${numero1} e ${numero2}: ${operacao} `)
        break
    case 2:
        if( numero1 > numero2){
            operacao = numero1 - numero2;
            console.log(`Operaçao diferenca do maior pelo menor: ${operacao} `)
          }else{
            operacao = numero2 - numero1;
            console.log(`Operaçao diferenca do maior pelo menor: ${operacao} `)
          }
        break
    case 3:
        operacao = numero1 * numero2
        console.log(`Operacao produto entre os numeros  ${numero1} e ${numero2}: ${operacao} `)
        break
    case 4:
        operacao = numero1 / numero2
        console.log(`Operacao divisao do primeiro pelo segundo: ${operacao.toFixed(2)} `)
        break
}8

