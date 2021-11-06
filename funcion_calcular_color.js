// Ejercicio 32
// La función calcularColor recibe un número como argumento y retorna un string de acuerdo al número:

// Si el número es 1 retorna "El color es negro".
// Si el número es 2 retorna "El color es blanco".
// Si el número es 3 retorna "El color es azul".
// De lo contrario retorna "El color es verde".

function calcularColor(x){
    if(x==1){
      return 'El color es negro'
    }
    else if(x==2){
      return 'El color es blanco'
    }
    else if(x==3){
      return 'El color es azul'
    }
    else {
      return 'El color es verde'
    }
  }
  // código de prueba
  console.log(calcularColor(1)) // "El color es negro"
  console.log(calcularColor(2)) // "El color es blanco"
  console.log(calcularColor(3)) // "El color es azul"
  console.log(calcularColor(8)) // "El color es verde"
  