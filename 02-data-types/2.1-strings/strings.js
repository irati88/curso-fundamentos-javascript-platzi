"use strict";

let string1 = "Hola, mundo"
let string2 = "Estoy aprendiendo JavaScript"
let string3 = `${string1} feliz :)` // Comillas tumbadas para concatenar strings
let string4 = string1 + " " + string2

console.log(string1)
console.log(string2)
console.log(string3)
console.log(string4)

let phrase = "Quiero Saber Cuántos Caracteres Tiene esta Frase"
console.log("Total de caracteres", phrase.length) // Para saber cuántos caracteres tiene una frase (incluyendo espacios)
console.log(phrase.toLowerCase()) // Muestra el contenido en minúsculas
console.log(phrase.toUpperCase()) // Muestra el contenido en mayúsculas
console.log(phrase.substring(0, 6)) // Muestra una parte del string. Añadimos 2 parámetros: index inicial & index final