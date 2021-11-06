// Ejercicio 28 (Bonus)
// Escribe un programa que le pida dos frases al usuario e imprima los caracteres que tienen en común. 
// Si no tienen caracteres en común debe imprimir "No se encontraron caracteres en común".

// Ejemplo 1:

// Ingresa frase 1> German
// Ingresa frase 2> Gabriela
// Los caracteres en común son: G, e, r, a

let str1 = 'Hola'
let str2 = 'Bae'
let cont = ''

for(let i of str1){
  if(str2.includes(i) == true){
cont+=i + ','
  }
 }
 if(cont != ''){
console.log(`Los caracteres en comun son: ${cont}`)}
else if(cont == ''){
  console.log('do not Have words in common')
}