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