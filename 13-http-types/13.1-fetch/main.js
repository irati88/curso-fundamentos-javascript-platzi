/*
Peticiones HTTP en Frontend: Uso de Fetch y Análisis en Network

Cuando utilizamos fetch, estamos solicitando a un servidor que nos proporcione información que luego podemos manejar y mostrar en el DOM
Usar fetch es una manera de realizar peticiones HTTP de forma asíncrona, lo que nos permite mejorar la experiencia del usuario al cargar datos sin interrumpir el flujo de la aplicación.
*/

// Petición fetch a una API que nos ayudará a generar información
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json()) // Convertimos la respuesta en un json y, sin funciona
  .then((data) => console.log(data)); // Guardamos los datos en "data" e imprime los datos en un array de objetos

// Peticiones en HTTP: Fetch, GET

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

// Peticiones en HTTP: Fetch, POST

/*
Si rellenamos los inputs de "Title" y "Content" y hacemos click en "POST Content", debería enviar un POST (información al servidor)
Debemos evitar que cada vez que hagamos click en "POST Content" la página se refresque
Y asegurarnos de que la info de los inputs se guarde y se envíe en el request y podamos ver la petición en el "Network" del DevTools
*/

async function createPost(title, content) {
  const userId = Math.random(); // Variable para general de manera aleatoria el userID de cada objeto, como sale en la estructura de la API
  const post = {
    // Creamos la estructura de lo que se enviará al servidor
    title: title,
    body: content,
    userId: userId,
  };

  // Hacemos el request llamando a la función que generará el fetch, con los parámetros (method, url, data)
  sendHTTPrequest("POST", "https://jsonplaceholder.typicode.com/posts", post);
}

// Generamos el evento para submit

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Para evitar que la página se refresque cada vez
  // Para acceder a los elementos del form (title y content)
  const title = event.currentTarget.querySelector("#title").value;
  const content = event.currentTarget.querySelector("#content").value;
  console.log(title, content); // Mostrará el valor que añadamos en los inputs

  createPost(title, content);
});

// Peticiones en HTTP: Fetch, DELETE

/*
Al trabajar con APIs, si queremos eliminar registros desde el frontend, podemos utilizar un patrón llamado "delegation pattern". Esto significa que agregaremos el evento al padre de las tarjetas (en el HTML sería "posts-container"). Para eso debemos entender cuál es el ID del elemento que queremos borrar
*/

// Generamos el evento para el click de postList
postList.addEventListener("click", (event) => {
  console.log(event); // Imprime el evento PointerEvent al hacer click al botón DELETE Content

  // Validación de: si el elemento/target al que doy click tiene como tagName "button", ejecutamos lo siguiente
  if (event.target.tagName === "BUTTON") {
    // Creamos variable para obtener el ID del post
    const postId = event.target.closest("article").id; // //necesitamos extraer el id para saber qué post hay que eliminar, a su vez tomamos el article más cercano al botón y así eliminamos el mismo

    console.log(postId); // Imprime el ID del elemento al que dimos click

    // Invocamos a la función que genera el fetch actualizando method a "DELETE", la url previa y para data, dentro de la url añadimos el valor dinámico de postId
    sendHTTPrequest(
      "DELETE",
      `https://jsonplaceholder.typicode.com/posts/${postId}`,
    );
  }
});

// Manejo de IDs en JavaScript para eliminar artículos del DOM

/*
El ID de cada post viene directamente en la respuesta del servidor cuando hacemos una petición GET (verlo en la pestaña Network del navegador, en Response o Preview)

¿Cómo se asigna el ID a cada elemento del DOM?
Una vez que obtenemos la respuesta del servidor, generamos dinámicamente los elementos HTML con JavaScript:

- Se recorre la lista de posts con un bucle
- Por cada post, se crea un elemento <article> que funciona como contenedor.
- A ese contenedor se le asigna el atributo id con el valor que viene de la respuesta.
*/