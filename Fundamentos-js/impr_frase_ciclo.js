// Escribe un programa que le pida al usuario ingresar una frase. El programa debe imprimir la frase
// en la consola 10 veces.

// Nota: utiliza un ciclo para imprimir la frase las 10 veces.

let user = prompt('Enter any coment: ')
// Option one
for(let i = 1; i <= 10; i++){
console.log(`${i} ${'-'} ${user}`)
}

// option two
cont = 1
while(cont <= 10){
  console.log(`${cont} ${'-'} ${user}`)
  cont++
}

// Escribe un programa que le pida al usuario una frase y un número. El programa debe imprimir la 
// frase en la consola el número de veces que ingresó el usuario.

// Por ejemplo, si el usuario ingresó la frase "Hola Mundo" y el número 5, el programa debe imprimir 
// "Hola Mundo" 5 veces:

let sentence = prompt('Enter any sentense: ')
let num = parseInt(prompt('Enter any number: '))

// option one
for(let i = 1; i<= num; i++){
  console.log(`${i} ${sentence}`)
}
console.log('other')
// option two
let cont = 1
while(cont <= num ){
  console.log(`${cont} ${sentence}`)
  cont++
}