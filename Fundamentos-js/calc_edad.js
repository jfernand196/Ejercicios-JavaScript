// Escribe un programa que le pida al usuario su año de nacimiento e imprima su edad actual 
// en la consola con la frase "Tienes X años"
let born = parseInt(prompt('What year is your born?'))
let age = 2021 - born

console.log(`Tienes ${age} años`);