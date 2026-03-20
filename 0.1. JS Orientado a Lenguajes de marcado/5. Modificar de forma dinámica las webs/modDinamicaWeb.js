/* Nuevos elementos en nuestro HTML a partir de js

usamos document.createElement(tagname)

Dentro escribimos el contenido, x ejemplo un elemento de html*/

let nuevoElemento = document.createElement('div');

nuevoElemento.innerHTML = '<p>Hola mundo</p>'

let nuevoElemento2 = document.createElement('p');

nuevoElemento2.innerHTML = 'Hola mundo';
nuevoElemento2.setAttribute('id', 'nuevo');
nuevoElemento2.setAttribute('class', 'mi-clase');
nuevoElemento2.setAttribute('href', 'www.nuevo.com');

// css dinamico
nuevoElemento.style.backgroundColor = 'blue';
nuevoElemento.style.color = 'white';
nuevoElemento.style.padding = '10px';

//parte obligatoria
document.body.appendChild(nuevoElemento);

//opcional: eliminar elemento del dom
let elementoAEliminar = document.querySelector('#viejoElemento');
elementoAEliminar.remove();