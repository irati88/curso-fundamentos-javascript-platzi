// switch (expresión) {
//   case valor1:
//     //Código a ejecutar
//     break;
//   case valor2:
//     // código a ejecutar
//     break;
//   case valor3:
//     // código a ejecutar
//     break;
//   default:
//   // código a ejecutar
// }

// Vamos a buscar productos de una tienda

let product = "Tofu";

// Si el producto existe, devuélveme X
switch (product) { // Compara las expresiones de manera extricta, como un === en valor y tipo de dato
  case "Hamburguesa":
    console.log("La hamburguesa cuesta 4.50€/uni"); // Si existe "Hamburguesa", devuélve el precio
    break;
  case "Acelgas":
    console.log("Las acelgas cuestan 1.5€/kg"); // Si existe "Acelgas", devuelve el precio
    break;
  case "Fresas":
    console.log("Las fresas cuestan 7.95€/kg"); // Si existe "Fresas", devuelve el precio
    break;
  // 2 productos con el mismo precio - Caso compartido
  case "Naranjas":
  case "Manzanas":
    console.log("Las naranjas y las manzanas cuestan 2€/kg");
    break;
  default:
    console.log(`Lo siento, no tenemos ${product}`); // Como no hay ningún case que diga "Tofu", nos imprime este mensaje
}

console.log("¿Quieres añadir algo más?");
