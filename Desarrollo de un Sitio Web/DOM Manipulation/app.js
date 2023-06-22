const express = require('express');
const app = express();
const path = require('path');

const publicPath = path.join(__dirname, 'public');

// Ruta para servir archivos estáticos
app.use(express.static(publicPath));

// Ruta de ejemplo
app.get('/', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

// Inicia el servidor
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});