// 1. Tipo Entero y Decimal
const integerNumber = 42;
console.log("Tipo de dato Entero", typeof integerNumber); 

const decimalNumber = 3.14;
console.log("Tipo de dato decimal", typeof decimalNumber);

// 2. Notación científica
const scientificNotation = 5e3; 
console.log("Notación científica", scientificNotation); // Imprime 5000

// 3. Infinitos y NaN 
const infinitNumber = Infinity; 
const isNotANumber = NaN;

// 4. Operaciones aritméticas

// 4.1 - Suma, Resta, Multiplicación y División
const sum = 3 + 5
const minus = 10 - 4
const multi = 8 * 12
const divide = 10 / 2

// 4.2 Módulo y Exponenciación
const module = 15 % 8 
console.log("Módulo", module); // Imprime 7

const exponentialNumber = 2 ** 3
console.log("Exponenciación", exponentialNumber); // Imprime 8

// Problemas de Precisión
const result = 0.1 + 0.2
console.log("Resultado", result); // Imprime 0.30000000000000004 en lugar de 0.3
console.log(result.toFixed(1)) // Para indicar cuántos decimales queremos -- Imprime 0.3
console.log(result === 0.3); // Comprueba si el valor es igual a 0.3 a nivel de número y de tipo -- Imprime false

// Operaciones Avanzadas

const squareRoot = Math.sqrt(16) // Para saber la raíz cuadrada de un número
console.log("Raíz cuadrada de 16", squareRoot); // Imprime 4

const absoluteValue = Math.abs(-7) // Para saber el valor absoluto de un número
console.log("Valor absoluto de -7", absoluteValue); // Imprime 7

const random = Math.random() // Para obtener un número aleatorio
console.log("Número aleatorio", random); // Imprime 0.5708858080667144
console.log("Número Random", random.toFixed(1)); // Imprime 0.1

