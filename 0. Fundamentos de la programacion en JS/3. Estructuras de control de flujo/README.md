# 🔁 ESTRUCTURAS DE CONTROL DE FLUJO

De momento estamos ejecutando código **línea por línea**. Estas estructuras nos sirven para saltar lineas, repetir bloques o ejecutar código con condicionales!

---

## 💻 Operadores de comparación

| Comparación | Significado | Ejemplo |
| :--- | :--- | :--- |
| `>` | Mayor que | `edad > 18` |
| `>=` | Mayor o igual que | `nota >= 5` |
| `<` | Menor que | `edad < 18` |
| `<=` | Menor o igual que | `nota <= 10` |
| `===` | Igual (comparación estricta) | `color === "rojo"` |
| `!==` | Diferente (estricta) | `color !== "azul"` |

### 🔗 Operadores lógicos:

| Operador | Significado | Ejemplo |
| :--- | :--- | :--- |
| `&&` | **Y**: ambos deben ser verdaderos | `(edad > 18 && tieneCarnet)` |
| `‖` | **O**: al menos uno debe ser verdadero | `(edad > 18 ‖ tieneCarnet)` |
| `!` | **NO**: niega el valor | `!esValido` ➜ si `esValido` es `true`, devuelve `false` |

> Me refiero a || pero en la tabla no me deja ponerlo porque se rompe x.x

---

## ⚖️ Condicionales

Basicamente esto es "Si esto es así quiero que hagas X, si no, haz Y".

### 🧠 If/Else

```js
const edad = 18;

if (edad >= 18) {
    console.log("Eres mayor de edad!!");
} else {
    console.log("Ta chikito, eres menor de edad");
}
```

👉 Si mantenemos el valor en 18 o más te mostrará el primer mensaje, si cambiamos a un valor menor a 18 te mostrara el segundo mensaje :3

### 🧩 Else if

```js
const puntuacion = 85;

if (puntuacion >= 90) {
    console.log("Bien hecho fiera, maquina, mastodonte, farm animal :D");
} else if (puntuacion >= 70) {
    console.log("Not bad ;D");
} else {
    console.log("Bueeeeno, podrías mejorar eh?");
}
```

---

## 🔁 Bucles

Nos permiten recorrer un trozo de código varias veces sin tener que escribirlo 40 veces 😅

### 🧮 For

Esto es repeticiones con contador, que sabes perfectamente cuantas veces quieres que se repita algo, por ejemplo, mientras que i sea menor a 5 este bucle se repetira, y mientras se repite le va sumando uno a i, cuando llegue a 4 parará!

```js
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```

### ⚙️ For each

Para arrays y listas, es la forma de decir "por cada elemento que recorro haz tal cosa".

```js
const asignaturasDAW = ["Programacion", "BBDD", "SI", "LM", "ED"];

asignaturasDAW.forEach(function (asignatura){
    console.log("Asignatura en curso: " + asignatura);
})
```

### 🔄 While

Esto es repetir el bucle mientras una condicion sea verdadera, y no sabes cuantas veces quieres repetir el bucle:

```js
let vidaEnemigo = 5;

while (vidaEnemigo > 0 ) {
    console.log("Le quedan " + vidaEnemigo + " vidas!!");
    vidaEnemigo--;
}

console.log("Has ganadoooo!!!");
```

### 🔂 Do... While

Primo rebelde del while: garantiza que el codigo dentro del do se ejecute minimo una vez antes de revisar la condicion por primera vez (aunque la condición sea falsa al inicio), se usa cuando necesitas obtener por ejemplo la entrada de tu usuario antes de decidir si seguirle preguntando.

```js
let numero = 0;

do {
    console.log("Número es: " + numero);
    numero++;
} while (numero < 5);
```

### 🧭 Swithc

El switch es la alternativa limpita y eficiente que usar una larga cadena de ifs cuando quieres comparar una unica variable contra muchos valores fijos. 

⚠️ Es crucial que pongamos break sobretodo aqui, ya que si no te hace un bucle infinito HAHAHAHHAHA no le quieras hacer eso a tu pc 😂

```js
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

    default:
        console.log("Ese no es un día válido.");
}
```

Si quieres toquetear codigos y ver si funcan ve a 👉 [controlFlujos.js](./controlFlujos.js) ;D