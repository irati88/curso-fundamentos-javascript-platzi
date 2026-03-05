/* MÉTODOS PARA ITERAR ARRAYS - NO MODIFICAN EL ORIGINAL (Inmutabilidad)

FIND(): Devuelve el valor del primer elemento del array que cumple una condición de la función

FINDINDEX(): Devuelve el índice del primer elemento del array que cumple una condición de la función. Si no encuentra ninguno, devuelve -1

*/

// find()

const multipleOf5 = [5, 10, 15, 20];

const firstNumberGreaterThan10 = multipleOf5.find(number => number > 10);

console.log("ARRAY DE MÚLTIPLOS DE 5", multipleOf5); // Imprime: [5, 10, 15, 20]
console.log("PRIMER ELEMENTO DEL ARRAY MAYOR A 10", firstNumberGreaterThan10); // Imprime: 15

// findIndex()

const randomNumbers = [6, 14, 27, 56, 40];
const indexNumber = randomNumbers.findIndex(number => number > 50);

console.log("ARRAY DE NÚMEROS RANDOM", randomNumbers); // Imprime: [6, 14, 27, 56, 40]
console.log("INDEX DEL PRIMER ELEMENTO MAYOR QUE 50", indexNumber); // Imprime: 3 (índice de 56)