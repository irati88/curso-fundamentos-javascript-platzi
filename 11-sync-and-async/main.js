/* 
SÍNCRONA vs ASÍNCRONA

-- JavaScript Engine --

Memory Heap: Almacenamiento de datos. Donde se guardan todas las variables, funciones y objetos que creamos

Call Stack (Pila de ejecución): Donde JavaScript guarda qué funciones se están ejecutando ahora mismo.
Funciona como una pila de platos = El último que entra → es el primero que sale (LIFO)

*/

function saludar() {
  console.log("Hola");
}

function iniciar() {
  saludar();
}

iniciar();

/* 
1- iniciar() entra al stack
2- Dentro, llama a saludar() → se añade encima
3- saludar() termina → sale
4- iniciar() termina → sale
*/


/* SÍNCRONA: Es como funciona JS. Se ejecuta en orden y cuando la anterior línea haya terminado

Ejemplo - En una cafetería:
1- Pides el café
2- Esperas a que lo preparen
3- Pagas
4- Te marchas

No puedes hacer ninguna acción hasta terminar la anterior, como marcharte y luego pedir el café
*/

function makeCoffee() {
  console.log("Preparando café...");
}

function pay() {
  console.log("Pagando...");
}

makeCoffee();
pay();

/* ASÍNCRONA: La Web API es lo que hará que JS se comporte de manera asíncrona. 
Permite que algunas tareas se hagan en segundo plano sin bloquear el resto. El programa sigue ejecutándose mientras espera.

Ejemplo - Pedir comida y sentarte a esperarla:

1- Pides un café
2- Te dicen: “tarda 5 minutos”
3- Te sientas o haces otra cosa
4- Cuando está listo, te llaman

*/

console.log("Pido café");

setTimeout(() => {
  console.log("Tu café está listo"); // Se imprime cuando pase el tiempo establecido
}, 5000);

console.log("Me siento a esperar");
