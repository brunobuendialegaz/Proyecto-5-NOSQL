const express = require("express");
const { connect } = require("./utils/db");
const characterRoutes = require("./routes/character.routes");

connect(); // Conectamos a MongoDB

const PORT = 3000;
const server = express();

// MIDDLEWARES IMPORTANTES: Permiten leer el req.body que enviamos
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

// Conectamos las rutas (Todas empezarán por /characters)
server.use("/characters", characterRoutes);

// Manejador de rutas no encontradas (Error 404)
server.use((req, res, next) => {
  const error = new Error("Route not found");
  error.status = 404;
  next(error);
});

// Manejador de errores generales
server.use((error, req, res, next) => {
  return res
    .status(error.status || 500)
    .json(error.message || "Unexpected error");
});

server.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`);
});
