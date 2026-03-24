/*
Peticiones HTTP en Frontend: Uso de Fetch y Análisis en Network

Cuando utilizamos fetch, estamos solicitando a un servidor que nos proporcione información que luego podemos manejar y mostrar en el DOM
Usar fetch es una manera de realizar peticiones HTTP de forma asíncrona, lo que nos permite mejorar la experiencia del usuario al cargar datos sin interrumpir el flujo de la aplicación.
*/

// Petición fetch a una API que nos ayudará a generar información
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json()) // Convertimos la respuesta en un json y, sin funciona
  .then((data) => console.log(data)); // Guardamos los datos en "data" e imprime los datos en un array de objetos
