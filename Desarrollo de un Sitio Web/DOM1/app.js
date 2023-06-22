const express = require('express');
const app = express();
const path = require('path');

const publicPath = path.join(__dirname, 'public');

//Inicializamos la ruta para servidor los archivos
app.use(express.static(publicPath));

//Inicializar la ruta para desplegar
app.get('/', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

//Inicializar el servidor
const port = 8443;
app.listen(port, () => {
    console.log(`Servidor iniciado en el puerto http://localhost:${port}`);
})