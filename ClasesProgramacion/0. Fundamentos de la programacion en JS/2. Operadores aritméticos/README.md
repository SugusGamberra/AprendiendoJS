# OPERADORES ARITMETICOS

Estos son los simbolitos que le dicen a JS que operacion aritmetica debe realizar con los valores (ya sean literales o almacenados en variables).

## Operadores básicos

- Suma: +
- Resta: - 
- Multiplicación: *
- División: /
- Módulo o resto: % (devuelve el resto de una división)
- Exponenciación (potencias): **

## Que pasa con la concatenación y el simbolo "+"?

Nite, si se usa con 2 números hace la suma. Si se usa con un string concatena, pero ojo, JS por defecto ante numero y texto siempre decide concatenar en vez de sumar:

// Ojo!!! Operaciones con datos mixtos

let resultado = "2" + 10 + 4;
console.log(resultado);

// Esto nos mostraría 2104 porque une, no suma

// Operación matemática

const numero1 = 10;
const numero2 = 4;

let resultado = numero1 + numero2;

console.log(resultado);

console.log("El resultado es... " + resultado)

// Concatenar

let nombre = "Borja";
let apellido = "Santiago";

let nombreCompleto = nombre + apellido;
console.log(nombreCompleto);

## Asignación aritmética (abreviaturas)

- += : a = a + b 
- -= : a = a - b
- *= : a = a * b
- /= : a = a / b

## Incremento y decremento

Se usan para contar en bucles:

- ++ : Incrementa el valor en 1
- -- : Decrementa el valor en 1

## Prioridad de operadores

El orden importa más que el tamaño ñ.ñ

Per sé JS hace primero multiplicaciones, divisiones y el resto, luego hace sumas y restas. Si quieres priorizar un orden concreto debes usar paréntesis, lo que esté dentro se calculará primero!

- Normal: 10 + 5 * 2 = 20 (Primero hace 5*2 y despues suma el resultado con 10)
- Con paréntesis: (10 + 5) * 2 = 30 (Primero hace 10+5 y luego multiplica el resultado por 2)

Ya estaría todo! En un futuro haré una carpeta con ejercicios para que practiques lo que se va viendo ;3

Mientras échale un vistazo al [código](./operadoresAritmeticos.js) para que puedas ir viendo lo que explico y lo puedas probar por tu cuenta!