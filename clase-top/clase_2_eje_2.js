// EJERCICIO 2
// Escribe una función llamada frecuencias que reciba una cadena de texto y retorne 
// un objeto con el número de veces que aparece cada carácter (exceptuando el espacio en blanco)


function frecuencias(myStr) {
    const obj = {};
    for (const c of myStr) {
      if (c == " ") {
        continue;
      }
      if (obj[c]) {
        obj[c] += 1;
      } else {
        obj[c] = 1;
      }
      //console.log(obj)
    }
    return obj;
  };
  
 
console.log(frecuencias("hola mundo")); // { h: 1, o: 2, l: 1, a: 1, m: 1, u: 1, n: 1, d: 1}
console.log(frecuencias("anita lava la tina")) // { a: 6, n: 2, i: 2, t: 2, l: 2, v: 1 }