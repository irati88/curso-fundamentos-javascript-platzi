/* 
VAR
Scope: Function
Hoisting: Sí
Reasignable: Sí
Redeclarable: Sí

LET
Scope: Block
Hoisting: No
Reasignable: Sí
Redeclarable: No

LET
Scope: Block
Hoisting: No
Reasignable: No
Redeclarable: No
*/

/* BLOCK

function example () {...}
for (let i=0; i < array.length; i++) {...}
while (count < 5) {...}
if (count === 2) {...}
{...}
*/

// Declaración de la variable = Asignación de la variable
const productName = "Smartphone";
const price = 499;
const brand = "TechCo";

function getProductDetails() {
  const productName = "Laptop";
  const price = 899;

  return `The ${productName} costs ${price}€ and is from the brand ${brand}.`;
}

console.log(getProductDetails()); // Imprime: The Laptop costs 899€ and is from the brand TechCo.
// Coge las variables productName y price de la función y brand de la variable fuera de la función

console.log(
  `The ${productName} costs ${price}€ and is from the brand ${brand}.`,
);
// Imprime: The Smartphone costs 499€ and is from the brand TechCo.
// Coge las variables productName, price y brand de fuera de la función

// SCOPE CHAIN: Podemos ir del contexto local al global pero no al revés
const userPoints = 150; // Contexto global

function checkAccess() {
  // Contexto local (bloque)
  if (userPoints < 100) {
    // Contexto local (bloque)
    const message = "Access denied: Insufficient points!";
    return message;
  } else {
    // Contexto local (bloque)
    const message = "Access granted: Enjoy the premium features!";
    return message;
  }
}

console.log(checkAccess()); // Contexto global

const globalVariable = "🌍";

function localOne() {
  console.log("GLOBAL 1: ", globalVariable);
  // console.log("LOCAL 1: ", localVariable);

  function localTwo() {
    const carrot = "🥕";
    console.log("LOCAL 2: ", carrot);
  }

  function localThree() {
    console.log("LOCAL 3: ", carrot);
  }

  localTwo();
  localThree();
}

console.log(localOne());

// GLOBAL 1: 🌍
// ReferenceError: localVariable is not defined

// Si comentamos el segundo console.log y corremos la función localTwo el resultado sería:

// GLOBAL 1:  🌍
// LOCAL 2:  🥕
// ReferenceError: carrot is not defined 


