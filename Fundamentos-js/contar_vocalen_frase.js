// Ejercicio 24
// Escribe un programa que le pida una frase al usuario y le muestre el número de caracteres "a" que hay 
// en la frase. Por ejemplo:

// Ingresa una frase> Hasta la próxima
// La frase tiene 4 caracteres "a"

let user = prompt('Enter any sentence: ')
let user2 = prompt('Enter the word to find: ')
cont=0
for(let i=0; i<user.length;i++){
if(user[i] == user2){
  cont++
}
}
console.log(`La frase tiene ${cont} caracteres ${user2}`)