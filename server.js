// Hago referencia a las dependencias que necesito
const express = require('express');
const cors = require('cors');

// // Necesito mi archivo de configuracion de las variables de entorno
// require('dotenv').config();
const port = process.env.PORT || 3000;

const app = express();

// indico que usa todas los paquetes del proyecto
app.use(cors());
app.use(express.json());
app.use(express.static('public')); // Carpeta con los archivos estáticos (HTML, CSS, JS)


// ENDPOINTS //
// Ruta para servir el index
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Manejo de errores
app.use((err, req, res, next) => {
  res.status(500).send(err.message);
});

app.listen(port, () => console.log(`Servidor corriendo en http://localhost:${port}`));
