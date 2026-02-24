// -- ADIVINA EL NÚMERO --

// Constante que nos dará un número random en un rango del 1 al 10
const secretNumber = Math.floor(Math.random() * 10 + 1);

// ** Math.floor() -> Redondea un número flotante (decimal) hacia abajo, hacia su entero más próximo
// ** Math.random() -> Para obtener un número aleatorio

// Constante con la que jugaremos y, mediante el prompt, preguntaremos al navegador
const playerNumber = parseInt (prompt("Adivina el número secreto entre el 1 y el 10"));

console.log (`Este es el número con el que juegas ${playerNumber}`);

if (playerNumber === secretNumber) {
  console.log("¡Enhorabuena, lo has adivinado!");
} else if (playerNumber < secretNumber) {
  console.log("Oooh, el número es muy bajo, inténtalo de nuevo")
} else {
  console.log("El número es muy alto, inténtalo de nuevo")
}