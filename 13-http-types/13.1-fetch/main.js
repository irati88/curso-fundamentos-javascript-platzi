/*
Peticiones HTTP en Frontend: Uso de Fetch y Análisis en Network

Cuando utilizamos fetch, estamos solicitando a un servidor que nos proporcione información que luego podemos manejar y mostrar en el DOM
Usar fetch es una manera de realizar peticiones HTTP de forma asíncrona, lo que nos permite mejorar la experiencia del usuario al cargar datos sin interrumpir el flujo de la aplicación.
*/

// Petición fetch a una API que nos ayudará a generar información
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json()) // Convertimos la respuesta en un json y, sin funciona
  .then((data) => console.log(data)); // Guardamos los datos en "data" e imprime los datos en un array de objetos

// Peticiones en HTTP: Fetch, GET, POST y DELETE

// Variables de los elementos

const listElement = document.querySelector(".posts");
const postTemplate = document.querySelector(".single-post");
const form = document.querySelector("#new-post form");
const fetchButton = document.querySelector("#available-posts button");
const postList = document.querySelector("#posts-container");

function sendHTTPrequest(method, url, data) {
  return fetch(url, {
    method: method,
    body: JSON.stringify(data), // Convierte el objeto en Json
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    return response.json();
  });
}

async function fetchPosts() {
  const responseData = await sendHTTPrequest(
    "GET",
    "https://jsonplaceholder.typicode.com/posts",
  );
  console.log(responseData);
  const listOfPosts = responseData; // Creamos una variable nueva con la respuesta del fetch para no modificar la original

  /* Iteramos el array con un FOR...OF para que por cada uno de los objetos que devuelve, podamos extraer datos específicos (title , body...) e inyectarlos en el DOM/HTML:

  Por cada post de la lista de posts:
  - Crea un nuevo elemento "article" con un id y una clase para el css
  - Crea un elemento "h2" con el contenido de texto de la clave "title" del objeto
  - Crea un elemento "p" con el contenido de texto de la clave "body" del objeto
  - Crea un elemento "button" con el texto "DELETE Content"

  Los añadimos con un .append a la variable de postContainer, que sería el article con su info 
  */
  for (const post of listOfPosts) {
    const postContainer = document.createElement("article");
    postContainer.id = post.id;
    postContainer.classList.add("post-item");

    const title = document.createElement("h2");
    title.textContent = post.title;

    const body = document.createElement("p");
    body.textContent = post.body;

    const button = document.createElement("button");
    button.textContent = "DELETE Content";

    postContainer.append(title);
    postContainer.append(body);
    postContainer.append(button);

    listElement.append(postContainer);
  }
}

// Generamos la interacción para que, cuando hagamos click en GET Content, aparezca visualmente en el navegador

fetchButton.addEventListener("click", fetchPosts);