//Esperar el JS a que todo el contenido de la web se haya cargado, SIEMPRE poner esta linea al inicio

document.addEventListener('DOMContentLoaded', function() {
    //seleccionar el boton con su id
    var boton = document.getElementById('cambiarTitulo');

    // generar el escuchador de eventos
    boton.addEventListener('click', function() {
        var titulo = document.getElementById('titulo');
        titulo.textContent = 'Titulo modificado';
    });
});

function toggleDetalles() {
    var detalles = document.querySelector('#detalles');

    // comprobar si los detalles estan ocultos para mostrarlos y viceversa
    if (detalles.style.display === 'none') {
        detalles.style.display = 'block';
    } else {
        detalles.style.display = 'none';
    }

    //los titulos interactivos al mostrarse la descripcion los cambiaremos d color d negro a otro color
    var listaTitulosInteractivos = document.querySelectorAll('.interactivo');

    for (let i = 0; i < listaTitulosInteractivos.length; i++) {
        if (listaTitulosInteractivos[i].style.color === 'blue') {
            listaTitulosInteractivos[i].style.color = '';
        } else {
            listaTitulosInteractivos[i].style.color = 'blue';
        }
    }
}