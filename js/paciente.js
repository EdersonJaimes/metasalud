// Función para cambiar el contenido mostrado
function cambiarContenido(seccion) {
    // Primero, ocultamos todas las secciones
    const secciones = document.querySelectorAll('.seccion');
    secciones.forEach(seccion => {
        seccion.style.display = 'none';
    });

    // Luego, mostramos solo la sección seleccionada
    const seccionSeleccionada = document.getElementById(seccion);
    if (seccionSeleccionada) {
        seccionSeleccionada.style.display = 'block';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.icon-container').forEach(icon => {
        icon.addEventListener('click', function() {
            console.log(icon.getAttribute('data-text'));
        });
    });

    document.getElementById('volverBtn').addEventListener('click', function() {
        window.history.back();
    });

    document.getElementById('inicioBtn').addEventListener('click', function() {
        cambiarContenido('inicio');
    });

    document.getElementById('citasBtn').addEventListener('click', function() {
        cambiarContenido('citas');
    });

    document.getElementById('historiaBtn').addEventListener('click', function() {
        cambiarContenido('historia');
    });

    document.getElementById('datosBtn').addEventListener('click', function() {
        cambiarContenido('datos');
    });
    cambiarContenido('inicio');
});