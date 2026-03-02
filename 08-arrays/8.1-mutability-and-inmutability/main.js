/* MUTABILIDAD VS INMUTABILIDAD

Un array (objeto) tiene diferentes métodos y estos sirven para transformar un array o crear uno nuevo.
*/

// Métodos mutables (mutability):

const fruits = Array("apple", "cherry", "strawberry");

fruits.push("watermelon"); // Agregamos elementos al array con el método .push modificando el original
console.log("MÉTODO PUSH", fruits); // Imprime: ['apple', 'cherry', 'strawberry', 'watermelon']

// Métodos inmutables (inmutability):

const newFruits = fruits.concat("grape", "kiwi"); // Combinamos arrays con .concat sin modifical el original
console.log(fruits); // Imprime el array original sin modificar: ['apple', 'cherry', 'strawberry', 'watermelon']
console.log(newFruits); // Imprime el nuevo array: ['apple', 'cherry', 'strawberry', 'watermelon', 'grape', 'kiwi']

// Comprobar si una variable es un array

const isArray = Array.isArray(fruits); // Comprobamos si la variable es un array con el método Array.isArray()
console.log(isArray); // Imprime: true porque sí es un array

// EJERCICIO PRÁCTICO: Sumar todos los elementos de un array

const numbersArray = [1, 2, 3, 4, 5];
let sum = 0; // Inicializamos la variable en 0

// La suma la haremos con un bucle FOR, para iterar cada una de las posiciones del array y sumar un elemento cada vez

for (let i = 0; i < numbersArray.length; i++) {
  sum += numbersArray[i]
}

console.log("SUMA DE ELEMENTOS DEL ARRAY", sum); // Imprime: 15
