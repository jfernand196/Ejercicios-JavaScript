// Escribe una función llamada pares que reciba un arreglo de números y retorne un nuevo arreglo con los 
// números pares que existen en el arreglo:

// escribe la función acá
function pares(arr){
    return arr.filter(val => val % 2 == 0)
}

// // código de prueba
console.log(pares([0, 1, 2, 3, 4])) // [0, 2, 4]
console.log(pares([120, 876, 934, 1298])) // [120, 876, 934, 1298]
console.log(pares([7, 921, 43, 9649])) // []

// Ejercicio 43
// Escribe una función llamada posPares que reciba un arreglo y retorne un nuevo arreglo con los valores 
// en las posiciones pares del arreglo que llega como argumento.

// escribe tu función acá
// opcion 1

function posPares(arr){
    let aux = []
    arr.filter((element,index) => {
      if(index%2===0){
        aux.push(element)
      } 
      });
      return aux;
  }
// opcion 2

// function posPares(arr){
//     return arr.filter( item => !(arr.indexOf(item)&1) )
// }

// código de prueba
console.log(posPares(["a", "b", "c"])) // ["a", "c"]
console.log(posPares([0, 1, 2, 3, 4])) // [0, 2, 4]
console.log(posPares([])) // []