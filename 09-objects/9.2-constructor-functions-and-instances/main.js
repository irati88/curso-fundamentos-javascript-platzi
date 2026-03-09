/*
Función constructora y gestión de instancias

FUNCIÓN CONSTRUCTORA: Forma de crear múltiples objetos con estructura similar sin necesidad de duplicar código.

- Nombre en mayúscula: Iniciamos el nombre de la función constructora con una letra mayúscula para indicar que esta función se utilizará para crear objetos.
- Estructura como una función regular: Aunque tiene nombre específico, la estructura es similar a una función regular, pasando los datos necesarios como parámetros.

Sintaxis básica:
function + nombre del objeto en mayúsculas(Las propiedades del objeto como parámetros) {
     propiedad = valor 
}
*/

function Dog(name, brand, color, dateOfBirth, gender) {
  this.name = name;
  this.brand = brand;
  this.color = color;
  this.dateOfBirth = dateOfBirth;
  this.gender = gender;
}

// Instancia

const dog1 = new Dog("Mopa", "Caniche", "Beige", "23/08/2014", "Hembra");
console.log("Objeto 1", dog1); // Imprime: Dog {name: 'Mopa', brand: 'Caniche', color: 'Beige', dateOfBirth: '23/08/2014', gender: 'Hembra'}

const dog2 = new Dog("Keko", "Pug", "Canela", "03/04/2011", "Macho");
console.log("Objeto 2", dog2); // Imprime: Dog {name: 'Keko', brand: 'Pug', color: 'Canela', dateOfBirth: '03/04/2011', gender: 'Macho'}

const dog3 = new Dog("Tom", "Pinscher", "Negro", "24/05/2014", "Macho");
console.log("Objeto 3", dog3);

// Añadir propiedades a la función

Dog.prototype.weight = "5kg"; // No se imprime dentro del objeto, sino en el prototype

dog3.weight = "5kg";
console.log("Objeto3 + nueva propiedad", dog3);

// Añadir métodos

Dog.prototype.greeting = function() {
    console.log(`Hola, mi perro se llama ${this.name} y nació el ${this.dateOfBirth}. Es de raza ${this.brand}, color ${this.color} y pesa ${this.weight}`);
}

dog1.greeting();
dog2.greeting();