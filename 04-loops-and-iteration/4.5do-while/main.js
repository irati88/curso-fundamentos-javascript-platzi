/*

-- BUCLE DO...WHILE --

Primero ejecutamos el código y luego se valida que una condición sea true

Sintaxis básica:
do {
código a ejecutar si la condición es true
} while (condición)

*/

let counter = 0;

// Imprime el valor de counter mientras que counter sea menor a 10
do {
  console.log(counter); // Imprime el valor de counter en ese momento del 0 a 9
  counter++; // Incremento para evitar el loop infinito
} while (counter < 10)