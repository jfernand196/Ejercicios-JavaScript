// Escribe un programa para la consola que le pida al usuario un número e imprima los números desde 1 
// hasta el número.

// Por ejemplo, si el usuario ingresa el número 5, el programa debe imprimir:

let num = parseInt(prompt('Enter any number: '))

for(let i = 1;i<=num;i++){
  console.log(`${i}`)
}

console.log('other form')

let cont=1
while(cont<=num){
  console.log(`${cont}`)
  cont++
}

// Escribe un programa para la consola que le pida al usuario dos números e imprima en la consola los 
// números en ese rango. Por ejemplo, si el usuario ingresa 5 como primer número y 10 como segundo 
// número, el programa debe imprimir:

let num1 = parseInt(prompt('Enter the first number: '))
let num2 = parseInt(prompt('Enter the second number: '))
for(let i = num1; i <=num2; i++){
  console.log(`${i}`)
}

console.log('other way')

let cont = num1
while(cont<=num2){
  console.log(`${cont}`)
  cont++
}