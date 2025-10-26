# VARIABLES

Las variables son un contenedor donde guardas un valor, como una pequeña cajita con una etiqueta. Entro en profundidad en este tema en mi curos RecursosUIPath, te lo recomiendo! Pero si te da lache con que te quedes con esta info vas sobrade mi ciele ñ.ñ

Las variables han evolucionado, los old school conocerán su declaración usando var, pero te recomiendo evitar ese uso! 

Lo que tenemos hoy dia es let (para variables con valor sensible a cambio) y const (para valores que sabemos que NUNCA cambian).

### Qué datos puede guardar una variable?

Puede guardar texto, números, lógica, valores nulos, colecciones de datos (listas, arrays, diccionarios)... 

### Calculos

Gracias a las variables podemos no solo guardarle datos, sino usarlas y que participen en operaciones matematicas! Para ello deberemos conocer los operadores matemáticos que irán en el siguiente curso ;3

### Almacén

Una variable puede guardar el resultado de una fonción, que lo veremos en el 3er curso ;D

### Almacenan referencias de elementos web

Para el desarrollo web las variables pueden guardarte referencias a los elementos de tu html para poder usarlos en JS!!

#### Ejemplos let

let nombre "Mario";
console.log(nombre);

nombre = "Patricia";
console.log(nombre);

#### Ejemplos const

const PI = 3.1415;

## variables.js

En este archivo verás los resultados de los siguientes ejercicios para que puedas comparar y ver que están bien!

Recuerda que para que no se vuelva loquete, comenta con // lo que hayas comprobado y descomenta quitando // del que quieras probar que funcione!

## Como ejecutar tu archivo en la terminal? 

Para los ejercicios te hará falta. Recordemos que la ubicación y organización de tus archivos es primordial, así que intuyo que te habrás hecho ya una carpetita específica para esta primera parte.

Desde VSC le das a File - Open Folder - Selecciona tu carpeta.

Verás a la izquierda de tu área de trabajo el Explorer. Pasa el ratón por encima y veras unos simbolitos, para crear tu archivo le das al primero, que es como una hoja con un + debajo. Y ahí nombras tu archivo, importante, le tienes que indicar qué tipo de archivo es (nombre.js).

Una vez creado, doble clic, y vas haciendo los ejercicios. Como te pido mostrarlos en consola, en Terminal - New Terminal para abrir la terminal, y en ella que se situará debajo de tu área de trabajo escribas "ls". De esta forma ves los archivos que hay dentro de tu carpeta. Antes de ejecutar y probar tu archivo .js, dale a guardar! 

Ahora sí, para probarlo escribe en la terminal "node tuArchivo.js" y le das a enter, y ya verás en consola lo que hayas querido mostrar en el console.log ;3

### Ejercicios

1. Crea una variable para guardar tu nombre y muéstralo en consola.
2. Crea una variable para guardar la puntuación de tus partidas en tu juego fav. Inicialízalo en 0. Muestra la puntuación en la terminal. Después asigna un valor y muéstralo de nuevo en consola!
3. Imagina que quieres crear un juego y necesitas 2 variables para guardar en ella el nombre de tu juegardo y otra para guardar la url de tu servidor. Ahora muestra ambos concatenando las variables y algún texto descriptivo que nos ayude a verlo todo bonito en la consola ;D
4. Usa la palabra clave para guardar las siguientes variables: serían let o const?
    - Edad
    - Nombre mascota
    - Dias de la semana
    - Mensaje de error
    

Y con esto y un let postre = bizcocho... me despidooo!!!