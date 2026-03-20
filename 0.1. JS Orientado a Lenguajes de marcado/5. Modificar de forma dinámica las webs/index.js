const app = document.getElementById('app');

//crear 1º la estructura inicial
//titulo
const titulo = document.createElement('h1');
titulo.textContent = "Gestor de tareas";
app.appendChild(titulo);

//input
const input = document.createElement('input');
input.setAttribute('type', 'text');
input.setAttribute('placeholder', "Escribe una tarea");
app.appendChild(input);

//añadir
const botonAgregar = document.createElement('button');
botonAgregar.textContent = "Añadir tarea";
app.appendChild(botonAgregar);

//lista de tareas
const lista = document.createElement('ul');
app.appendChild(lista);

//Función para crear unas tareas
function crearTarea (textoTarea) {
    //lo 1º para crear la tarea es crear la linea pa añadir a la lista
    const li = document.createElement('li');

    //crear un span de texto con la tareea
    const span = document.createElement('span');
    span.textContent = textoTarea;

    //boton para eliminar la tarea cuando no la queramos
    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = "Eliminar la tarea";

    //boton para completar tarea
    const botonCompletar = document.createElement('button');
    botonCompletar.textContent = "Completar tarea";

    //generar funcionalidad d botones de la tarea
    botonCompletar.addEventListener('click', () => {
        if (span.classList.contains("completada")) {
            //desmarcar la tarea
            span.classList.remove("completada");
            span.style.color = "black";
            span.style.textDecoration = "none";
            botonCompletar.textContent = "Completar tarea";
        } else {
            span.classList.add("completada");
            span.style.color = "purple";
            span.style.textDecoration = "line-through";
            botonCompletar.textContent = "Desmarcar tarea";
        }
    });

    //añadir funcionalidad al boton eliminar
    botonEliminar.addEventListener('click', () => {
        li.remove();
    });

    //añadir las cosas al html
    li.appendChild(span);
    li.appendChild(botonCompletar);
    li.appendChild(botonEliminar);

    lista.appendChild(li);
}

//añadir la funcionalidad al boton de agregar tarea
botonAgregar.addEventListener('click', () => {
    const texto = input.value.trim();
    //validacion
    if (texto === "") {
        return;
    }

    crearTarea(texto);

    input.value = "";
});