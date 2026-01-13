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

> Próximo día repaso de condicionales y bucles :P