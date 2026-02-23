/*
-- BUCLE WHILE --

Se usa para repetir un bloque de código mientras una condición específica sea verdadera

Sintaxis básica:
while(condición) {
código a ejecutar mientras la condición sea verdadera
}
*/

let counter = 0; 

// Mientras la variable counter sea menor a 10, imprime el valor de counter en ese momento.
while (counter < 10) {
  console.log(counter); // Imprime el valor de counter de 0 a 9
  counter++; // Incremento que evita el loop infinito
}