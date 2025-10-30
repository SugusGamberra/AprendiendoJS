# 🧮 OPERADORES ARITMÉTICOS EN JS

Estos son los simbolitos que le dicen a JS que operacion aritmetica debe realizar con los valores (ya sean literales o almacenados en variables).

---

## 🔢 Operadores básicos

| Operación | Símbolo | Ejemplo | Resultado |
| :--- | :--- | :--- | :--- |
| Suma | `+` | `2 + 3` | `5` |
| Resta | `-` | `10 - 4` | `6` |
| Multiplicación | `*` | `3 * 2` | `6` |
| División | `/` | `8 / 2` | `4` |
| Módulo o resto | `%` | `9 % 2` | `1` |
| Exponenciación (potencias) | `**` | `2 ** 3` | `8` |

## 🧩 Que pasa con la concatenación y el simbolo "+"?

JS decide según el tipo de datos:

👉 Si ambos son números ➜ **suma**  
👉 Si hay un string ➜ **concatena (une textos)**


```js
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

```

## ⚙️ Asignación aritmética (abreviaturas)

| Símbolo | Equivale a... | Ejemplo  |
| :--- | :--- | :--- |
| `+=`    | `a = a + b`   | `x += 5` |
| `-=`    | `a = a - b`   | `x -= 3` |
| `*=`    | `a = a * b`   | `x *= 2` |
| `/=`    | `a = a / b`   | `x /= 4` |


## 🔁 Incremento y decremento

Se usan para contar en bucles:

- ++ : Incrementa el valor en 1 (ej: i++)
- -- : Decrementa el valor en 1 (ej: i--)

## 🧠 Prioridad de operadores

El orden importa más que el tamaño 😏

Per sé JS hace primero multiplicaciones, divisiones y el resto, luego hace sumas y restas. Si quieres priorizar un orden concreto debes usar paréntesis, lo que esté dentro se calculará primero!

- Normal: 10 + 5 * 2 = 20 (Primero hace 5*2 y despues suma el resultado con 10)
- Con paréntesis: (10 + 5) * 2 = 30 (Primero hace 10+5 y luego multiplica el resultado por 2)

Ya estaría todo! En un futuro haré una carpeta con ejercicios para que practiques lo que se va viendo ;3

Mientras échale un vistazo al [código](./operadoresAritmeticos.js) para que puedas ir viendo lo que explico y lo puedas probar por tu cuenta! 😉