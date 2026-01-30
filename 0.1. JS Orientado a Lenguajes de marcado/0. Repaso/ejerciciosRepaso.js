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

// mi forma
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

// la forma del profe

/* 
for (let i = 1; i <= 300; i++) {
    // comprobar si es multiplo de 4
    let esMultiplo4 = (i % 4 === 0);
    // comprobar si es multiplo de 9
    let esMultiplo9 = (i % 9 === 0);

    if (esMultiplo4 || esMultiplo9) {
        multiplosnt++;
    }

    if (esMultiplo4 || esMultiplo9) {
        multiplos4o9++;
    }

    if (esMultiplo4 && esMultiplo9) {
        multiplos4y9++;
    }
}
 */


/* Ejercicio 2 – Suma selectiva con reglas múltiples 

Calcula la suma de los números del 1 al 500, aplicando las siguientes reglas: 

- No se suman los múltiplos de 6. 
- Sí se suman los múltiplos de 4 aunque superen 250. 
- Los números divisibles entre 11 se ignoran siempre. 

Al final, muestra: 
- La suma total obtenida. 
- El número total de valores ignorados. */

// mi forma
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

// forma del profe

/*
for (let i = 1; numero <= 500; i++) {
// si es divisible entre 11 se ignora
    if (i % 11 === 0) {
        valoresIgnorados++;
        continue;
    }

    if (i % 6 && i % 4 === 0) {
        sumaTotal += i;
        continue;
    }

    if (i % 6 === 0) {
        valoresIgnorados++;
        continue;
    }

    // si no se ha ignorado
    sumaTotal += i;
}
*/

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

// mi forma y la del profe son iguales
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

// forma del profe con bucle while

/*
// probar divisores desde 2 hasta numero - 1
while (esPrimo && divisor < numero) {
    if (numero % divisor === 0) {
        esPrimo = false;
        divisorEncontrado = divisor;
        break;
    }
    divisor++;
}

if (esPrimo) {
    console.log(numero + " es primo");
} else {
    console.log(numero + " no es primo, es divisible por " + divisorEncontrado);
}

*/

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

// mi forma y la del profe es la misma, lo q no usa una variable tmeporal, yo la uso xk al quitarla da error de ejecucion
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

// mi forma y la del profe es igual
while (capital <= 2500) {
    year++;
    capital = capital + (capital * 0.035);
    console.log("Año " + year + " → Capital: " + capital.toFixed(2));
}

console.log("Total de años: " + year);
console.log("CApital final alcanzado: " + capital.toFixed(2));

/* Estos ejercicios estan ya corregidos por el profesor!!
Puedes tomarlos por referencia :3
*/

// trycatch y finally

/* Ejercicio 1: Suma de Dígitos hasta que sea un Dígito Único

Dados un número inicial n, suma sus dígitos repetidamente hasta que el resultado sea un solo dígito. 
Las comprobaciones de Errores son las siguientes:

- Validar que n sea un número. Usa typeof n para asegurarte de que la entrada es de tipo number.
- Validar que n sea un número entero. Utiliza Number.isInteger(n) para evitar tratar con números decimales.
- Validar que n sea un número positivo. Asegúrate de que n >= 0, ya que el ejercicio no tiene sentido para números negativos. */

// mi forma
let n = 38;

try {
    // validar q sea numero
    if (typeof n !== 'number') {
        throw new Error("El valor introducido debe ser un numero.");
    }

    // validar q sea entero
    if (!Number.isInteger(n)) {
        throw new Error("El valor introducido debe ser un numero entero");
    }

    // validar q sea positivo
    if (n < 0) {
        throw new Error("El valor introducido debe ser un numero positivo");
    }

    console.log("Numero valido, procediendo la suma de " + n);

    while (n > 9) {
        let suma = 0;
        let cadena = n.toString();

        for (let i = 0; i < cadena.length; i++) {
            suma += parseInt(cadena[i]);
        }

        console.log("Suma parcial: " + suma);
        n = suma;
    }

    console.log("Resultado final: " + n);
} catch (error) {
    console.log(error.message);
} finally {
    console.log("Ejecucion finalizada");
}

// forma simplificada a lo dado en clases
let number = 38.8;

try {
    if (typeof number !== 'number') {
        throw new Error("No es un numero el valor introducido");
    }

    if (number % 1 !== 0) {
        throw new Error("No es numero entero");
    }

    if (number < 0) {
        throw new Error("No es un numero positivo");
    }

    console.log("Calculando " + number);

    while (number >= 9) {
        let suma = 0;

        let cadena = number + "";

        for (let i = 0; i < cadena.length; i++) {
            let digito = cadena[i] * 1;
            suma = suma + digito;
        }

        console.log("Suma parcial: " + suma);
        number = suma;
    }

    console.log("Resultado final: " + number);
} catch (error) {
    console.log(error.message);
} finally {
    console.log("Fin ejecucion");
}