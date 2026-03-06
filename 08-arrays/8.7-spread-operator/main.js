/* USO DEL SPREAD OPERATOR (...) - COPIAR, COMBINAR, CREAR ARRAYS

COPIAR ARRAYS: Crear una copia para no afectar el original al realizar modificaciones
COMBINAR ARRAYS: Fusionar varios arrays en uno
CREAR ARRAYS: Crear nuevos arrays que incluyan elementos adicionales sin modificar los originales

*/

// 1. Copiando arrays 

const originalArray = ["perro", "gato", "conejo", "hurón", "pájaro"];
const copyOfAnArray = [...originalArray]; // Ponemos el array y dentro, tres puntos y el array que queremos copiar

console.log("ARRAY ORIGINAL", originalArray); // Imprime: ["perro", "gato", "conejo", "hurón", "pájaro"]
console.log("COPIA DEL ARRAY", copyOfAnArray); // Imprime: ["perro", "gato", "conejo", "hurón", "pájaro"]

// 2. Combinando arrays

const array1 = ["HTML", "CSS", "JavaScript"];
const array2 = ["React", "Python", "Angular"];
const combinedArray = [...array1, ...array2];

console.log("ARRAY 1", array1); // Imprime: ["HTML", "CSS", "JavaScript"]
console.log("ARRAY 2", array2); // Imprime: ['React', 'Python', 'Angular']
console.log("ARRAY COMBINADO", combinedArray); // Imprime: ['HTML', 'CSS', 'JavaScript', 'React', 'Python', 'Angular']

// 3. Creando arrays con elementos adicionales

const baseArray = ["coche", "libro", "taza"];
const arrayWithAdditionalElements = [...baseArray, "planta", "PC", "vaso"];

console.log("ARRAY ORIGINAL", baseArray); // Imprime: ['coche', 'libro', 'taza']
console.log("ARRAY CON ELEMENTOS ADICIONALES", arrayWithAdditionalElements); // Imprime: ['coche', 'libro', 'taza', 'planta', 'PC', 'vaso']

// 4. Pasando parámetros a una función

function sum (a, b, c) {
    return a + b + c
};

const numbers = [1, 2, 3];
const result = sum(...numbers);

console.log(result); // Imprime: 6