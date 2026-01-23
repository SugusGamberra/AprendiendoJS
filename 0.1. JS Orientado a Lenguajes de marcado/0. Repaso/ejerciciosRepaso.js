// EJERCICIOS DE REPASO JS

/* Ejercicio 1 – Conteo lógico en rango fijo

Recorre los números del 1 al 300 y calcula: 

- Cuántos números son múltiplos de 4 o de 9.
- Cuántos números no son múltiplos ni de 4 ni de 9.
- Cuántos números son múltiplos de 4 y de 9 a la vez.

Muestra los tres resultados por consola. */

let multiplos4o9 = 0;
let multiplosnt = 0;
let multiplos4y9 = 0;

for (let i = 1; i <= 300; i++) {
    if (i % 4 === 0 || i % 9 === 0) {
        multiplos4o9++;
    } else {
        multiplosnt++;
    }

    if (i % 4 === 0 && i % 9 === 0) {
        multiplos4y9++;
    }
}

console.log("Los multiplos de 4 o 9 son " + multiplos4o9);
console.log("Los multiplos de 4 y 9 son " + multiplos4y9);
console.log("Los no multiplos son " + multiplosnt);

/* Ejercicio 2 – Suma selectiva con reglas múltiples 

Calcula la suma de los números del 1 al 500, aplicando las siguientes reglas: 

- No se suman los múltiplos de 6. 
- Sí se suman los múltiplos de 4 aunque superen 250. 
- Los números divisibles entre 11 se ignoran siempre. 

Al final, muestra: 
- La suma total obtenida. 
- El número total de valores ignorados. */

let sumaTotal = 0;
let valoresIgnorados = 0;

for (let i = 1; i <= 500; i++) {
    if (i % 11 === 0) {
        valoresIgnorados++;
    } else if (i % 4 === 0) {
        sumaTotal += i;
    } else if (i % 6 === 0) {
        valoresIgnorados++;
    } else {
        sumaTotal += i;
    }
}

console.log("Suma total: " + sumaTotal);
console.log("Valores ignorados: " + valoresIgnorados);

/* Ejercicio 3 – Comprobación de número primo con parada anticipada 

Determina si el número 997 es primo. El programa debe: 
- Recorrer los posibles divisores de forma progresiva. 
- Detener el proceso en cuanto se detecte un divisor. 
- Mostrar si el número es primo o no y, en caso negativo, el divisor encontrado.*/

let numero = 997;
let esPrimo = true;
let divisorEncontrado = null;

for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
        esPrimo = false;
        divisorEncontrado = i;
        break;
    }
}

if (esPrimo) {
    console.log(numero + " es primo");
} else {
    console.log(numero + " no es primo, es divisible por " + divisorEncontrado);
}

/* Ejercicio 4 – Análisis matemático de los dígitos 

Dado el número 90817264, calcula:
- El número total de dígitos. 
- Cuántos de esos dígitos son pares. 
- La suma de todos los dígitos.
- Los cálculos deben realizarse mediante operaciones matemáticas. */

const num = 90817264;
let temp = num;

let totalDigitos = 0;
let digitosPares = 0;
let sumaDigitos = 0;

while (temp > 0) {
    let digito = temp % 10;
    totalDigitos++;
    sumaDigitos += digito;

    if (digito % 2 === 0) {
        digitosPares++;
    }

    temp = Math.floor(temp / 10);
}

console.log("Total de digitos: " + totalDigitos);
console.log("Pares: " + digitosPares);
console.log("Suma de los digitos: " + sumaDigitos);

/* Ejercicio 5 – Simulación de crecimiento con condición de parada 

Simula el crecimiento de un capital inicial de 1.000 unidades monetarias con un incremento anual del 3,5%. 
El proceso debe continuar hasta que el capital supere las 2.500 unidades.

Para cada iteración se debe mostrar: 
- Año X → Capital: Y 

Al finalizar, indica: 
- El número total de años necesarios. 
- El capital final alcanzado. */

let capital = 1000;
let year = 0;

while (capital <= 2500) {
    year++;
    capital *= 1.035;
    console.log("Año " + year + " → Capital: " + capital.toFixed(2));
}

console.log("Total de años: " + year);
console.log("CApital final alcanzado: " + capital.toFixed(2));

/* Estos ejercicios NO ESTÁN CORREGIDOS!!!
Si hay algo mal lo cambio cuando lo corrijan en clase
Pa100cia, gracias uwu*/