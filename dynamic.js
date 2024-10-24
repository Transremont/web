let indice = 0;
const imagenes = document.querySelector('.imagenes');
const totalImagenes = document.querySelectorAll('.imagen').length;

// Función para cambiar la imagen manualmente
function cambiarImagen(direccion) {
    indice += direccion;

    if (indice < 0) {
        indice = totalImagenes - 1;
    } else if (indice >= totalImagenes) {
        indice = 0;
    }

    actualizarCarrusel();
}

// Función para actualizar el carrusel
function actualizarCarrusel() {
    const desplazamiento = -indice * 100;
    imagenes.style.transform = `translateX(${desplazamiento}%)`;
}

// Animación automática
setInterval(() => {
    cambiarImagen(1); // Cambia automáticamente cada 3 segundos
}, 3000);


const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('.menu');
const closeMenu = document.getElementById('closeMenu');

hamburger.addEventListener('click', () => {
    menu.classList.add('active'); // Agrega la clase active para mostrar el menú
});

closeMenu.addEventListener('click', () => {
    menu.classList.remove('active'); // Quita la clase active para ocultar el menú
});