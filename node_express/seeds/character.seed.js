const mongoose = require("mongoose");
const Character = require("../models/Character"); // <-- Busca el archivo con 'C' mayúscula

// 1. Definimos los datos iniciales
const characters = [
  { name: "Ursula Corberó", age: 32, alias: "Tokio" },
  { name: "Pedro Alonso", age: 50, alias: "Berlín" },
  { name: "Álvaro Morte", age: 46, alias: "Profesor" },
  { name: "Alba Flores", age: 34, alias: "Nairobi" },
  { name: "Jaime Lorente", age: 29, alias: "Denver" },
  { name: "Darko Peric", age: 44, alias: "Helsinki" },
];

// 2. Convertimos los datos en instancias del Modelo Mongoose
const characterDocuments = characters.map(
  (character) => new Character(character),
);

// 3. Conectamos a la base de datos "casa-de-papel"
mongoose
  .connect("mongodb://localhost:27017/casa-de-papel")
  .then(async () => {
    // Buscamos si ya hay personajes y los borramos para no duplicar
    const allCharacters = await Character.find();
    if (allCharacters.length) {
      await Character.collection.drop();
    }
  })
  .catch((err) => console.log(`Error deleting data: ${err}`))
  .then(async () => {
    // Insertamos los nuevos personajes
    await Character.insertMany(characterDocuments);
    console.log("¡Base de datos poblada con éxito!");
  })
  .catch((err) => console.log(`Error creating data: ${err}`))
  // Nos desconectamos al terminar
  .finally(() => mongoose.disconnect());
