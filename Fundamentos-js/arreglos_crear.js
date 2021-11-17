 // Escribe un programa que:

// Le pida al usuario un número y cree un arreglo de números empezando en el 1 hasta el número que el 
// usuario ingrese (incluyéndolo)
// Elimine el segundo elemento.
// Recorra e imprima el arreglo.
let number = parseInt(prompt('Enter any number: '))
let arr = []

for(let i =0;i< number; i++){
  // way one:
// arr[i]= i+1
// way two:
arr.push(i+1)
}
console.log(arr)
// delete arr[1]: the arry stay with a hole in the place 2
// console.log(arr)
arr.splice(1,1) // the array stay without a hole in place 2

for(i = 0; i < arr.length; i++){
  console.log(arr[i])
}