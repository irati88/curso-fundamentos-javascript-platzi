// -- PRIMITIVOS --

// string: Almacena cadenas de texto
let name = "Teresa";

// number: Almacena números
let age: 25;
number = number + 10; // Nuevo valor: 35
console.log(number); // Imprime 35

//  boolean: indican si algo es true o false
let isUnderage = true;
isUnderage = false; // Nuevo valor: false

// null: Representa un valor nulo
let isNull = null;

// undefined: Representa un valor no definido (lo suele dar el propio JavaScript)
let notDefined = undefined;

// symbol: Almacena valores únicos (el ID de un usuario)
let unicSymbol = Symbol("único");

// bigint: Almacena números muy grandes
let largeName = 2n;

// -- COMPLEJOS -- 

// object: Almacena colecciones de datos
let car = {
    brand: "Tesla",
    model: "Model S",
}
car.brand = "Jaguar"; // Modifica el valor original

// array: Almacena listas ordenadas de datos
let fruits = ["grapes", "apples", "bananas"]
fruits[0] = "watermelon"; // Modifica el valor original
console.log(fruits); // Imprime ["watermelon", "apples", "bananas"]

// function: Almacena funciones, bloques de código reutilizables.
function greet () {}

