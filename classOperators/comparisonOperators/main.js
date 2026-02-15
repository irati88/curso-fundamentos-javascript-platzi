// OPERADORES DE COMPARACIÓN 

// 1- Comparador de igualdad - desigualdad

const a = 10;
const b = 20;
const c = "10";

// == Nos compara si 2 valores son iguales
a == b; // Imprime false ( a es 10 y b es 20)

// === Nos compara si 2 valores son iguales en valor y en tipo de dato
a === c; // Imprime false ( a es tipo number y c es tipo string)

// != Nos compara si 2 valores son diferentes
a != b; // Imprime true (a es 10 y b es 20)

// !== Nos compara si 2 valores son diferentes en valor y en tipo de dato
a !== c; // Imprime true (a es tipo number y c tipo string)

// > Nos compara si un valor es mayor que otro
a > b; // Imprime false

// < Nos compara si un valor es menor que otro
a < c; // Imprime false

// >= Nos compara si un valor es mayor o igual que otro
a >= b; // Imprime false
// <= Nos compara si un valor es menor o igual que otro
a <= c; // Imprime true