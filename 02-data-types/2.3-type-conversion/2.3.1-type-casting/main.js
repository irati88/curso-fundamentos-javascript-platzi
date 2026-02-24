// EXPLICIT TYPE CASTING

const string = "42";
const integer = parseInt(string); // Cambia el tipo de dato de string a number
console.log(integer); // Imprime 42
console.log(typeof integer); // Imprime number

const stringDecimal = "3.14";
const float =parseFloat(stringDecimal);
console.log(float); // Imprime 3.14
console.log(typeof float); // Imprime number

const binary = "1010";
const decimal = parseInt(binary, 2) // Convierte de binario a decimal
console.log(decimal); // Imprime 10
console.log(typeof decimal); // Imprime number

// IMPLICIT TYPE CASTING

const sum = "5" + 3 // Convierte el 3 a string y lo concatena
console.log(sum); // Imprime 53

const sumWithBoolean = "3" + true; // Convierte el true a string y lo concatena
console.log(sumWithBoolean); // Imprime 3true

// CÓMO SABER SI JAVASCRIPT CONCATENA O SUMA

const sumWithNumber = 2 + true; // Convierte true en número
console.log(sumWithNumber); // Imprime 3

console.log("----------------------");

const stringValue = "10";
const numberValue = 10;
const booleanValue = true;
console.log(stringValue + stringValue ); // Imprime 1010 -- Concatena
console.log(stringValue + numberValue ); // Imprime 1010 -- Concatena
console.log(stringValue + booleanValue); // Imprime 10true -- Concatena

console.log(numberValue + stringValue); // Imprime 1010 -- Concatena
console.log(numberValue + numberValue); // Imprime 20 -- Suma
console.log(numberValue + booleanValue); // Imprime 11 -- Suma

console.log(booleanValue + stringValue); // Imprime true10 -- Concatena
console.log(booleanValue + numberValue); // Imprime 11 -- Suma
console.log(booleanValue + booleanValue); // Imprime 2 -- Suma
