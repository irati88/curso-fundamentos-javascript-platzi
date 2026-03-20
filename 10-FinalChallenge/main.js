/*
Requerimientos del reto:

1- El usuario debe poder ingresar usuario & contraseña
2- El sistema debe ser capaz de validar si el usuario & contraseña existen en la DDBB
3- Si los datos son correctos, el sistema mostrará un mensaje de bienvenida y el timeline del usuario
4- Si los datos son incorrectos, el sistema mostrará un mensaje de error y no mostrará ningún timeline
*/

const usersDatabase = [
  {
    username: "andres",
    password: "123",
  },
  {
    username: "caro",
    password: "456",
  },
  {
    username: "mariana",
    password: "789",
  },
];

const usersTimeline = [
  {
    username: "Estefany",
    timeline: "¡Me encanta JavaScript!",
  },
  {
    username: "Óscar",
    timeline: "Bebeloper es lo mejor",
  },
  {
    username: "Mariana",
    timeline: "A mí me gusta más el café que el té",
  },
  {
    username: "Andrés",
    timeline: "Yo hoy no quiero trabajar",
  },
];

const username = prompt("¿Cuál es tu nombre de usuario?");
const password = prompt("¿Cuál es tu contraseña?");

// Iteramos el array usersDatabase para validar si los datos coinciden con lo que pone el usuario
// Usaremos un bucle for usando username y password como parámetros y un if para validar los datos

function existingUser(username, password) {
  for (let i = 0; i < usersDatabase.length; i++) {
    // Mientras i sea menor a la longitud de la BBDD (tiene 3 elementos) se incrementa 1
    if (
      usersDatabase[i].username === username && // Validar que el atributo username en la posición i coincida con lo que pone el usuario
      usersDatabase[i].password === password // Validar que el atributo password en la posición i coincida con lo que pone el usuario
    ) {
      return true;
    }
  }
  return false; // Si dejamos el return dentro del else, el bucle se rompe si la primera validación no se cumple
}

// existingUser(username, password);

function signIn(username, password) {
  if (existingUser(username, password)) {
    // llamamos a la función existingUser como parámetro para validar que username y password sean true
    alert(`Bienvenido a tu cuenta ${username}`); // Mostramos mensaje de bienvenida
    console.log(usersTimeline);
  } else {
    alert("Tu nombre de usuario o contraseña no son válidos");
  }
}

signIn(username, password);
