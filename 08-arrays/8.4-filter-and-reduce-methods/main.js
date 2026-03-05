/* MÉTODOS PARA ITERAR ARRAYS - NO MODIFICAN EL ORIGINAL (Inmutabilidad)

FILTER(): Crea un nuevo array si un elemento cumple una condición de una función

REDUCE(): Ejecuta una función de reducción sobre cada elemento del array y devuelve como resultado un único valor

*/

// filter()

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter(number => number % 2 === 0);

console.log("ARRAY ORIGINAL", numbers); // Imprime: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log("ARRAY NÚMEROS PARES", evenNumbers); // Imprime [2, 4, 6, 8, 10]

// reduce()

// EJEMPLO PRÁCTICO: Sumar los elementos de un array

const numbersReduce = [1, 2, 3, 4, 5];
// El primer parámetro (accumulator) sería como una variable let inicializada en 0
// El segundo parámetro (currentValue) serían cada uno de los elementos del array
const sum = numbersReduce.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log("ARRAY ORIGINAL", numbersReduce); // Imprime: [1, 2, 3, 4, 5]
console.log("SUMA DE LOS ELEMENTOS DEL ARRAY ORIGINAL", sum); // Imprime: 15

// EJEMPLO PRÁCTICO II: Contar cuántas veces se repite una palabra en un array

const words = ["coche", "autobús", "hola", "coche", "adiós", "coche", "hola"];

const wordFrequency = words.reduce((accumulator, currentValue) => {
  // Si el currentValue se repite -> acumulamos
  if (accumulator[currentValue]) {
  // Si el valor existe -> le sumamos 1 valor más 
    accumulator[currentValue]++
  // Si no existe -> su valor será 1
  } else {
    accumulator[currentValue] = 1
  }
  return accumulator
}, {});

console.log("FRECUENCIA DE LOS ELEMENTOS DEL ARRAY", wordFrequency); // Imprime: {coche: 3, autobús: 1, hola: 2, adiós: 1}
