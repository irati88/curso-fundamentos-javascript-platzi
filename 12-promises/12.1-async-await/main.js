/*
ASYNC & AWAIT: Permite manejar promesas de manera más legible y estructurada

Async: Al declarar una función con async, siempre devuelve una promesa

Await: Hace que JS espere que una promesa se resuelva antes de continuar con el siguiente bloque de código
*/

function fetchData() {
  fetch("https://rickandmortyapi.com/api/character") // Hacemos la petición a la API
    .then((response) => response.json()) // Si funciona, convierte la respuesta a un JSON
    .then((data) => console.log(data)) // Si funciona, convierte la respuesta en datos y los imprime
    .catch((error) => console.log(error)); // Devuelve error si falla la petición
}

fetchData();

// Ejemplo previo usando async/await

async function fetchData() {
  try {
    let response = await fetch("https://rickandmortyapi.com/api/character");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

fetchData();

/* Realizar múltiples peticiones HTTP al interactuar con varias APIs a la vez usando for await...of, 
combinando async y await para ejecutar promesas de manera asíncrona.

*/

const urls = [
  "https://rickandmortyapi.com/api/character",
  "https://rickandmortyapi.com/api/location",
  "https://rickandmortyapi.com/api/episode",
];

// Creamos la función asíncrona
async function fetchNewData() {
  try {
    for await (let url of urls) {
      // Por cada url que exista en la variable urls, haz lo siguiente:
      let response = await fetch(url); // Guarda la respuesta de cada fetch que se le haga a las urls
      let data = await response.json(); // Convierte la respuesta en un json y guárdala en la variable data
      console.log(data); // Imprime los datos
    }
  } catch (error) { // Si la petición falla, dame un error
    console.log(error); // Imprime el error
  }
}


