/* MÉTODOS PARA MODIFICAR EL ARRAY ORIGINAL (Mutabilidad)

PUSH(): Añade elementos al final de un array y devuelve la nueva longitud

POP(): Elimina el último elemento del array

*/

// push()

const countries = ["USA", "Canada", "UK"];
const newCountries = countries.push("Norway", "Germany");

console.log("ARRAY ORIGINAL + NUEVOS ELEMENTOS", countries); // Imprime: ['USA', 'Canada', 'UK', 'Norway', 'Germany']
console.log("NUEVA LONGITUD", newCountries); // Imprime: 5. La nueva longitud del array

// pop()

const removedCountry = countries.pop();

console.log("ARRAY ORIGINAL - ÚLTIMO ELEMENTO", countries); // Imprime: ['USA', 'Canada', 'UK', 'Norway']
console.log("ELEMENTO ELIMINADO", removedCountry); // Imprime: Germany. El último elemento del array que se eliminó