// Esta línea importa el módulo 'express', que es un marco de aplicación web de Node.js. 
const express = require('express');
// : Esta línea importa el módulo 'mongoose', que es una biblioteca de modelado de objetos para MongoDB en Node.js. Proporciona una solución sencilla y basada en esquemas para interactuar con la base de datos MongoDB, permitiendo definir modelos y realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar). 
const mongoose = require('mongoose');
// Esta línea importa el módulo 'path', que es un módulo incorporado en Node.js. Proporciona utilidades para trabajar con rutas de archivos y directorios. Se utiliza para manipular y transformar rutas de archivos, extraer información sobre rutas y realizar operaciones en el sistema de archivos relacionadas con las rutas.
const path = require('path');

// Conexión a la base de datos de MongoDB
mongoose.connect('mongodb+srv://alex___0622:alex___0622@cluster2023.2rmhr53.mongodb.net/crudDB?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Conexión exitosa a MongoDB');
  })
  .catch((error) => {
    console.error('Error al conectar a MongoDB:', error);
  });

// Definición del esquema de ejemplo
const ejemploSchema = new mongoose.Schema({
  nombre: String,
  edad: Number
});

const Ejemplo = mongoose.model('Ejemplo', ejemploSchema);

// Configuración de la aplicación Express
const app = express();
app.use(express.json());

// Servir archivos estáticos desde la carpeta "public"
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para obtener todos los ejemplos
app.get('/ejemplo', async (req, res) => {
  try {
    const ejemplos = await Ejemplo.find();
    res.json(ejemplos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los ejemplos' });
  }
});

// Ruta para crear un nuevo ejemplo
app.post('/ejemplo', async (req, res) => {
  try {
    const nuevoEjemplo = new Ejemplo(req.body);
    await nuevoEjemplo.save();
    res.json(nuevoEjemplo);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear un nuevo ejemplo' });
  }
});

// Inicio del servidor
const puerto = 3200;
app.listen(puerto, () => {
  console.log(`Servidor iniciado en el puerto ${puerto}`);
});
