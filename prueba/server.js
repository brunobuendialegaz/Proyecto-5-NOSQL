// Importar el módulo http
const http = require("http");

// Crear un servidor
const server = http.createServer((req, res) => {
  // Configurar la respuesta
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World");
});

// Escuchar en el puerto 3000
server.listen(3000, () => {
  console.log("Servidor escuchando en el puerto 3000");
});
