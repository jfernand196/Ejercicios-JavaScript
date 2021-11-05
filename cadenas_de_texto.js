// Objetivo: Identificar que debe retornar la consola al acceder al caracter ubicado en el index 
// especificado para cada uno de los siguientes casos, e imprimirlo en la consola.

// console.log("Hola mundo"[3]);//a
// console.log("    "[2]);//
// console.log("Estoy aprendiendo"[7]);//p
// console.log("El azul es mi color favorito"[12]);//i
// console.log(""[0]);//indefined
// console.log(" El cielo es azul"[20]);//indefined

// Objetivo: Escribir una función llamada countingEs que reciba como parámetro un string (cadena de texto) 
// y retorne el número de caracters "e" (minúscula).

// function countingEs(cadena){
//     let cont = 0
//     for(i=0;i<cadena.length;i++){
//         if(cadena[i] === "e"){
//         cont ++
//         }
//     }
//     return cont
// }

// console.log(countingEs("Estoy ejercitándome los miércoles y jueves") === 6);  // true
// console.log(countingEs("Eeeeh!, que alegría verlos amigos mios")  === 6); // true
// console.log(countingEs("Ejemplares son las personas de este hermoso pueblo")  === 8); // true
// console.log(countingEs("Ahora qué?") === 0); // true
// console.log(countingEs("Los elefantes son enormes") === 5) // true

// Objetivo: Define una función message, que reciba como parámetro un arreglo y retorne las siguientes 
// cadenas de texto para cada uno de los casos de prueba.

// function message(arr){
//     return arr.join(" ")
// }

// console.log(message(["Estoy", "aprendiendo", "Java", "Script"])); // Estoy aprendiendoJavaScript!
// console.log(message(["El", "método", "join", "me", "permite", "unir", "elementos"])); //  El método join me permite unir elementos
// console.log(message(["Java", "Script", "es", "muy", "útil"])) //JavaScript es muy útil

// Objetivo: Escribir una función llamada contrasena que reciba un string y retorne otro string realizando 
// los siguientes cambios sobre el string de entrada:

// Remplaza las mayúsculas por minúsculas.
// Elimina los espacios en blanco.
// Remplaza el caracter "a" por "4".
// Remplaza el caracter "e" por "3".
// Remplaza el caracter "i" por "1".
// Remplaza el carater "o" por "0".

//  function generatePassword(str){
//      return str.toLowerCase().split(" ").join("").replace(/a/g,"4").replace(/e/g, "3").replace(/i/g,"1").replace(/o/g, "0")
//  }

//  console.log(generatePassword("hola")); // "h0l4"
//  console.log(generatePassword("esta es una prueba")); // "3st43sun4pru3b4"
//  console.log(generatePassword("")); // ""

// Objetivo: Escribir una función llamada capitalizar que reciba una cadena y capitalice cada palabra de 
// la cadena (cambie a mayúscula la letra inicial).

// Nota: puedes asumir que cada palabra está separada por espacio.


function capitalize(string) {
    var words = string.split(' ');
  
    for(var i = 0; i < words.length; i++) {
      var chars = words[i].split('');
  
      chars[0] = chars[0].toUpperCase();
  
      words[i] = chars.join('');
    }
  
    return words.join(' ');
  }


console.log(capitalize("pedro perez")); // "Pedro Perez"
// console.log(capitalize("make it real")); // "Make It Real"

