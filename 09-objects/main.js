/* 

OBJETOS: Estructura de datos que permite agrupar información en un formato de "propiedad = valor" (key / value)
También pueden ejecutar acciones a través de métodos, como interacciones o cálculos

Sintaxis básica: 
objeto = {
    propiedad: valor,
    propiedad2: valor,
    propiedad3: valor
    Métodos: acción()
}

*/

const person = {
  name: "Lilith",
  age: 30,
  address: {
    street: "San Juan Kalea 22",
    city: "Donostia",
  },
  // Añadimos el método para la acción de saludar
  greet() {
    console.log(`Hola, mi nombre es ${person.name}, tengo ${person.age} años y vivo en ${person.address.street}, ${person.address.city}`);
  },
};

person.greet(); // Invocamos el objeto person y la función greet para mostrar la interacción del console.log
