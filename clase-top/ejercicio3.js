// Crea una funcion llamada caracteresEnComun que recibe 2 argumentos:str1 y str2. La funcion debe 
// retornar un arreglo con todos los caracteres que las 2 cadenas tienen en comun.

// "Hola" "mundo" => ["o"]
// "german" "gabriela" => ["g", "e", "r", "a"]
// "hola" "bye" =>[]

function caracteresEnComun (str1, str2){
let output = []

for (let i = 0; i < str1.length; i++) {
    for(let j = 0; j < str2.length; j++){
        if(str1[i] === str2[j]){
            output.push(str1[i]);
            break
        }
    }    
}
return output
}

console.log(caracteresEnComun("Hola","mundo"))
console.log(caracteresEnComun("german","gabriela"))
console.log(caracteresEnComun("hola", "bye"))