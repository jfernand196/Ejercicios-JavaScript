// Objetivo: Crear un programa que imprima en la consola todos los elmentos del siguiente arreglo:

// ["Simón", "Natalia", "Nayib", "Diana", "Germán"]

// let arr = ["Simón", "Natalia", "Nayib", "Diana", "Germán"]

// for(i = 0; i <arr.length; i++ ){
//     console.log(arr[i])
// }

// Objetivo: Crea un programa que acceda a los elementos ubicados en la primera y tercera posición del 
// siguiente arreglo, e imprima el resultado esperado.

// Arreglo:

// [1, 2, 3, 4, 5]

// let arr = [1, 2, 3, 4, 5]

// for(i=0; i<arr.length; i++){
//     if(i===1 || i===3){
//         console.log(arr[i])
//     }
// }
// Objetivo: Crear un programa que inserte en el siguiente arreglo la cadena de texto 
// "Soy el último elemento", e imprima en consola el resultado esperado.

// Arreglo inicial:

// [ "Primero", "Segundo", "Tercero", "Cuarto"]
// let arr = [ "Primero", "Segundo", "Tercero", "Cuarto"]

// arr.push("Soy el ultimo elemento")

// for(i=0;i<arr.length;i++){
//     console.log(arr[i])
// }
// Objetivo: Escribe un programa que inserte cada uno de los elementos del arreglo nuevoArreglo, 
// en el arreglo resultante del reto anterior arr, e imprima cada uno de los elementos en la consola.

// var arr = ["Primero", "Segundo", "Tercero", "Cuarto", "Soy el último elemento"];
// var newArray = ["Quinto", "Sexto"];

// arr.splice(4,0,newArray[0])
// arr.splice(5,0,newArray[1])

// for(i=0;i<arr.length;i++){
//     console.log(arr[i])
// }

// Objetivo: Imprimir los elementos del siguiete arreglo, que sean números mayores o iguales a 18. 
// Los números representan la edad de personas.

// Arreglo de edades:

var ages = [12, 3, 5, 44, 18, 2, 55, 26];

for(i=0;i<ages.length;i++){
    if(ages[i]>=18){
        console.log(ages[i])
    }
}