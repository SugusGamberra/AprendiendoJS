# Práctica Galería de Arte

En esta práctica hemos explorado cómo interactuar con el **DOM (Document Object Model)** para crear una interfaz dinámica que responde a los clics del usuario.

---

## 1. Selección y Manipulación de Elementos

Para que la galería sea interactiva, hemos utilizado métodos clave de selección:

* `document.querySelectorAll()`: Nos permite buscar todos los elementos que coincidan con un selector CSS (como una clase o un atributo específico) y devuelve una lista sobre la que podemos iterar.
* `element.querySelector()`: Ideal para buscar un elemento hijo específico dentro de un contenedor ya seleccionado.
* `button.closest('.obra')`: Un método súper útil para "subir" en el árbol del DOM desde el botón pulsado hasta encontrar su contenedor padre más cercano con la clase .obra.

---

## 2. Atributos de Datos (data-*)

Hemos usado el atributo `data-artista` en el HTML para guardar información extra que no es visible para el usuario pero sí para nuestro código:

* Accedemos a él mediante la propiedad `.dataset` (por ejemplo: `obra.dataset.artista`).
* Esto nos permite "conectar" obras que comparten el mismo autor de forma lógica.

---

## 3. Estilos Dinámicos y Clases

La interactividad visual se apoya en cambiar el estado de los elementos:

* **Propiedad `.style.display`**: Para mostrar u ocultar los detalles de la obra alternando entre `block` y `none`.
* **Propiedad `.classList`**: Usamos `add()` y `remove()` para aplicar la clase .resaltar (definida en el CSS con ese tono goldenrod tan wapardo) a todas las imágenes del mismo artista simultáneamente.

---

## 4. Estructura de Control (Bucles)

Para aplicar el resaltado a múltiples obras a la vez, empleamos un bucle `for` tradicional. Este recorre la lista de elementos encontrados y aplica la lógica de resaltado individualmente a cada uno.