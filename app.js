const express = require("express");
const cors = require("cors");
require("dotenv/config");
const { createServer } = require("http");
const conectarDB = require("./config/db");

const app = express();
const server = createServer(app);

// Configuración de Express
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(cors());

// Conectar a MongoDB
conectarDB();

// Iniciar servidor
server.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
