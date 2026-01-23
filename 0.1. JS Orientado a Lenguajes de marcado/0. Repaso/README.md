# 🧠 Introducción a JS

JS nos sirve en **lenaguaje de marcados** para darle vidilla a las páginas web. Se integra directamente con **HTML** y puede acceder al `DOM`, es decir, a la estructura de etiquetas para **modificar contenido de forma dinámica**.

> Por ejemplo, en una web genérica de productos, los datos (nombres, precios, etc) llegan desde XML o JSON.
> JS **modifica** el contenido mostrandolo sin recargar la página!

Las características claves son:
- **Lenguaje interpretado**: No se compila.
- **Tipado dinámico**: El tipo de dato se asigna automáticamente
- **Funciones como variables**: Permite programar de forma muy flexible
- **JSON**: Formatop de intercambio de datos basado en la estructura de `JS`.
- **Gran portabilidad y comunidad activa**.

---

## 📋 Variables en JS

En [`unidad1.js`](./unidad1.js) podrás ver todo esto incluidos ejercicios de prácticas:

```JS
let variable = 5;
var nombre = "Sugus";
const pi = 3.14150;
```

- `let`: Tiene **alcance de bloque**, solo existe dentro de `{}` y es ideal para variables auxiliares (`i`, sumas, contadores...).
- `var`: Tiene **alcance global** o **de función**, se usa cuando necesitamos que la variable sea accesible en todo el programa.
- `const`: Para valores **fijos**, que **no deben cambiar**, obliga a mantener la coherencia del dato.

---

## 🧮 Operadores

| Operador | Tipo | Explicación | Ejemplo |
| :---: | :--- | :--- | :---: |
| `+` | Aritmético | Suma o concatenación | `5+2` |
| `-` | Aritmético | Resta | `5-2` |
| `*` | Aritmético | Multiplicación | `5*2` |
| `/` | Aritmético | División | `5/2` |
| `%` | Aritmético | Módulo: Resto de división | `5%2` |
| `++` | Incremento | Suma 1 | `i++` |
| `--` | Decremento | Resta 1 | `i--` |
| `**` | Aritmético | Potencia | `2**4` |
| `=` | Asignación | Asigna valor | `x = 10` |
| `==` | Comparación | Igualdad de valor | `"1" == 1` |
| `===` | Comparación | Igualdad estricta | `"1" === 1` |
| `!=` | Comparación | Distinto valor | `5 != 2` |
| `!==` | Comparación | Distinto valor y tipo | `"1" !== 1` |
| `>` | Comparación | Mayor que | `edad > 18` |
| `<` | Comparación | Menor que | `5 < 10` |
| `>=` | Comparación | Mayor o igual que | `edad >= 18` |
| `<=` | Comparación | Menor o igual que | `nota <= 5` |
| `&&` | Lógico | AND (y) | `a > 0 && b > 0` |
| `‖` | Lógico | OR (o) | `a > 0 ‖ b < 0` |
| `?:` | Condicional | Operador ternario | `edad >= 18 ? "Mayor de edad" : "Menor de edad"` |
| `??` | Lógico | Coalescencia nula | `nombre ?? "Sin nombre"` |
| `typeoff` | Función | Mostrar tipo de dato | `typeof 32` |

---

## ❔ `typeof`

Sirve para saber **qué tipo de dato** almacena una variable:

```JS
console.log(typeof nombre); // string
console.log(typeof 52); // number (aqui no dice int o integer)
```

> Muy útil para validaciones o depuraciones

---

## ⛓️ Operador ternario

Permite hacer una **condicional** en una sola línea.

La estructura es `condicion ? valorSiTrue : valorSiFalse` :

```JS
let edad = 87;
let mayoriaEdad = edad >= 18 ? "Sí" : "No";
console.log("Es el usuario mayor de edad?" + mayoriaEdad);
```

---

## ❔❔ Coalescencia nula

Se usa cuando una variable puede ser `null` y queremos un valor por defecto.

La estructura es `condicion ?? "valorSiNull"`, tipo, si mi variable tiene null se asigna un valor:

```JS
const nombre = null;
const nombreUser = nombre ?? "Anónimo";

console.log(nombreUser);
```

---

# 🩵 Condicionales

Tenemos if, else y switch. Luego veremos bucles como for, while, etc.

## If/Else

Estructura si tenemos una condición:
```js
if(condicion) {
    // si la condición es cierta se hace este bloque
} else {
    // se ejecuta si la condicion es falsa
}
```

## Else if

Si tenemos más condiciones:
```js
if(condicion1) {
    // se ejecuta esete bloque si la condicion es true
} else if(condicion2) {
    // se ejecuta este bloque si la condicion 2 es true
} else {
    // este es opcional, se ejecuta si ninguna condicion de las de arriba es verdad
}
```

Si tenemos condicones más complejas donde ambas (**AND**) tienen que cumplirse se usa `condicion1 && condicion2`, en caso de que sea una u (**OR**) otra `condicion1 || condicion2`.

---

## Switch

Por ejemplo, para un menú con 7 opciones, es engorroso usar **if**. Es una estructura de control en el que si se cumple una determinada expresión irá por un camino u otro.

```js
// Menu con 7 opciones
// esta es la variable que va cambiando de valor, depende de en que valor nos encontremos hara una u otra cosa
let expresionAValidar = 7;

switch(expresionAValidar) {
    case valor1:
        // Lo que se ejecuta en el caso de que sea 1
        break;
    case valor2:
        // lo que se ejecuta en el caso de que sea el valor 2
        break;
    // el resto de casos
    default
        // opcional, es si no encuentra la opcion, no hace falta break
}
```

---

> 🏆 **TIP**: A la hora de trabajar lo mejor es suponer que algo es cierto y buscar la contradicción del mismo
> `Math.sqrt`= Calcula la raíz cuadrada de un número

# 🔁 Bucles

## For

Lo usamos cuando sabemos cuántas vueltas vamos a dar.

```js
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
```

## While

Lo usamos cuando no sabemos cuándo vamos a terminar. Depende de un resultado dinámico que se calcula dentro del bucle o está esperando una condición que no sabe cuándo se va a producir.

## Do-while

Es igual que el while pero mínimo da una vuelta. Aunque la condición sea falsa te aseguras que una vez de la vuelta.