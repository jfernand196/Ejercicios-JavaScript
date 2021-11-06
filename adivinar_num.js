// Escribe un programa que piense un número de forma aleatoria del 1 al 10 y le pida al usuario que lo 
// trate de adivinar. Si el número es correcto debe imprimir en la consola "Felicitaciones, ese era!", 
// de lo contrario debe imprimir "Lo siento, intenta nuevamente!"

let user = parseInt(prompt('Enter a number of 0 to 10: '))

let ram = Math.floor(Math.random() * 10)+1;
if (user === ram){
  console.log('Congratulation, it is!')
}
else {
console.log('Sorry, try again!')
}