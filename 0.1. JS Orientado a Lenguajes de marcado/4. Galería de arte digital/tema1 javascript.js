function toggleDetalles(button) {
    //Encontrar el divisor que contiene a ese botón y sacar los detalles de la obra
    var detalles = button.closest('.obra').querySelector('.detalles');
    //Igual para obtener el artista
    var obra = button.closest('.obra');
    var artista = obra.dataset.artista;

    //Alternamos la vista de los detalles de la obra
    if (detalles.style.display === 'none' || detalles.style.display === '') {
        detalles.style.display = 'block';
    } else {
        detalles.style.display = 'none';
    }

    //Resaltamos todas las obras de el mismo artista
    var obraDelMismoArtista = document.querySelectorAll('.obra[data-artista="' + artista + '"]');

    //Iteramos sobre las obras encontradas del mismo artista
    for (var i = 0; i < obraDelMismoArtista.length; i++) {
        //Para cada obra seleccionamos la imagen suya
        var img = obraDelMismoArtista[i].querySelector('img');

        //Si los detalles están siendo mostrados resaltamos la imagen
        if (detalles.style.display === 'block') {
            img.classList.add('resaltar');
        } else {
            img.classList.remove('resaltar');
        }
    }
}