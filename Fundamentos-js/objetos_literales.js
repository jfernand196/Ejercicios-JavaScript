// var products = [
//     { id: 1, name: "Leche", price: 120, categories: ["familiar", "comida"] },
//     { id: 2, name: "Arroz", price: 80, categories: ["familiar", "comida"] },
//     { id: 3, name: "Lavadora", price: 7800, categories: ["electrodomésticos"] }
//   ];
  
//   for (var i=0; i < products.length; i++) {
//     var product = products[i];
//     console.log(product.name);
//     console.log("  Id: " + product.id);
//     console.log("  Precio: " + product.price);
//     console.log("  Categorías: " + product.categories.join(", "));
//   }

//   Objetivo: Crear un programa que imprima el objeto recipe. Este objeto cuenta con las siguientes 
//   propiedades:

// leche en polvo, 1 litro
// chocolate en barra, 3 barras
// azúcar, 3 gramos

let recipe= {
    leche:"1 litro",
    chocolate: "3 barras",
    azucar: "3 gramos"
}

// console.log(recipe)

// Agrega 1 litro de leche en polvo
// Agrega 3 barras de chocolate en barra
// Agrega 30 gramos de azúcar

// for(let i in recipe){
//     console.log(" Agrega " + recipe[i] + " de " + i)
//    }

//  Objetivo: Agregar el método mixIngredients como propiedad al objeto recipe del reto anterior.

// El método mixIngredients debe retornar la cadena del resultado esperado. Imprime en la consola el
//  resultado.
recipe = {
    "leche en polvo": "1 litro",
    "chocolate en barra": "3 barras",
    azúcar: "30 gramos",
  }
  
  recipe.mixIngredients = function() {
    return "Mezclando los ingredientes ..."
  }
  
  console.log(recipe)
  console.log(recipe.mixIngredients());
  


