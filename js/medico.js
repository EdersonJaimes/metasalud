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

    document.getElementById('buscarBtn').addEventListener('click', function() {
        cambiarContenido('buscar');
    });

    document.getElementById('historiaBtn').addEventListener('click', function() {
        cambiarContenido('historia');
    });

    document.getElementById('formularBtn').addEventListener('click', function() {
        cambiarContenido('formular');
    });
    cambiarContenido('inicio');
});

const citas = [
    { paciente: 'Juan Pérez', fecha: '2024-12-05', hora: '10:00', consultorio: 'Consultorio 1', medico: 'Dr. Juan Pérez' },
    { paciente: 'Ana Gómez', fecha: '2024-12-05', hora: '11:00', consultorio: 'Consultorio 2', medico: 'Dra. Ana Gómez' },
    { paciente: 'Carlos Martínez', fecha: '2024-12-06', hora: '09:00', consultorio: 'Consultorio 3', medico: 'Dr. Carlos Martínez' },
    { paciente: 'Luisa Torres', fecha: '2024-12-06', hora: '10:30', consultorio: 'Consultorio 1', medico: 'Dr. Juan Pérez' },
    { paciente: 'Pedro Ramírez', fecha: '2024-12-06', hora: '12:00', consultorio: 'Consultorio 2', medico: 'Dra. Ana Gómez' },
    { paciente: 'María López', fecha: '2024-12-07', hora: '08:30', consultorio: 'Consultorio 3', medico: 'Dr. Carlos Martínez' },
    { paciente: 'José Rodríguez', fecha: '2024-12-07', hora: '10:00', consultorio: 'Consultorio 1', medico: 'Dr. Juan Pérez' },
    { paciente: 'Laura García', fecha: '2024-12-07', hora: '11:30', consultorio: 'Consultorio 2', medico: 'Dra. Ana Gómez' },
    { paciente: 'Raúl Sánchez', fecha: '2024-12-08', hora: '09:00', consultorio: 'Consultorio 3', medico: 'Dr. Carlos Martínez' },
    { paciente: 'Sofía Ruiz', fecha: '2024-12-08', hora: '10:30', consultorio: 'Consultorio 1', medico: 'Dr. Juan Pérez' },
    { paciente: 'Marta Fernández', fecha: '2024-12-08', hora: '12:00', consultorio: 'Consultorio 2', medico: 'Dra. Ana Gómez' },
    { paciente: 'Ricardo Díaz', fecha: '2024-12-09', hora: '09:30', consultorio: 'Consultorio 3', medico: 'Dr. Carlos Martínez' },
    { paciente: 'Cristina Martínez', fecha: '2024-12-09', hora: '11:00', consultorio: 'Consultorio 1', medico: 'Dr. Juan Pérez' },
    { paciente: 'Fernando Herrera', fecha: '2024-12-09', hora: '12:30', consultorio: 'Consultorio 2', medico: 'Dra. Ana Gómez' },
    { paciente: 'Elena Gómez', fecha: '2024-12-10', hora: '08:30', consultorio: 'Consultorio 3', medico: 'Dr. Carlos Martínez' },
    { paciente: 'Andrés Pérez', fecha: '2024-12-10', hora: '10:00', consultorio: 'Consultorio 1', medico: 'Dr. Juan Pérez' },
    { paciente: 'Beatriz López', fecha: '2024-12-10', hora: '11:30', consultorio: 'Consultorio 2', medico: 'Dra. Ana Gómez' },
    { paciente: 'Oscar Rodríguez', fecha: '2024-12-11', hora: '09:00', consultorio: 'Consultorio 3', medico: 'Dr. Carlos Martínez' },
    { paciente: 'Valentina Sánchez', fecha: '2024-12-11', hora: '10:30', consultorio: 'Consultorio 1', medico: 'Dr. Juan Pérez' },
    { paciente: 'Antonio García', fecha: '2024-12-11', hora: '12:00', consultorio: 'Consultorio 2', medico: 'Dra. Ana Gómez' },
    { paciente: 'Julia Fernández', fecha: '2024-12-12', hora: '09:30', consultorio: 'Consultorio 3', medico: 'Dr. Carlos Martínez' },
    { paciente: 'Ederson Jaimes', fecha: '2024-12-12', hora: '09:15', consultorio: 'Consultorio 3', medico: 'Dr. Carlos Martínez' }

];
// Función para mostrar las citas en la tabla, ordenadas por hora y solo del Dr. Carlos Martínez
function mostrarCitas() {
    // Filtrar las citas para mostrar solo las del Dr. Carlos Martínez
    const citasCarlos = citas.filter(cita => cita.medico === 'Dr. Carlos Martínez');

    // Ordenar las citas por hora (HH:mm)
    citasCarlos.sort((a, b) => {
        // Convertimos las horas a formato Date para compararlas
        const horaA = new Date('1970-01-01T' + a.hora + ':00Z');
        const horaB = new Date('1970-01-01T' + b.hora + ':00Z');
        return horaA - horaB; // Ordenar de menor a mayor
    });

    const tablaCitas = document.getElementById('tablaCitasProgramadas').getElementsByTagName('tbody')[0];
    tablaCitas.innerHTML = ''; // Limpiar la tabla antes de agregar nuevas filas

    citasCarlos.forEach(cita => {
        const row = tablaCitas.insertRow();
        row.innerHTML = ` 
            <td>${cita.paciente}</td>
            <td>${cita.fecha}</td>
            <td>${cita.hora}</td>
            <td>${cita.consultorio}</td>
            <td><button>Validar</button></td>
            <td>${cita.medico}</td>
        `;
    });
}

// Función para buscar citas del Dr. Carlos Martínez
document.getElementById('buscarCitaForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const query = document.getElementById('buscarCita').value.toLowerCase();

    // Filtrar las citas del Dr. Carlos Martínez
    const resultados = citas.filter(cita => 
        cita.medico === 'Dr. Carlos Martínez' && (cita.paciente.toLowerCase().includes(query) || cita.medico.toLowerCase().includes(query))
    );

    const resultadoBusqueda = document.getElementById('resultadoBusqueda');
    resultadoBusqueda.innerHTML = ''; // Limpiar resultados previos
    resultadoBusqueda.style.display = 'block'; // Asegurar que el contenedor de resultados sea visible

    if (resultados.length > 0) {
        const listaResultados = document.createElement('ul');
        resultados.forEach(cita => {
            const li = document.createElement('li');
            li.textContent = `${cita.paciente} - ${cita.fecha} ${cita.hora} con ${cita.medico}`;
            listaResultados.appendChild(li);
        });
        resultadoBusqueda.appendChild(listaResultados);
    } else {
        resultadoBusqueda.textContent = 'No se encontraron citas.';
    }
});
mostrarCitas();