// Crea un programa a partir de las siguientes instrucciones:

// Crea una variable llamada nombres con un arreglo que tenga los siguientes elementos: "Pedro", "Pablo",
// "María", "Juan", "Diana".
// Pídele al usuario que ingrese un nombre e insértalo al final del arreglo que creaste en el paso 1.
// Pídele al usuario que ingrese otro nombre y reemplaza la tercera posición del arreglo con este valor.
// Recorre el arreglo e imprímelo.

nombres = ["Pedro", "Pablo", "María", "Juan", "Diana"]
console.log(nombres)
let name = prompt('Enter any name: ')
nombres.push(name)
console.log(nombres)

let name2 = prompt('Enter other name: ')
nombres[3] = name2
console.log(nombres)


for(let i = 0; i < nombres.length; i++){
console.log('*' + nombres[i])

  }
for(let i = 0; i < nombres.length; i++){

console.log(`${'-'} ${nombres[i]}`)
  }