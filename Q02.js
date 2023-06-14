/*
Entrar com um número e imprimir uma das mensagens: é múltiplo de 3 ou não é múltiplo de 3.
*/


const readlineSync = require('readline-sync');



let number = readlineSync.questionFloat("Digite um numero: ");

if(number % 3==0){
    console.log("O número "+number+" é múltiplo por 3.")
}else{
    console.log("O número "+number+" não é múltiplo por 3.")
}

