/*

Estructura de datos de un Objeto:

Propiedad (Key) = Valor (Value)

Sintaxis básica: 
objeto = {
    propiedad: valor,
    propiedad2: valor,
    propiedad3: valor

    Métodos: acción()
}

*/

const user = {
  name: "Bianca",
  age: "19",
  gender: "female",
  address: {
    street: "Via Toledo, 2",
    city: "Napoli",
  },
  greeting() {
    console.log(`Hola, mi nombre es ${user.name}`); // Imprime el método greeting(): Hola, mi nombre es Bianca
  }
};

console.log(user); // Imprime el objeto: {name: 'Bianca', age: '19', gender: 'female', address: {…}, greeting: ƒ}
user.greeting(); 

// AGREGAR PROPIEDADES AL OBJETO

user.phoneNumber = "902 10 10 10"; // Mencionamos el objeto + punto + nuevaPropiedad

console.log("NUEVA PROPIEDAD DEL OBJETO", user.phoneNumber); // Imprime: 902 10 10 10

// AGREGAR MÉTODOS AL OBJETO

user.farewell = () => { // Mencionamos el objeto + punto + nuevo Método + arrow function
    console.log(`Adiós, ${user.name}`); // Imprime: Adiós, BIanca
};

user.farewell(); 

// BORRAR PROPIEDADES O MÉTODOS

delete user.phoneNumber; // Usamos la palabra reservada "delete" + objeto + punto + propiedad a borrar

delete user.farewell; // Usamos la palabra reservada "delete" + objeto + punto + método a borrar