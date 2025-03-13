const mongoose = require("mongoose");
require("dotenv/config"); // Carga las variables de entorno

const conectarDB = async () => {
  try {
    await mongoose.connect(
      process.env.MONGO_URL ||
        "mongodb://mongo:FsYBNVcTGuJuDzCEXbPgbiLEVxoxkcDN@tramway.proxy.rlwy.net:13999"
    );
    console.log("MongoDB conectado");
  } catch (err) {
    console.error("Error al conectar MongoDB:", err);
    process.exit(1); // Finaliza la ejecución en caso de error crítico
  }
};

module.exports = conectarDB;
