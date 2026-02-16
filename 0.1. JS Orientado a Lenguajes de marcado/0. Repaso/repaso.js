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
}

// SWITCH

let fruta = "manzana";

switch (fruta) {
    case "manzana":
        console.log("El kg esta a 3€");
        break;
    case "banana":
        console.log("El kg esta a 1.5€");
        break;
    case "naranaj":
        console.log("El kg esta a 2.5€");
        break;
    default:
        console.log("No tenemos " + fruta + " disponible");
}

/* -----------------
BUCLESSSS
--------------------
*/
// for

// encontrar los números primos menores o iguales a 20 como ejemplo
let n = 20;

for (let numero = 2; numero <= n; numero++) {
    let esPrimo = true;

    // buscar divisores desde 2 hasta la raiz cuadrada desde el número
    for (let divisor = 2; divisor <= Math.sqrt(numero); divisor++) {
        if (numero % divisor  === 0) {
            esPrimo = false;
            break;
        }
    }

    if (esPrimo === true) {
        console.log(numero)
    }

}

// sumatorio de impares
let n1 = 10;
let suma = 0;

for (let i = 1; i <= n1; i++) {
    if (i % 2 !== 0) {
        suma += i;
    }
}

console.log("La suma de todos los impares hasta " + n1 + " es: " + suma);

// calcular factorial de un numero
let n3 = 5;
let factorial = 1;

for (let i = 1; i <= n3; i++) {
    factorial *= i;
}

console.log("El  factorial de " + n3 + " es: " + factorial);

// calcular fibonacci
let n4 = 10;

if ( n4 === 1) {
    console.log("0");
}

if (n4 === 2) {
    console.log("0,1");
} else {
    let a = 0;
    let b = 1;

    let fibo;

    let serie = "0, 1";

    for (let i = 3; i <= n4; i++) {
        fibo = a + b;
        serie += `, ${fibo}`;
        a = b;
        b = fibo;
    }

    console.log("El fibonacci de " + n4 + " es: " + serie);
}

// trycatch y finally

try {
    console.log("Inicio del bloque try");
    noExiste(); //esta funcion no esta definida, la ponemos pa q lance un error
    console.log("Fin del bloque try");
} catch (error) {
    console.log(error.message); // si no lo ponemos asi no te saca el mensaje de error correctamente
} finally {
    console.log("Bloque que siempre se ejecuta");
}

// buscar posiciones en cadenas
let cadena = "Hola mundo";

console.log(cadena.length); 

console.log(cadena[0]);
console.log(cadena.length - 1);

for (let i = 0; i < cadena.length; i++) {
    console.log(cadena[i]);
}

// buscar num primos usando trycatch

let inicio = 1; // prueba aqui a cambiar los valores, tipo poner un string, numero negativo o numero mayor al fin
let fin = 20;

try {
    // validar que inicio y fin sean numeros
    if (typeof inicio !== 'number' || typeof fin !== 'number') {
        throw new Error("Inicio y fin deben ser numeros"); //creamos un error para nuestro contexto
    }

    // valida q los numeros son negativos
    if (inicio < 0 || fin < 0) {
        throw new Error("Los numeros no pueden ser negativos en este ejemplo");
    }

    // valida q el inicio es menor q el fin
    if (inicio > fin) {
        throw new Error("El numero inicial no puede ser mayor que el final");
    }

    // el calculo tb puede ser susceptible de error asi q lo metemos aqui
    console.log("Numeros primos entre " + inicio + " y " + fin + ":");

    for (let numero = inicio; numero <= fin; numero++) {
        let esPrimo = true;

        if (numero <=1) {
            esPrimo = false; // el 0 o 1 no son primos
        } else {
            for (let divisor = 2; divisor <= Math.sqrt(numero); divisor++) {
                if (numero % divisor === 0) {
                    esPrimo = false;
                    break;
                }
            }
        }

        if (esPrimo) {
            console.log("El numero " + numero + " es primo");
        }
    }
} catch (error) {
    console.log(error.message);
}

//funciones

const calcularAreaCirculo = radio => Math.PI * radio * radio;

console.log(calcularAreaCirculo(5));

// recursividad

function buscarLetra(string, letra, indice) {
    // caso base: si el indice es = a la longitud del string, finiquitao
    if (indice === string.length) {
        return false; // ultima de las letras, no se puede continuar
    }

    // 2º caso base: si el caracter que esta en la posicion actual del indice es la letra buscada pues hemos terminado
    if (string[indice] === letra) {
        return true; // letra encontrada
    }

    // caso recursivo
    return buscarLetra(string, letra, indice + 1); // seguimos buscando en el siguiente indice
}

// recursividad suma de numeros hasta n

function sumatorio(n) {
    // caso base: si n es 1, la suma es 1
    if (n === 1) {
        return 1;
    } else {
        return n + sumatorio(n - 1);
    }
}

console.log(sumatorio(5));

// exponenciacion recursiva: recibe par d valores (base y exponente) y tiene q ir haciendo la potencia

function potencia(base, exponente) {
    // caso base: cualquier numero elevado a la potencia de 0 es 1
    if (exponente === 0) {
        return 1;
    } else {
        //caso recursivo
        return base * potencia(base, exponente - 1);
    }
}

console.log(potencia(5, 3));

// gestor de tareas

const GestorTareas = {
    // agregar una nueva tarea con estado incompleto x defecto
    agregarTarea: function(titulo) {
        this.titulo = false;
    },

    // marcar la tarea como completada
    completarTarea: function(titulo) {
        if (this.titulo != "undefined") {
            this.titulo = true;
        } else {
            console.log("La tarea " + titulo + " no se ha encontrado");
        }
    },

    // mostrar pendientes
    mostrarPendientes: function() {
        console.log("Tareas pendientes: ");
        for (let titulo in this.titulo) {
            console.log(titulo);
        }
    },
}