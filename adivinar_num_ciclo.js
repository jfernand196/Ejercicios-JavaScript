// Escribe un programa que piense un número de forma aleatoria y le pida al usuario que lo trate de 
// adivinar (como en uno de los ejercicios anteriores). La diferencia es que esta vez el usuario puede 
// intentar indefinidamente hasta que encuentre el número.

let num
let ram = Math.floor(Math.random() * 10)+1;

for(i=0; num!=ram; i++){
  // console.log('Sorry, Try again !')
  num = parseInt(prompt('Enter any number: '))
  // console.log(`${num} ${ram}`)
}
console.log('Congratulation, it is the number !')