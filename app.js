const express = require("express");
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');

//Inicializo la libreria express
const app = express();
const port = process.env.PORT || 6000;

// Configuración de Middlewares
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));


//Rutas del servidor
app.use('/', require('./routes/routes'));

// Ejecución del servidor
app.listen(port, () =>
  console.log(`Servidor corriendo en http://localhost:${port}`)
);
