const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Servir archivos estáticos de la carpeta raíz del proyecto
app.use(express.static(path.join(__dirname, '..'))); 
// Ruta para la página de inicio
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../vistas', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
