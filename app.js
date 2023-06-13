const express = require("express");
const app = express();

const port = 6000;

// Ejecución del servidor
app.listen(port, () =>
  console.log(`Servidor corriendo en http://localhost:${port}`)
);
