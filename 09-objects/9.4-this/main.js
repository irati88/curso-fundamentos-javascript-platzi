/*
Uso de "this" en Clases y Funciones Constructoras

THIS: Palabra reservada que hace referencia al objeto o clase que se está construyendo
*/

class Student {
  constructor(name, age) {
    this.name = name; // "this" hace referencia al objeto Student
    this.age = age;
  }
}

// Instancia
const student1 = new Student("Josh", 18);
console.log(student1); // Imprime: Student {name: 'Josh', age: 18}

// Método

student1.newMethod = function() {
  console.log(`Mi nombre es ${this.name}`); // "this" hace referencia a la instancia student1
};

student1.newMethod(); // Imprime: Mi nombre es Josh