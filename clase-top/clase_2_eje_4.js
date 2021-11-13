// EJERCICIO 4
// Escriba una función que reciba dos números y retorne un objeto con el resultado 
// de cada una de las operaciones básicas entre ellos. Redondee la respuesta de la 
// división a 2 decimales.

function basicOperations(x, y){
    let obj = {}
    obj.suma = x + y
    obj.resta = x - y
    obj.mult=x*y
    // obj.div= (x/y).toFixed(2)
    obj.div= Math.round((x/y)*100)/100
    return obj
}

console.log(basicOperations(2, 3)); // {suma: 5, resta: -1, mult: 6, div: 0.66 }
console.log(basicOperations(10, 5)); // { suma: 15, resta: 5, mult: 50, div: 2 }
console.log(basicOperations(8, 40)); // { suma: 48, resta: -32, mult: 320, div: 0.2 }
