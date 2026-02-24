// -- BUCLE FOR -- //

// Se usa para repetir un bloque de código un número determinado de veces, en tareas repetitivas. Por ejemplo: iterar sobre los elementos de un array o calcular un númeor específico de veces

// Sintaxis básica: 
// for (variable; condición a ejecutar; incremento) {
//     código a ejecutar en cada iteración
// }

let list = ["eat", "sleep", "code", "repeat"];

// Mientras "i" sea menor a la longitud de los elementos de la lista (son 4 elementos), "i" se incrementa en 1
for (let i = 0; i < list.length; i++) {
    console.log(list[i]); // Imprime el valor de i en ese momento
}

// Ejemplo del loop:
// i es igual a 0; 0 es menor a 4; 0 se incrementa e imprime "eat"
// i es igual a 1; 1 es menor a 4; 1 se incrementa e imprime "sleep"
// i es igual a 2; 2 es menor a 4; 2 se incrementa e imprime "code"
// i es igual a 3; 3 es menor a 4; 3 se incrementa e imprime "repeat"
// i es igual a 4; 4 no es menor a 4; se rompe el ciclo y se acaba el bucle

