> En vez de manipular el estilo de una página web con **JS**, lo mejor que podemos hacer es tener 2 clases para alternar de una a otra.
> Si podemos agregar o actualizar una clase podríamos cambiarle el estilo teniéndolo planteado ya en el **CSS** para ello!

# `classList`

Devuelve una lista en vivo de las clases del elemento y tiene varios métodos para trabajar con ello. Podemos usar los siguientes **métodos**:

1. `add(className)`: Para añadir una nueva clase.
2. `remove(className)`: Para eliminar una clase.
3. `toggle(className)`: Para alternar entre una clase y otra.
4. `contains(className)`: Para saber si el atributo es de una clase, de consulta, devuelve **true** o **false**.

```js
var elemento = document.querySelector('#miElemento');

elemento.classList.add('nuevaClase');
elemento.classList.remove('otraClase');
elemento.classList.toggle('claseActiva');
var tieneClase = elemento.classList.contains('nuevaClase'); // da true
tieneClase = elemento.classList.contains('otraClase'); //da false xk lo hemos borraod
```

---

# Manipulación de atributos

Los atributos que nosotros ponemos proporcionan información adicional sobre los elementos que tenemos. JS permite manipularlos o cambiar propiedades y cambiarlos.

Si tenemos `id`, `src`, `href`, etc, se pueden manipular de la siguiente forma:

1. `getAttribute(atributo)`: Obtener un valor del atributo del elemento. Si no existe te devuelve `null`.
2. `setAttribute(atributo, valor)`: Establece un valor para un atributo cambiando dicho valor.
3. `removeAttribute(atributo)`: Elimina el atributo.
4. `hasAttribute(atributo)`: Verifica si existe un atributo específico devolviendo **true** o **false**.

```js
/* En este caso no se pone # o . porque escribimos con la grafía de css, en css existen etiquetas nativas. No es un id o clase, es etiqueta básica
Se puede poner querySelectorAll para cambiar todas las img
Si usamos querySelector solo y hay varias imágenes, solo cambiaría la primera */
var imagen = document.querySelector('img');
imagen.setAttribute('src', 'imagen-nueva.jpg');

var srcImagen = imagen.getAttribute('src');

imagen.removeAttribute('alt');

var tieneId = imagen.hasAttribute('id');
```

---

# Manipulación de Atributos de datos del usuario

El usuario puede poner info de forma manual para guardar datos y que js los manipule. Esto se hace con `atributo.dataset.*)`.

```js
var articulo = document.querySelector('#articulo');

articulo.dataset.autor = 'Sugus';

var autor = articulo.dataset.autor;
```

---

Vamos a desarrollar un programa completo que va a manipular clases usando JS con una pequeña aplicación que permita a los usuarios cambiar el tema del blog entre claro y oscuro como marcar un artículo como favorito:

* [`ejercicioClases.html`](./ejercicioClases.html)
* [`ejercicioClases.css`](./ejercicioClases.css)
* [`ejercicioClases.js`](./ejercicioClases.js)