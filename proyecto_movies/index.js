const express = require("express");
const { connect } = require("./utils/db");
const movieRoutes = require("./routes/movie.routes");

connect();

const PORT = 3000;
const server = express();

server.use("/movies", movieRoutes);

server.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`);
});
