// Operadores aritméticos

// Operadores básicos:

console.log(5+3);
console.log(10-4);
console.log(2*6);
console.log(15/3);
console.log(10%3);
console.log(2**3);

// Cuidado con los datos mixtos!!

let resultado = "2" + 10 + 4;
console.log(resultado);

// Concatenar

let nombre = "Illidan";
let apellido = "Tempestira";

let nombreCompleto = nombre + apellido;
console.log(nombreCompleto);

// Cálculo bien hecho

let numero1 = 10;
let numero2 = 4;

let resultadoSuma = numero1 + numero2;

console.log("El resultado es... " + resultadoSuma);

// Operadores abreviados

let puntuacion = 100;

let suma10 = puntuacion += 10;

let resta5 = puntuacion -= 5;

let duplicacion = puntuacion *= 2;

let mitad = puntuacion /= 2;

console.log("Tu puntuación es " + puntuacion + ". Sumamos 10 = " + suma10 + ". Restamos 5 = " + resta5 + ". Duplicamos = " + duplicacion + " y reducimos a la mitad = " + mitad);

// Incremento

let contador = 0;

console.log(contador);

contador++;
contador++;

console.log(contador);

// Decremento

contador--;

console.log(contador);