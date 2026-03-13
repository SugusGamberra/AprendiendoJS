function toggleTema() {
    //seleccionar el elemento del artículo y el botón del tema
    var blogPost = document.querySelector('#blogPost');
    var botonTema = document.querySelector('#toggleTema');

    //alternar entre la clase oscuro del articulo
    blogPost.classList.toggle('oscuro');

    //actualizar el texto del botón
    if (blogPost.classList.contains('oscuro')) {
        botonTema.textContent = 'Cambiar el tema a claro';
    } else {
        botonTema.textContent = 'Cambiar a tema oscuro';
    }

}

// funcion para marcar o desmarcar el articulo como fav

function toggleFavorito() {
    //seleccionamos el elemento del articulo
    var blogPost = document.querySelector('#blogPost');

    //verificamos el estado actual de data-favorito y alterna entre marcar y desmarcar como fav
    if (blogPost.dataset.favorito === 'no') {
        blogPost.dataset.favorito = 'si';
        blogPost.classList.add('favorito');
        document.querySelector('#toggleFavorito').textContent = 'Desmarcar el post como favorito';
    } else {
        blogPost.dataset.favorito = 'no';
        blogPost.classList.remove('favorito');
        document.querySelector('#toggleFavorito').textContent = 'Marcar el post como favorito';
    }
}