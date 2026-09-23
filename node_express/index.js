// Importa el módulo Express para facilitar la creación del servidor
const express = require("express");

const PORT = 3000;

// Crea una instancia de la aplicación Express
const server = express();

// Crea un router para definir rutas separadamente
const router = express.Router();

// Ruta raíz: responde con un saludo
router.get("/", (req, res) => {
  res.send("Hello Prometeo!");
});

// Ruta /movies: responde con una lista de películas
router.get("/movies", (req, res) => {
  const movies = ["Harry Potter", "Titanic", "Back to the Future"];
  res.send(movies);
});

// NUEVA RUTA 1: Parámetros de ruta (req.params)
router.get("/movies/:movie", (req, res) => {
  const nameMovie = req.params.movie;
  const movies = ["Harry Potter", "Titanic", "Back to the Future"];

  const findMovieIndex = movies.indexOf(nameMovie);

  if (findMovieIndex === -1) {
    return res.send("No se ha encontrado la película");
  }
  res.send(movies[findMovieIndex]);
});

// NUEVA RUTA 2: Parámetros de consulta (req.query)
router.get("/query", (req, res) => {
  const nombre = req.query.nombre;
  const apellido = req.query.apellido;
  res.send(
    "¡Hola Mundo! os saluda => " +
      nombre +
      " " +
      apellido +
      " desde GET 2, con Query params",
  );
});

// Usa el router para manejar las rutas desde la raíz
server.use("/", router);

// Inicia el servidor y muestra un mensaje en consola
server.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`);
});
