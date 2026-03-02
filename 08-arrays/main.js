// ARRAYS: Conjunto de elementos que se guardan en una variable. Son objetos.
// Están designados por índices (empezando siempre por la posición 0)

// Cómo crear Arrays

// 1. Usando la palabra clave new Array() o solamente Array(los diferentes valores)

const fruits = Array("apple", "cherry", "strawberry");
console.log("Array de frutas", fruits); // Imprime: ["apple", "cherry", "strawberry"]

const justOneNumber = Array(12); // Este método no funciona con un sólo número
console.log(justOneNumber); // Imprime: [empty * 12]

const numbers = Array(1, 2, 3, 4, 5);
console.log("Array de números", numbers); // Imprime: [1, 2, 3, 4, 5]

// 2. Array literal syntax

const oneNumber = [4];
console.log(oneNumber); // Imprime: [4]

const emptyArray = [];
console.log(emptyArray); // Imprime: []

const sports = ["soccer", "basketball", "rugby"];
console.log(sports); // Imprime: ['soccer', 'basketball', 'rugby']

const mixedArray = [
  "flour",
  true,
  15,
  {
    ingrediente: "Milk",
    quantity: "1 cup",
  },
  false,
];

console.log("Array mixto", mixedArray); // Imprime: ['flour', true, 15, {…}, false]

// Cómo acceder a Arrays

const firstFruit = fruits[0]; // Para acceder al primer elemento de la variable fruits
console.log(firstFruit); // Imprime: apple

// Saber el tamaño de un Array (length)

const numberofFruits = fruits.length;
console.log(numberofFruits); // Imprime: 3. La cantidad de elementos de la variable fruits
