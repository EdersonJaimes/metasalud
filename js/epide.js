document.addEventListener('DOMContentLoaded', function() {
    // Datos para el gráfico de evolución de casos por mes
    const meses = ['Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    const casosMensuales = [50, 100, 150, 200, 250, 300, 400];

    // Datos para el gráfico de casos por región
    const regiones = ['Giron', 'Piedecuesta', 'Floridablanca', 'Bucaramanga'];
    const casosPorRegion = [120, 150, 200, 180];

    // Datos para el gráfico de nivel de contagio por enfermedad
    const enfermedades = ['Dengue', 'Zika', 'COVID-19', 'Otros'];
    const nivelContagio = [80, 60, 95, 50];  // Nivel de contagio en porcentaje (del 0% al 100%)

    // Datos para el gráfico de contagios por enfermedad en los últimos 5 meses
    const mesesUltimos5 = ['Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    const contagiosDengue = [20, 40, 50, 60, 80];
    const contagiosZika = [10, 30, 25, 20, 35];
    const contagiosCovid = [100, 150, 120, 180, 220];
    const contagiosOtros = [5, 10, 15, 20, 25];

    // Crear gráfico de evolución de casos (línea)
    var ctx1 = document.getElementById('evolucionCasos').getContext('2d');
    var evolucionCasosChart = new Chart(ctx1, {
        type: 'line',
        data: {
            labels: meses,
            datasets: [{
                label: 'Casos confirmados',
                data: casosMensuales,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true,
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Crear gráfico de casos por región (barras)
    var ctx2 = document.getElementById('casosPorRegion').getContext('2d');
    var casosPorRegionChart = new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: regiones,
            datasets: [{
                label: 'Casos confirmados',
                data: casosPorRegion,
                backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)'],
                borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Crear gráfico de nivel de contagio por enfermedad (barras)
    var ctx3 = document.getElementById('nivelContagio').getContext('2d');
    var nivelContagioChart = new Chart(ctx3, {
        type: 'bar',
        data: {
            labels: enfermedades,
            datasets: [{
                label: 'Nivel de Contagio (%)',
                data: nivelContagio,
                backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)'],
                borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100  // Nivel de contagio en porcentaje
                }
            }
        }
    });

    // Crear gráfico de contagios por enfermedad en los últimos 5 meses (línea)
    var ctx4 = document.getElementById('contagiosUltimos5Meses').getContext('2d');
    var contagiosChart = new Chart(ctx4, {
        type: 'line',
        data: {
            labels: mesesUltimos5,
            datasets: [
                {
                    label: 'Dengue',
                    data: contagiosDengue,
                    borderColor: 'rgba(255, 99, 132, 1)',
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    fill: true,
                },
                {
                    label: 'Zika',
                    data: contagiosZika,
                    borderColor: 'rgba(54, 162, 235, 1)',
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    fill: true,
                },
                {
                    label: 'COVID-19',
                    data: contagiosCovid,
                    borderColor: 'rgba(75, 192, 192, 1)',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    fill: true,
                },
                {
                    label: 'Otros',
                    data: contagiosOtros,
                    borderColor: 'rgba(153, 102, 255, 1)',
                    backgroundColor: 'rgba(153, 102, 255, 0.2)',
                    fill: true,
                }
            ]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Función para cambiar el contenido de las secciones
    function cambiarContenido(seccion) {
        const secciones = document.querySelectorAll('.seccion');
        secciones.forEach(function(seccionElement) {
            seccionElement.style.display = 'none'; // Ocultar todas las secciones
        });
        
        const mostrarSeccion = document.getElementById(seccion);
        mostrarSeccion.style.display = 'block'; // Mostrar la sección correspondiente
    }

    // Funciones para cambiar la sección activa al hacer clic en los botones
    document.getElementById('volverBtn').addEventListener('click', function() {
        window.history.back();
    });

    document.getElementById('inicioBtn').addEventListener('click', function() {
        cambiarContenido('inicio');
    });


    document.getElementById('sectorizarBtn').addEventListener('click', function() {
        cambiarContenido('sectorizar');
    });

    document.getElementById('contagiosBtn').addEventListener('click', function() {
        cambiarContenido('contagios');
    });

    document.getElementById('enfermedadesBtn').addEventListener('click', function() {
        cambiarContenido('enfermedades');
    });

    // Establecer la vista inicial
    cambiarContenido('inicio');
});
