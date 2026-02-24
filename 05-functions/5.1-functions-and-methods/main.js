// -- FUNCIONES vs MÉTODOS -- //

function sum(a, b) {
  return a + b;
}
sum(3, 5);
console.log("Tipo de dato de sum:", typeof sum); // Imprime "function"

// -> Funciones y sus capacidades:

// 1 - Pasar funciones como argumentos -> callback

function a() {}
// Ahora pasamos la función a como parámetro a la función b
function b(a) {}
b(a); // la función B, pasando A como callback

// 2- Retornar funciones: que una función devuelva otra función

function a() {
  function b() {
    console.log("Función B");
  }
  return b;
}

// 3- Asignar funciones a variables -> Expresión de función

const a = function () {}; // El nombre de la función va implícito, no tenemos que ponerlo

// 4- Tener propiedades y métodos

function a() {}
const object = {};
a.call(object); // .call sería el método

// 5- Anidar funciones -> Nested functions: permite a la interna acceder a las variables y parámetros de la externa

function a() {
  function b() {
    function c() {}
    c(); // Invocamos la función c
  }
  b(); // Invocamos la función b
}
a(); // Invocamos la función a

// 6- Almacenar funciones en objetos

// Creamos el objeto rocket con sus propiedades (name y launchMessage)
// Añadimos como valor de launchMessage una función que sería el método

const rocket = {
    name: "Falcon 9",
    launchMessage: function launchMessage () {
        console.log("🚀");
    }
}

rocket.launchMessage(); // Ejecutamos la función