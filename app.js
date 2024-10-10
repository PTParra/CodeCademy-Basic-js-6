//constant variable temp kelvin
const kelvin = 293;
//constant variable temp celsius
const celsius = kelvin - 273;
//const variable calculate fahrenheit temp y Math.floor to round decimals
const fahrenheit = Math.floor(celsius * (9 / 5) + 32);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

//const variable calculate newton temp y Math.floor to round decimals
const newton  = Math.floor(celsius * (33 / 100));
console.log(`The temperature is ${newton} degrees Newton.`);