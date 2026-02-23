// -- BUCLE For...In -- //

// Se utiliza para iterar OBJETOS (no arrays)

// OBJETOS: Se componen de propiedades (color) y valores (rojo)
// - Propiedad: un identificador dentro del objeto.
// - Valor: cualquier tipo de dato asociado a la propiedad, que puede ser un número, string, booleano, función, u otro objeto.

// Sintaxis básica: 
// for (variable + in + objeto) {
// código a ejecutar
// }

const shoppingList = {
  manzana: 5, // index 0
  pera: 3, // index 1
  naranja: 2, // index 2
  uva: 1 // index 3
};

for (fruit in shoppingList) {
  console.log(fruit); // Imprime cada una de las propiedades
}

for (fruit in shoppingList) {
  console.log(`${fruit} : ${shoppingList[fruit]}`) // Imprime la propiedad y su valor
}

// En cada iteración, la variable "fruit" será un número (como un array)
// P.e manzana (index 0) : 5 (valor 0)