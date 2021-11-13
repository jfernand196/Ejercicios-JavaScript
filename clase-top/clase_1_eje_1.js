// escribir una funcion llamada numDuplicados que recibe un string y retorne el numero de caracteres
// que aparecen mas de una ves

// abcaa => 1

function numDuplicados(str){    
    let output = []
    for (let index = 0; index < str.length; index++) {
        let a = str[index]
        for (let index2 = index + 1; index2 < str.length; index2++) {
            let b = str[index2]
            if(a === b && output != a){
                output.push(a)
            }
          }
        }
    return output.length
}

console.log(numDuplicados("abcaa"))
console.log(numDuplicados("abab"))
console.log(numDuplicados("abc"))
console.log(numDuplicados("aacaa"))