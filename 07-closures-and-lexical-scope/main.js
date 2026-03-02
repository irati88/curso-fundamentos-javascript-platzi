/* 
CLOSURE: función que tiene acceso a variables de ámbito externo, incluso después de haberse ejecutado.

LEXICAL SCOPE: cada vez que se declara una función, crea su propio ámbito léxico, y puede acceder a las variables dentro de ese scope y a las variables en scopes superiores
*/

function outerFunction() {
  let outerVariable = "I am from outer function";

  function innerFunction() {
    console.log(outerVariable);
  }
  return innerFunction;
}

const closureExample = outerFunction();
closureExample(); // Imprime: I am from outer function

// Aquí innerFunction es un closure porque tiene acceso a la variable outerVariable

function createCounter () {
  let count = 0;

  return function() {
    count++;
    console.log(count);
  }
}

const counterA = createCounter();
counterA(); // Imprime: 1
counterA(); // Imprime: 2

const counterB =createCounter();
counterB(); // // Imprime: 1

function outer() {
  let message = "Hello, ";

  function inner(name) {
    console.log(message + name)
  }

  return inner;
}

const closureA = outer();
const closureB = outer();

closureA("Liam");
closureB("Kai");