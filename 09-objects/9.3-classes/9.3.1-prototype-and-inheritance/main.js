/*
Prototipos y Herencia en JavaScript: Construcción y Uso Práctico

PROTOTYPE: contiene los métodos y propiedades que construimos en las clases o funciones constructoras

INHERITANCE: Las sub-clases heredan todos los métodos de la clase padre. Para ello, debemos usar la keyword super().

*/

// Clase constructora Animal
class Animal {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  displaySound() {
    console.log("El animal emite un sonido");
  }
}

// Clase constructora Dog

class Dog extends Animal {
  // Añadimos "extends" y la clase padre "Animal" para poder heredar sus propiedades y métodos

  constructor(name, type, brand) {
    super(name, type); // Añadimos super() y dentro, las propiedades de la clase padre que queramos usar
    this.brand = brand; // Añadimos nueva propiedad específica de la clase Dog
  }
  displaySound() {
    console.log("El perro ladra");
  }
  run() {
    console.log(`${this.name} corre alegremente`);
  }
}

// Instancia

const dog1 = new Dog("Toby", "Perro", "Doberman");
console.log(dog1); // Imprime: Dog {name: 'Toby', type: 'Perro', brand: 'Doberman'}
dog1.run(); // Imprime el método dentro de la clase Dog: Toby corre alegremente
dog1.displaySound(); // Imprime el método dentro de la clase Dog: El perro ladra

// Crear nuevo método

dog1.newMethod = function () {
  // Aquí sólo se genera el método a la instancia dog1
  console.log("Este es un método");
};

dog1.newMethod(); // Imprime: Este es un método

// Añadir método a la clase constructora Dog

Dog.prototype.secondMethod = function () {
  console.log("Es otro nuevo método");
};

dog1.secondMethod(); // Imprime: Es otro nuevo método
