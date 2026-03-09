# Práctica 1: `Queryselector`

Imaginemos que estamos desarrollando una página web para una **tienda de tecnología** en línea. En esta página, queremos destacar un producto del mes (un smartphone, por ejemplo) y permitir a los usuarios hacer clic en un botón para mostrar más detalles sobre el producto, como sus especificaciones, precio y la opción de agregarlo al carrito. Además, queremos mostrar una lista de productos relacionados debajo del producto destacado, y permitir a los usuarios agregar esos productos al carrito también.

---

## Requisitos:

1. Estructura **`HTML`**:
   1. Un **encabezado** con el nombre de la tienda.
   2. Un **producto destacado del mes** que incluye:
      1. Un *título con el nombre* del producto.
      2. Un *precio*.
      3. Un *botón* para "Mostrar más detalles".
      4. Un *contenedor oculto* con:
         1. Descripción del producto.
         2. Especificaciones.
         3. Un botón de "Agregar al carrito".
      5. Una sección con **productos relacionados**, que incluye:
         1. *Títulos* con el nombre del producto.
         2. Breve *descripción* del producto.
         3. Un botón de *"Agregar al carrito"* para cada uno.
2. Estilos **`CSS`**:
   1. La página debe tener un **diseño limpio y moderno** con un esquema de colores agradable.
   2. Los **productos** deben estar **dispuestos de forma atractiva**, con efectos de hover para mostrar interactividad.
   3. Los **botones** deben tener **efectos visuales** (como un cambio de color al hacer hover).
3. Funcionalidad **`JavaScript`**:
   1. Al hacer clic en el botón de **"Mostrar más detalles"**, el contenedor de detalles del producto debe **alternar entre visible e invisible**. El texto del botón debe cambiar a "**Ocultar detalles"** cuando los detalles se muestren.
   2. Al hacer clic en el botón de **"Agregar al carrito**" en el producto destacado, debe mostrarse un **mensaje de alerta** indicando que el producto ha sido agregado al carrito.
   3. Al hacer clic en los **títulos** de los productos relacionados, debe mostrarse un **mensaje con el nombre del producto** seleccionado.
   4. Al hacer clic en el botón de **"Agregar al carrito"** en los productos relacionados, debe mostrarse un **mensaje** indicando que ese producto ha sido agregado al carrito.