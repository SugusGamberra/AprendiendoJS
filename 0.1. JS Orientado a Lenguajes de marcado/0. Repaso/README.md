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

---

# ❌ Try catch & Finally

Sirve para **manejar errores** y que nosotors los programadores podamos manejar estas excepciones y nos permita gestionarlas y responder ante ellas en tiempo de ejecución de manera controlada, evitando así que el programa falle completamente ante situaciones excepcionales o inesperadas.

Mejora la experiencia del usuario **evitando detenciones abruptas** de la app, ofrece mensajes de error claros y ofrece **acciones sugeridas para solucionarlo**!

Como permite poner textos **facilita la depuración**: encontrar fallos y errores es muy sencillo para identificar y corregir problemas, registra el contexto del error, permite la recuperación de errores capturando excepciones mientras la app sigue funcionando e implementa fallos controlados en situaciones de error.

**Asegura la ejecución de código crítico garantizando que se realicen operaciones de limpieza, liberación de recursos**... Ponte tú que hay un bucle infinito, tendría que liberarlo.

**Contribuye a la seguridad** de la app, previene la exposición de info sensible, mejora la gestión de errores, promueve mejores prácticas de programación mejorando la reflexión sobre posibles fallos y respuestas adecuadas...

Tiene **soporte para operaciones asíncronas**.

Es importante a la hora del servidor ya que detecta errores posibles del server.

La declaración es la siguiente:

```js
try {
    // codigo que se ejecuta que puede lanzar un error
}

catch (error) {
    // captura del error que se puede generar y se encarga del manejo del error
}

finally {
    // codigo que se ejecuta despues del trycatch, ocurra o no un error
}
```

Puede ser util en situaciones como, por ejemplo, está haciendo una función y queremos liberar memoria y recursos de la función.

---

#  🚬 Funciones

Hoy aprendemos a crear funciones! Es importante conocerlas porque a la hora de modificar cosas en JS será clave usarlas y crearlas.

Para crear una funcion normal la fórmula en JS es `function nombreFuncion(parametrosQueRecibe, parametro2) { return "Texto concatenado con una variable ${parametrosQueRecibe}, ${parametro2}; }` y se llama a la función con la fórmula `console.log(nombreFuncion("Lo que sea xd", "jeje"));`.

**Return** si queremos que devuelva algún tipo de valor y llamarlo desde el **main**.

```js
function sumar(a, b) {
    return a + b;
}

console.log(sumar(1, 2));
```

Ahora vamos a ver funciones más elaboradas, que son diferentes de lo que estamos acostumbrados: **funciones nombradas** o **funciones anónimas**, que sirve para automatizar tareas.

Una **función nombrada** es un tipo de función con un nombre específico que se asigna durante su declaración y nos permite escribir bloques y mantiene un identificador único, un ámbito, y se suele usar en un tema de **recursividad**.

Las **funciones anónimas** no se les asigna nombres, se usan directamente donde sea necesario asignar un valor o argumento a otras funciones, se usan una única vez y tiene acceso a nivel **local**.

```bash
let mostrarMensaje = function(mensaje) {
    console.log(mensaje);
}

mostrarMensaje("Holiwis, q tal?")
```

Creamos una variable y le asignamos una especie de tarea, así se usan las funciones anónimas. Esto es muy útil para modificar páginas web.

Las **funciones flecha** tienen una sintaxis muy concisa y capturan el valor del ambito en que se crea y actúan para hacer una serie de tareas, no tienen argumentos y no se usan como métodos.

Por convección se pone con `constante` porque su valor no varía, pero se puede usar con cualquier declaración.

```js
// un parametro
const cuadrado = x => x*x;

// 2 parametros (o mas)
const suma =  (a, b) => a + b;

const ordenar = (c, d) => {
    if (c > d) {
        return c;
    } else {
        return d;
    }
};

// sin parametros
const saludar = () => console.log("Hola caraqlo");
```

---

# 🕴🏻 Recursividad

Cuando hablamos de **recursividad** nos referimos a una función que es capaz de **llamarse a sí misma** para resolver un determinado problema. 

Estas funciones recursivas son *similares a un bucle*, pero en vez de iterar sobre una lista o un for, iteran sobre llamarse a sí mismos pero cada vez intentando resolverse de forma más sencilla.

La solución a lo complejo es sumar o juntar soluciones **más sencillas**, por ejemplo: `problema a = problema a / 2 + problema a/2` y así constantemente hasta llegar al **caso base** (la solución es directa).

```java
// resolvemos un factorial, este es el procedimiento que haria el pc internamente

// 5! = 5x4x3x2x1
// 5! = 5 x 4!
//     4! = 4 x 3!
//         3! = 3 x 2!
//             2! = 2 x 1!
//                 1! = 1 x 0!
//                     0! = 1
//                 1! = 1 x 1 = 1
//             2! = 2 x 2 = 4
//         3! = 3 x 4 = 12
//     4! = 4x 12 = 36
// 5! = 5 x 36 = 120

function factorial(n) {
    // caso base primero
    if (n === 0) {
        return 1;
    }

    // caso recursivo n! = n x factorial(n-1)
    else {
        return n * factorial(n - 1);
    }
}

console.log(factorial(50));
```

