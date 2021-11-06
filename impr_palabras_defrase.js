// Ejercicio 27
// Escribe un programa que le pida una frase al usuario e imprima cada palabra en una nueva línea. 
// Por ejemplo:

// Ingresa una frase> esta es una prueba
// esta
// es
// una
// prueba

let user = 'esta es una prueba'.split(' ')
for(let i of user){
  console.log(i)}