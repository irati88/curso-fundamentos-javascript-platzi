/* 

-- FUNCIONES EN JAVASCRIPT--

Sintaxis básica:
function + nombre (parámetros opcionales) {
return o código a ejecutar
}

callback nombre función + (parámetros)
*/

// Ejemplo: Tenemos varios artículos con diferentes precios y sus descuentos. Ahora debemos crear una función que nos calcule el valor final de cada uno

// Qué quiero (Output): Precio final con descuento aplicado
// Qué datos tenemos (Input): Precio inicial y descuento a aplicar

function calculateDiscountedPrice (price, discountPercentage) {
  const discount = (price * discountPercentage) / 100
  const pricewithDiscount = price - discount

  return pricewithDiscount
}

// Definimos las variables para el precio original y el porcentaje de descuento.
const originalPrice = 100;
const discountPercentage = 20;
// Añadimos una variable que contenga la función que calcula el precio final
const finalPrice = calculateDiscountedPrice(originalPrice, discountPercentage);

// Imprimimos los resultados
console.log(`Original Price: $${originalPrice}`); // Imprime el valor de originalPrice
console.log(`Discount: ${discountPercentage}%`); // Imprime el valor de discountPercentage
console.log(`Price with discount: $${finalPrice}`); // Imprime el precio final con el descuento