---

# 🐳 POO

Para nosotros crear objetos, propiedades, métodos y tal y encapsular la info.

Por ejemplo una persona tiene nombre, datos, tal. Creamos una clase que vaya trabajando con su info y poniendo funciones orientadas a dicho objeto.

1. Podemos crear objetos de forma manual:

```js
const persona {
    nombre: "Mario",
    edad: 33
};
```

2. En vez de crearlo de forma literal y directa, podemos usar constructores:

```js
const persona = new Object();
persona.nombre = "Juan";
persona.edad = 50;
```

3. Forma moderna de creación de objetos y la que vamos a usar:

```js
// creamos una clase, siempre empieza en mayuscula por convencion
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}

const sugus = new Persona("Sugus", 87);

console.log(sugus.nombre + " " + sugus.edad);
```

Podemos crear diversas cosas con esto, por ejemplo, cada vez que creamos un contador le creamos un atributo valor y lo inicializamos vacío (a 0) y una vez construido podemos meterle métodos:

```js
const contador = {
    valor: 0,

    // metodo pa incrementar el valor
    incrementar: function() {
        this.valor++;
        console.log("Valor incrementado: " + this.valor);
    },

    // metodo pa mostrar valor actual
    mostrarValor: function() {
        console.log("El valor del contador es " + this.valor);
    }
}

contador.incrementar();
contador.incrementar();
contador.incrementar();
contador.mostrarValor();
```

---

# 🗒️ Arrays

Es una estructura de datos, como una lista, que permite almacenar múltiples valores en una sola variable.

En JS permite que contenga elementos de cualquier tipo (números, strings, objetos, otros arrays) lo que lo hace muy versátil para la programación. Sus características principales son:

* **Indexados por posición**: Empiezan desde 0.
* **Tamaño dinámico**: Va cambiando el tamaño de forma dinámica, se pueden agregar o eliminar elementos en cualquier momento.
* **Heterogéneos**: Se pueden mezclar tipos.

```js
// forma 1 de crearlo
const frutas = ["manzana", "banana", "platano"];

// forma 2 de crearlo
const numeros = new Array(1,2,3,4,5);

// ver el elemento en la posicion dada
console.log(frutas[0]);
// sin el corchete con el 0 se ve todo el array

// cambiar un elemento
frutas[1] = "mango";
```

## Métodos principales de Arrays

Con estos métodos podemos hacer operaciones de forma automática

* **`push()` / `pop()`**: Agregar o eliminar un elemento al final del array respectivamente.
* **`shift()` / `unshift()`**: Eliminar el primer elemento o agregar uno o más al comienzo respectivamente.
* **`slice(n1, n2)`**: Sirve para devolver una copia de una sección del Array. El primer elemento se incluye, pero el último elemento se excluye.
* **`splice(n1, n2)`**: Cambia el contenido de un Array eliminando, reemplazando o agregando nuevos elementos. Comienza en el n1 y va hacia n2.
* **`forEach()`**: Ejecutar instrucciones para cada elemento del array.
* **`map()`**: Sirve para crear un nuevo Array con el resultado de la llamada a una función para cada elemento del Array.
* **`filter()`**: Crear un nuevo Array pero solo con los elementos que cumplan la condición.

```js
const items = ["Manzana", "Banana"];

item.push("Naranja");

console.log("Después del push: ", items);

// se refleja como se añade al final

const elementoEliminado = items.pop();

console.log("Después del pop: ", items);
console.log("Elemento eliminado: ", elementoEliminado);

// se refleja que se elimino el ultimo, te devuelve el elemento eliminado

const primerElemento = items.shift();

console.log("Después del shift: ", items);
console.log("Elemento del comienzo eliminado: ", primerElemento);

// se refleja q se elimino el primer elemento

items.unshift("Fresa", "limón");

console.log("Después del unshift: ", items);

// se reflejan los nuevos al comienzo

const items2 = ["a", "b", "c", "d", "e"];
const subArray = items.slice(1, 4);

console.log("Después del slice: ", subArray);

// Se imprime los elementos seleccionados del slice. El elemento 1 se incluye, pero el 4 se EXCLUYE.

items2.splice(2, 1, "x", "y");

console.log("Después del splice: ", items2);

// machaca del 2 cargandose la c, y añade el x e y

items2.forEach((item, index) => {
    console.log("Elemento en posicion ", index, " es ", item);
})

// recorre la lista sin usar for

const mayusculas = items2.map(item => item.toUpperCase());

console.log("Después del map: ", mayusculas);

// nos pasa el array todo en mayusculas

const filtrados = items2.filter(item => item > 'c');
console.log("Después del filter: ", filtrados);

// solo pone la d y la e en consola
```