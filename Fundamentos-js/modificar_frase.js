// Ejercicio 25
// Escribe un programa que le pida una frase al usuario y le muestre una nueva frase con los siguientes 
// cambios:

// Las mayúsculas se reemplazan por minúsculas.
// Se eliminan los espacios en blanco.
// Reemplaza el caracter "a" por "4".
// Reemplaza el caracter "e" por "3".
// Reemplaza el caracter "i" por "1".
// Reemplaza el caracter "o" por "0".
// Ejemplo:
// Ingresa una frase> esta es una prueba
// 3st43sun4pru3b4

let sent = 'Esta Es Una Prueba'
let sent2= sent.toLowerCase().replace(/ /g,'').replace(/a/g,'4').replace(/e/g,'3').replace(/i/g,'1').replace(/o/g,'0')
console.log(sent2)