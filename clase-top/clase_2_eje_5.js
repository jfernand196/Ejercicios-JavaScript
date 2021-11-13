// EJERCICIO 5
// The aim of this kata is to split a given string into different strings of equal 
// size (note size of strings is passed to the method)

// Example:
// Split the below string into other strings of size #3: 'supercalifragilisticexpialidocious'

// Will return a new string:
// 'sup erc ali fra gil ist ice xpi ali doc iou s'

// Assumptions:
// String length is always greater than 0
// String has no spaces
// Size is always positive

function splitInParts(str, x){
    let output=[]
    for(let i=0;i<str.length;i+=x){
        output.push(str.slice(i,i+x))
        }
    return output
}


console.log(splitInParts("supercalifragilisticexpialidocious", 3)) // "sup erc ali fra gil ist ice xpi ali doc iou s"
console.log(splitInParts("HelloKata", 1)) // "H e l l o K a t a"
console.log(splitInParts("HelloKata", 9)) // "HelloKata")