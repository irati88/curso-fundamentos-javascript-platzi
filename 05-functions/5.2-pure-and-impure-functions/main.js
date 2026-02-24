// -- FUNCIONES PURAS & IMPURAS -- //

// Funciones PURAS: Siempre produce el mismo resultado dado el mismo conjunto de argumentos/parámetros. No tiene efectos secundarios como:

// 1. Modificar variables globales
// 2. Modificar parámetros
// 3. Llamadas a APIs // Solicitudes HTTP
// 4. Imprimir mensajes en pantalla (alert) o en consola(console.log) al hacer debugging
// 5. Manipulación del DOM (acceder o realizar consultas)
// 6. Acceder a la hora/día actual

// Sintaxis básica: function + nombre (parámetros) {código a ejecutar o retornar}

function sum (a, b) {
    return a + b
}

// Misma entrada (x) y misma salida, sin efectos secundarios

function square(x) {
    return x * x
}

function addTen (y) {
    return y + 10
}

// Funciones IMPURAS:

function sum (a, b) {
    console.log("A: ", a); // Side effect que la convierte en función impura
    return a + b
}

sum();

// Modificar variable global

let total = 0; // Variable global que cambiará a medida que se ejecute la función

function sumWithSideEffect (a) {
    // total = total + a
    total += a
    return total
}

// Combinación de 2 funciones puras = Sigue siendo función pura
const number = 5;
const finalResult = addTen(square(number));
