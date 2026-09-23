const express = require("express");
const Character = require("../models/Character");
const router = express.Router();

// LEER (GET) - Todos los personajes
router.get("/", async (req, res, next) => {
  try {
    const characters = await Character.find();
    return res.status(200).json(characters);
  } catch (error) {
    return next(error);
  }
});

// CREAR (POST) - Nuevo personaje
router.post("/create", async (req, res, next) => {
  try {
    const newCharacter = new Character({
      name: req.body.name,
      age: req.body.age,
      alias: req.body.alias,
      role: req.body.role,
    });
    const createdCharacter = await newCharacter.save();
    return res.status(201).json(createdCharacter);
  } catch (error) {
    next(error);
  }
});

// ELIMINAR (DELETE) - Por ID
router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    await Character.findByIdAndDelete(id);
    return res.status(200).json("Character deleted!");
  } catch (error) {
    return next(error);
  }
});

// EDITAR (PUT) - Por ID
router.put("/edit/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const characterModify = new Character(req.body);
    characterModify._id = id;
    const characterUpdated = await Character.findByIdAndUpdate(
      id,
      characterModify,
    );
    return res.status(200).json(characterUpdated);
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
