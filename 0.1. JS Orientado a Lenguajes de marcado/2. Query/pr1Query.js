// Seleccion de las clases y elementos
const showDetailsBtn = document.querySelector('#showDetailsBtn');
const productDetails = document.querySelector('#productDetails');
const addToCartBtn = document.querySelector('#addToCartBtn');
const relatedProductTitles = document.querySelectorAll('.product h4');
const addToCartButtons = document.querySelectorAll('.addToCartBtn');

//mostrar u ocultar los detalles del producto destacado
showDetailsBtn.onclick = function() {
    if (productDetails.style.display === 'none') {
        productDetails.style.display = 'block';
        showDetailsBtn.textContent = 'Ocultar Detalles';
    } else {
        productDetails.style.display = 'none';
        showDetailsBtn.textContent = 'Mostrar más detalles';
    }
};

//Agregar producto destacado al carrito
addToCartBtn.onclick = function() {
    alert('El producto ha sido añadido al carrito!');
}

//Funcionalidad para los productos relacionados
relatedProductTitles.forEach(title => {
    title.addEventListener('click', function() {
        alert('Producto seleccionado: ' + title.textContent);
    });
});

// funcionalidad para agregar productos relacionados al carrito
addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
        const productName = button.parentElement.querySelector('h4').textContent;
        alert('El producto ' + productName + ' ha sido añadido al carrito!');
    });
});