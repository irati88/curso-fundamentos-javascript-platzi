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



const myUsername = function () {
  if (usersDatabase.username && usersDatabase.password) { 
    console.log(`Hola ${usersDatabase.username}. ¿En qué estás pensando? ${usersTimeline.timeline}`);
  } else {
    console.log("Lo siento, tu nombre de usuario y contraseña son incorrectos");
  }
};

myUsername();

/*
A REVISAR:

- Obtener lo que el usuario escribe en los inputs
- Buscar en usersDatabase si existe un usuario con esos datos
- Si existe → mostrar bienvenida + timeline
- Si no existe → mostrar error

*/