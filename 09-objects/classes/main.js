/*
Clases en JavaScript: Creación y Uso de Objetos con Sintaxis Moderna

Sintaxis básica:

class + Objeto {
    constructor(var1, var2) {
        this.key1 = var1;
        this.key2 = var2;
    }
    método() {
    detalle de la función
    }
}

const variable = new + nombre de la clase ("valores de cada parámetro");

variable.método();

*/

// Creamos la clase con su constructor
class Book {
  constructor(title, author, genre, publicationYear) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.publicationYear = publicationYear;
  }
  // Creamos el método
  displayDetails() {
    console.log(`Title: ${this.title}`);
    console.log(`Author: ${this.author}`);
    console.log(`Publication year: ${this.publicationYear}`);
  }
}

// Creamos las instancias

const book1 = new Book(
  "Words of Radiance",
  "Brandon Sanderson",
  "Fantasy",
  2014,
);

book1.displayDetails(); // Imprime los datos de la constante book1
