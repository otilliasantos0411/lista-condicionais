/*
Crie um algoritmo que entre com cinco números e imprimir o quadrado de cada número.
*/
const readlineSync = require('readline-sync');


let number1 = readlineSync.questionFloat("Digite 1 numero: ")
let number2 = readlineSync.questionFloat("Digite 2 numero: ")
let number3 = readlineSync.questionFloat("Digite 3 numero: ")
let number4 = readlineSync.questionFloat("Digite 4 numero: ")
let number5 = readlineSync.questionFloat("Digite 5 numero: ")

let quadradoNumber1 = number1 **2
let quadradoNumber2 = number2 **2
let quadradoNumber3 = number3 **2
let quadradoNumber4 = number4 **2
let quadradoNumber5 = number5 **2

console.log(` O quadrado do numero ${number1} é ${quadradoNumber1}`)
console.log(` O quadrado do numero ${number2} é ${quadradoNumber2}`)
console.log(` O quadrado do numero ${number3} é ${quadradoNumber3}`)
console.log(` O quadrado do numero ${number4} é ${quadradoNumber4}`)
console.log(` O quadrado do numero ${number5} é ${quadradoNumber5}`)
