// creacion de variables

let variable = 5;

var nombre = "Sugus";

const pi = 3.14159265459;

// operadores

console.log("Los operadores en JS son +, -, *, /, %, ++, --, **, ===, !==, >, <, >=, <=, &&, ||");

console.log("La potencia de 2 elevado a 4: " + (2 ** 4));

let a = 2;

a **= 3;

console.log("Otra potencia:" + a);

console.log("1" === 1); //false
console.log("1" == 1); //true

// typeof

console.log(typeof nombre);

console.log(typeof 52);

// operador ternario

let edad = 32;

let mayorEdad = edad >= 18 ? "Es mayor de edad" : "Es menor de edad";

console.log(mayorEdad);

// coalescencia nula

const nombre1 = null;

const nombreUser = nombre1 ?? "Sin nombre";

console.log(nombreUser);

// EJERCICIOS

// Ejercicio 1: Saludo

let user = "Patri";
console.log("Hola " + user + ", bienvenida jefa!");

// Ejercicio 2: Calculos básicos

let b = 5;
let c = 2;

console.log("Suma: " + b + "+" + c + "=" + (b + c));
console.log("Resta: " + b + "-" + c + "=" + (b - c));
console.log("Multiplicación: " + b + "x" + c + "=" + (b * c));
console.log("Division: " + b + "/" + c + "=" + (b / c));

// Ejercicio 3: Intercambiar valores

let x = 10;
let y = 5;

console.log("Antes del intercambio x=" + x + ", y=" + y);

let temp;

temp = x;
x = y;
y = temp;

console.log("Intercambiados es x=" + x + ", y=" + y);

// Ejercicio 4: Calculadora IMC

var peso = 70;
var altura = 1.75;

var imc = peso / (altura ** 2);

console.log("Su IMC es: " + imc.toFixed(2));

// Ejercicio 5: Conversor temperaturas

let celsius = 30;
let farenheit = (celsius * 9/5) + 32;

console.log(celsius + "ºC son " + farenheit + "ºF");

// Ejercicio 6: Año bisiesto

var año = 2026;

let esBisiesto = (año % 4 === 0 && año % 100 !== 0) || (año % 400 === 0) ? "es bisiesto." : "no es bisiesto.";

console.log("El año " + año + " " + esBisiesto);

/*-----------------
CONDICIONALES
-------------------*/

// Ejercicio 7: "App del tiempo que te sugiere actividades según clima y hora"

let temperatura = 10;
let estaLloviendo = true;
let hora = 19;

if (estaLloviendo) {
    console.log("Hoy es un buen día para visitar un museo.");
} else if(temperatura > 25 && !estaLloviendo && hora >=6 && hora < 18) {
    console.log("El clima está perfecto para ir a la playa.");
} else if(!estaLloviendo && hora >= 18 && temperatura < 25) {
    console.log("Es un buen momento para ir al cine.");
} else {
    console.log("Es mejor quedarse en casita leyendo un libro!");
}

// Ejercicio 8: Sistema de recomendacion de itinerario basado en el clima, hora y preferencias personales de actividades

let clima = "soleado";
let horaDelDia = "mañana";
let preferenciaActividad = "airelibre";
let temperaturaActual = 16;

if (preferenciaActividad == "airelibre") {
    if (clima == "soleado") {
        if (horaDelDia == "mañana") {
            console.log("Senderismo");
        } else if (horaDelDia == "tarde") {
            console.log("picnic");
        } else {
            if (temperaturaActual < 20) {
                console.log("observar estrellas");
            } else {
                console.log("caminata nocturna");
            }
        }
    } else if (clima == "lluvioso") {
        if (horaDelDia != "noche") {
            console.log("ir a invernadero");
        } else {
            console.log("concierto techado");
        }
    }
} else {
    if (clima == "lluvioso" || clima == "nublado" && horaDelDia == "mañana") {
        console.log("spa relajante");
    } else if (clima == "lluvioso" || clima == "nublado" && horaDelDia == "tarde") {
        console.log("scape room");
    } else if (clima == "lluvioso" || clima == "nublado" && horaDelDia == "noche") {
        console.log("restaurante temático");
    } else if (clima == "soleado" && horaDelDia == "mañana") {
        console.log("arte y manualidades");
    } else if (clima == "soleado" && horaDelDia == "tarde") {
        console.log("cine");
    } else if (clima == "soleado" && horaDelDia == "noche") {
        console.log("clase de cocina");
    }

    // faltaria los ejemplos y ejercicios del switch en proxima clase
}

// ejercicio 9: proximo dia