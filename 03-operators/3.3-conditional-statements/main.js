// -- Estructuras Condicionales: Uso de IF, ELSE y ELSE IF --

// IF

// Sintaxis básica ->
// if (condición a cumplir) {código
// a ejecutar si se cumple}

const userName = "Irati";

if (userName === "Irati") {
  console.log("Hola Irati"); // Imprime el mensaje porque la condición se cumple
}

// ELSE

// Sintaxis básica ->
// if (condición a cumplir) {código
// a ejecutar si se cumple}
// else {
// código a ejecutar si no se cumple}

const city = "Sandefjord";

if (city === "Ludvika") {
  console.log("Velkommen til Ludvika"); // No se ejecuta porque no cumple la condición
} else {
  console.log("You've missed your flight"); // Imprime el mensaje porque la condición anterior no se cumple
}

// ELSE IF

// Sintaxis básica ->
// if (condición a cumplir) {código
// a ejecutar si se cumple
// } else if {código a ejecutar si se cumple
// esta otra condición}
// else {
// código a ejecutar si no se cumple ninguna de las anteriores}

const dogName = "Mopa";

if (dogName === "Keko") {
  console.log("¿Quiéres una chuche?");
} else if (dogName === "Mopa") {
  console.log("¿Vamos a la calle?");
} else {
  console.log("Hola, Mopa");
};

