/* MÉTODOS PARA ITERAR ARRAYS - NO MODIFICAN EL ORIGINAL (Inmutabilidad)

MAP: Aplica una función a cada elemento de un array y devuelve uno nuevo con el resultado, sin modificar el original

FOREACH: Itera sobre cada elemento de un array y ejecuta una función para cada uno, sin crear un array nuevo

*/

// map()

const numbers = [1, 2, 3, 4, 5];
const squareNumbers = numbers.map(num => num * num);

console.log("ARRAY ORIGINAL", numbers); // Imprime: [1, 2, 3, 4, 5]
console.log("NUEVO ARRAY CCON MAP()", squareNumbers); // Imprime: [1, 4, 9, 16, 25] Nuevo array con los valores de la variable numbers al cuadrado

// forEach()

const colors = ["Black", "Red", "Purple"];
// Iteraremos el array para obtener el valor de cada elemento
const iteratedColors = colors.forEach(color => console.log(color)); // Imprime: Black Red Purple sucesivamente cada vez que da una vuelta y ejecuta el console.log

console.log("ARRAY ORIGINAL", colors); // Imprime: ["Black", "Red", "Purple"] 
console.log(iteratedColors); // Imprime: undefined

// EJEMPLO PRÁCTICO: "Fahrenheit to Celsius Conversion" with formula C = 5/9 * (F -32)

const temperaturesInFahrenheit = [32, 68, 95, 104, 212];
const temperaturesInCelsius = temperaturesInFahrenheit.map(fahrenheit => (5/9 * (fahrenheit - 32)));

console.log("FAHRENHEIT", temperaturesInFahrenheit); // Imprime: [32, 68, 95, 104, 212]
console.log("CONVERSIÓN A CELSIUS", temperaturesInCelsius); // Imprime: [0, 20, 35, 40, 100]

// EJERCICIO PRÁCTICO II: "Sum of elements in an Array" 

const arrayOfNumbers = [22, 54, 79, 10];

let sum = 0;

arrayOfNumbers.forEach(number => {
  // sum = sum + number
  sum += number
});

console.log("ARRAY DE NÚMEROS ORIGINAL", arrayOfNumbers); // Imprime: [22, 54, 79, 10]
console.log("SUMA DE LOS ELEMENTOS DEL ARRAY", sum); // Imprime: 165