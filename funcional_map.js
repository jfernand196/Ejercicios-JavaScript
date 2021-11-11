// Escribe una función llamada multiplicar que reciba un arreglo (de números) y un número. La función debe 
// retornar un nuevo arreglo con cada número multiplicado por segundo número:

// escribe tu función acá

function multiplicar(arr, num){
   return arr.map(value => value * num)
   }

// código de prueba
console.log(multiplicar([1, 2, 3], 2)) // [2, 4, 6]
console.log(multiplicar([7, 4], 3)) // [21, 12]
console.log(multiplicar([], 10)) // []