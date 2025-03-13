const request = require("supertest");
const { createServer } = require("http");
const express = require("express");
const cors = require("cors");
require("dotenv/config");
const conectarDB = require("../config/db");

let server; // Definimos una variable global para el servidor

// Inicializar la aplicación de Express
const app = express();

// Configuración de Express
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(cors());

// Ruta básica para la prueba
app.get("/", (req, res) => {
  res.status(200).send("¡Servidor funcionando!");
});

// Conectar a MongoDB
beforeAll(async () => {
  await conectarDB(); // Asegúrate de que la conexión a DB sea exitosa antes de continuar
});

// Iniciar servidor antes de las pruebas
beforeAll((done) => {
  server = createServer(app); // Usamos la variable global 'server'
  server.listen(PORT, done);
});

// Test de la ruta GET /
describe("Servidor Express", () => {
  it("debería responder con un estado 200 a la solicitud GET /", async () => {
    const response = await request(server).get("/");
    expect(response.status).toBe(200);
  });
});

// Cerrar el servidor después de las pruebas
afterAll((done) => {
  server.close(done); // Cerramos el servidor
});
