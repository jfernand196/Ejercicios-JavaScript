// Ejercicio 31
// El índice de masa corporal (IMC), o BMI por sus siglas en inglés, es un valor que determina la 
// cantidad de grasa de una persona.

// El BMI se calcula con la siguiente formula:

// peso / altura^2

// Escribe una función llamada bmi que reciba dos argumentos: peso y altura. Utiliza la fórmula para 
// retornar el BMI correspondiente.

function bmi(x,y){
    return x / y**2
  }
  
  // código de prueba
  console.log(bmi(65, 1.8)) // 20.061728395061728
  console.log(bmi(72, 1.6)) // 28.124999999999993
  console.log(bmi(52, 1.75)) //  16.979591836734695
  