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