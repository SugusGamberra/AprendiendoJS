# [Creación dinámica de contenidos](./modDinamicaWeb.js)

Hemos visto como seleccionar del DOM cosas existentes del HTML y modificar su estilo, sus clases, saber seleccionarlos... Ahora profundizaremos más creando nuevos elementos en el HTML.

Para que un elemento aparezca en la web, siempre seguimos estos tres pasos obligatorios:

1. **Creación**: Generamos el nodo en memoria con `document.createElement('etiqueta')`.
   1. *Ejemplo*: `const li = document.createElement('li');`.
2. **Configuración**: Le damos "personalidad" (contenido, clases, estilos, eventos).
   1. *Contenido*: `elemento.textContent = "Texto"` o `innerHTML` para meter HTML.
   2. *Atributos*: `setAttribute('type', 'text')`.
   3. *Estilos*: `elemento.style.color = "green"`.
   4. *Eventos*: `addEventListener('click', ...)` para que el elemento "reaccione".
3. **Inyección**: Lo conectamos al árbol del DOM con `appendChild()`. Si no haces esto, el elemento existe en el código pero es invisible en la web.

---

## Categorías de Elementos

En lugar de una lista plana, es mejor entender para qué sirve cada "pieza" que se puede crear:

* **Contenedores (`div`, `section`, `article`)**: Son como el "tablero" donde organizas el resto de elementos.
* **Texto y Títulos (`h1-h6`, `p`, `span`)**: Para mostrar información. El `span` es ideal para textos cortos dentro de otros elementos.
* **Interacción (`button`, `input`)**: Cruciales para que el usuario hable con tu app. El `input` necesita que captures su `.value`.
* **Listas (`ul`, `ol`, `li`)**: Fundamentales para estructuras repetitivas, como las filas de un gestor de tareas.

---

## Gestión de Clases y Estados

Hemos usado una técnica muy profesional para gestionar estados (completada vs. pendiente):

* `classList.contains()`: Para preguntar si un elemento tiene una energía (clase) específica.
* `classList.add()` / `classList.remove()`: Para cambiar el aspecto visual sin reescribir todo el estilo a mano.

---

## Destrucción de Elementos

Esto es opcional.

* `elemento.remove()`: Elimina el nodo directamente del DOM.
  * *Ejemplo*: Al pulsar el botón "Eliminar la tarea", el `li` desaparece por completo.