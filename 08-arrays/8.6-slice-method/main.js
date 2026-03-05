/* MÉTODO PARA EXTRAER PARTES CONCRETAS DE UN ARRAY (Inmutabilidad)

SLICE(): Permite extraer una parte de un array sin modificarlo. Genera una copia del original

*/

// slice()

const animals = ["murciélago", "perro", "koala", "suricato", "araña"];

// slice con un sólo parámetro - Devuelve los valores desde el índice indicado y hasta el final del array

console.log(animals.slice(2)); // Imprime: ['koala', 'suricato', 'araña'] -- Elementos a partir del índice 2 en adelante

// slice con dos parámetros - El primero indica el inicio y el segundo el final

console.log(animals.slice(2, 4)); // Imprime: ['koala', 'suricato'] -- Elementos desde el índice 2 hasta el 4 (no incluye el índice final en el resultado)

console.log(animals.slice(1, 6)); // Imprime: ['perro', 'koala', 'suricato', 'araña'] -- Elementos desde el índice 1 hasta el 6 

// slice para contar desde el índice final hacia atrás (usando índices en negativo)
console.log(animals.slice(-2)); // Imprime: ['suricato', 'araña'] -- Contaría araña como -1 y suricato como -2

// slice para extraer un valor del inicio y otro del final
console.log(animals.slice(2, -1)); // Imprime: ['koala', 'suricato']

// slice sin parámetros - Devuelve todos los elementos del array

console.log(animals.slice()); // Imprime: ['murciélago', 'perro', 'koala', 'suricato', 'araña']