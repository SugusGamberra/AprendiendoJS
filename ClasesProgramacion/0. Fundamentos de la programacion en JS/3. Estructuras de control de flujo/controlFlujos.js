/* Estructuras de control de flujo en JavaScript

Operadores que usamos para el control de flujo

- Mayor que: >
- Mayor o igual que: >=
- Menor que: <
- Menor o igual que: <=
- Estrictamente igual que: ===
- Estrictamente diferente que: !== 

Operadores lógicos:

- Y: &&
    - (edad > 18 && tieneCarnet === true) // es verdadero (true) si ambos son true
- O: `
    - (edad > 18 ` tieneCarnet === true) // Al menos una debe ser true
- No: !
    - !esValido // Si esValido es true, !esValido seria false

If - Else If - Else

Si vas cambiando el valor de edad y ejecutando el código, verás cómo cambia la salida en consola:
*/

let edad = 20;
let tieneCarnet = true;

if (edad >= 18 && tieneCarnet === true) {
    console.log("Puedes conducir.");
} else if (edad < 18) {
    console.log("Eres menor de edad, no puedes conducir.");
} else {
    console.log("No tienes carnet de conducir.");
}

// Bucles: for, while, do...while

// Bucle for

for (let i = 0; i < 5; i++) {
    console.log("Iteración número: " + i);
}

// Bucle while

let contador = 0;

while (contador < 5) {
    console.log("Contador es: " + contador);
    contador++;
}

// Bucle do...while

let numero = 0;

do {
    console.log("Número es: " + numero);
    numero++;
} while (numero < 5);

// Switch

const diaSemana = "Martes";

switch (diaSemana) {
    case "Lunes":
        console.log("Empezamos la tortura...");
        break;
        
    case "Martes":
    case "Miércoles":
    case "Jueves":
        console.log("Vamos aguantando, hay esperanzas en el viernes uwu");
        break; 

    case "Viernes":
        console.log("Sale plan o klok?");
        break;

    case "Sábado":
    case "Domingo":
        console.log("Días de relax :3");
        break;

    default:
        console.log("Ese no es un día válido.");
}