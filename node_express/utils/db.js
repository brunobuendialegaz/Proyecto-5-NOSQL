const mongoose = require("mongoose");

// CORREGIDO: Usamos casa-de-papel en lugar de proyecto
const urlDb = "mongodb://localhost:27017/casa-de-papel";

const connect = async () => {
  try {
    await mongoose.connect(urlDb);
    console.log(`Conected with db succesfully`);
  } catch (error) {
    console.log("Error to connect with db");
  }
};

module.exports = {
  connect,
};
