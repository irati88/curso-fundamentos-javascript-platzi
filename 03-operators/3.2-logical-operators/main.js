// OPERADORES DE LÓGICA

const a = 10;
const b = 20;
const c = "10";

// AND (&&): Si valor A y valor B se cumplen...
a == b && a === c // Imprime false -> 10 == 20 && 10 number === 10 string

// OR (||): Si valor A o valor B se cumple...
a != b || a === c // Imprime true -> a es diferente a b 

// NOT (!): Se utiliza para negar el valor de una expresión - El valor A no es X
!(a === c) // Imprime true -> a NO es igual a c

