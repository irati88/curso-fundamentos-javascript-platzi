/*
PROMESAS: Transforman el código de síncrono a asíncrono

Tienen 3 estados:
- Pending: Cuando se crea la promesa -> Promise()
- Fullfiled: Cuando se resuelve la promesa con éxito
- Rejected: Cuando la promesa no se resuelve

Manejan 2 tipos de Callback:
- Resolve: Cuando la promesa se resuelve con éxito
- Reject: Cuando la promesa no se puede resolver, devuelve un error

Hay 2 métodos:
- then(): Se ejecuta cuando la promesa se resuelve (estado: fullfilled - callback: resolve)
- catch(): Se ejecuta cuando la promesa no se resuelve. Aquí obtenemos el error para entender qué falló
*/

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let operationSuccessful = true;
    if (operationSuccessful) {
      resolve("La operación se ha realizado con éxito");
    } else {
      reject("La operación ha fallado");
    }
  }, 2000); // Tiempo que damos a setTimeout para que resuelva el if (2")
});

console.log(promise); // Imprime: Promise {<pending>}
// [[Prototype]]: Promise
// [[PromiseState: "fulfilled"]]
// [[PromiseResult]]: "La operación se..."

promise
  .then((successMessage) => {
    console.log(successMessage);
  })
  .catch((errorMessage) => {
    console.log(errorMessage);
  });
