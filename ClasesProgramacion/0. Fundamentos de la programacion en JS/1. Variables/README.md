# VARIABLES

## Introducción

Las variables se usan para guardar datos que el programa necesita durante la ejecución (números, textos, fechas...). Son como cajitas donde guardas información temporal.

## Estructura de la variable

- Nombre: Cómo la identificas (let usuario, const pi, let edad...)
- Tipo de datos que almacena: 
    - String: Texto "Hola"
    - Int: Numeros enteros 10
    - Double: Números decimales 3.21
    - Boolean: Valores lógicos (true or false)
    - Hay muchos más, iremos viendo a medida que creemos cositas!
- Valor: Lo que guarda la variable

Con las variables puedes hacer:

### Calculos

Gracias a las variables podemos no solo guardarle datos, sino usarlas y que participen en operaciones matematicas! Para ello deberemos conocer los operadores matemáticos que irán en el siguiente curso ;3

### Almacén

Una variable puede guardar el resultado de una función:

Una función puede hacer una tarea (como sumar, calcular el IVA...) y luego devolverte un valor como respuesta, a esto se le dice valor de retorno (return). Sin él la función haría algo pero no te daría un resultado para usar. Con él la función hace su trabajo y te entrega un valor.

Para usar un resultado necesitamos una variable que actúe como receptor:

- La función calcula un valor.
- La función devuelve (return) dicho valor.
- La variable, al ser igualada a la llamada de la función, almacena ese valor.

Los usos que le damos a esto son:

- Calculos complejos.
- Manejo de datos.
- Validación.

Veremos un ejemplo de esto en el siguiente curso, junto a los operadores matemáticos!

### Almacenan referencias de elementos web

Para el desarrollo web las variables pueden guardarte referencias a los elementos de tu html para poder usarlos en JS!!

#### Ejemplos let

Cuando definimos una variable con let, estamos indicando que el valor es susceptible a cambios.

let nombre "Mario";
console.log(nombre);

nombre = "Patricia";
console.log(nombre);

#### Ejemplos const

Cuando definimos una variable con const, indicamos que su valor no cambia, es siempre constante.

const PI = 3.1415;

# COMENTARIOS

La forma de poner comentarios aquí es tal que asi:

// Hola, soy un comentario y sirvo para explicar el código! Tanto para ti, programador, y que no te pierdas con el tecletecle, como para tus compañeros de equipo si es el caso!

De esta forma organizamos el código y no nos perdemos ;3

# ARCHIVOS EN ESTE REPO

## variables.js

En este archivo verás los resultados de los siguientes ejercicios para que puedas comparar y ver que están bien!

Recuerda que para que no se vuelva loquete, comenta con // lo que hayas comprobado y descomenta quitando // del que quieras probar que funcione!

# Como ejecutar tu archivo en la terminal? 

Para los ejercicios te hará falta. Recordemos que la ubicación y organización de tus archivos es primordial, así que intuyo que te habrás hecho ya una carpetita específica para esta primera parte.

Desde VSC le das a File - Open Folder - Selecciona tu carpeta.

Verás a la izquierda de tu área de trabajo el Explorer. Pasa el ratón por encima y veras unos simbolitos, para crear tu archivo le das al primero, que es como una hoja con un + debajo. Y ahí nombras tu archivo, importante, le tienes que indicar qué tipo de archivo es (nombre.js).

Una vez creado, doble clic, y vas haciendo los ejercicios. Como te pido mostrarlos en consola, en Terminal - New Terminal para abrir la terminal, y en ella que se situará debajo de tu área de trabajo escribas "ls". De esta forma ves los archivos que hay dentro de tu carpeta. Antes de ejecutar y probar tu archivo .js, dale a guardar! 

Ahora sí, para probarlo escribe en la terminal "node tuArchivo.js" y le das a enter, y ya verás en consola lo que hayas querido mostrar en el console.log ;3

# TIPOS DE DATOS

## Primitivos

Son los que hemos visto (string, boolean, null...), los tipos de datos más simples!

## No primitivos

Permiten agrupar datos relacionados bajo un mismo nombre, ejemplo:

const miEx = {
    nombre: "Mario Borja",
    edad: "Muy viejo ya para andar haciendo el gilipollas",
    mascotas: true,
    nombreMascotas: "Mario Borja ya que es un cerdo",
    hobbies: ["Tocar los cojones", "Hacerse cuentas falsas para molestar", "No devolverme mi puñetero Alienware x51"]
};

// Accedemos a los datos de la siguiente forma:

console.log(miEx.nombre);

# TYPEOFF

Si queremos saber qué tipo de datos se almacenan en una variable, lo cual viene dpm cuando depuras, lo hacemos así:

let edad = 25;

console.log(typeoff edad);

Ahí te mostrará que ese es number, o el que sea de la variable que selecciones!

# Ejercicios

1. Crea una variable para guardar tu nombre y muéstralo en consola.
2. Crea una variable para guardar la puntuación de tus partidas en tu juego fav. Inicialízalo en 0. Muestra la puntuación en la terminal. Después asigna un valor y muéstralo de nuevo en consola!
3. Imagina que quieres crear un juego y necesitas 2 variables para guardar en ella el nombre de tu juegardo y otra para guardar la url de tu servidor. Ahora muestra ambos concatenando las variables y algún texto descriptivo que nos ayude a verlo todo bonito en la consola ;D
4. Usa la palabra clave para guardar las siguientes variables: serían let o const?
    - Edad
    - Nombre mascota
    - Dias de la semana
    - Mensaje de error
    
Y con esto y un let postre = bizcocho... me despidooo!!!