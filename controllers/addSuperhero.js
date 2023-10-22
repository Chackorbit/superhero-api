const Superhero = require("../model/superheroModel");

const createSuperhero = async (req, res) => {
  try {
    const newHero = req.body;
    if (req.file) {
      newHero.images = req.file.filename;
    }
    if (!req.file) {
      newHero.images = [];
    }

    const superhero = new Superhero(newHero);
    await superhero.save();
    res.status(201).send(superhero);
  } catch (error) {
    res.status(500).send("Помилка при створенні супергероя: " + error.message);
  }
};

module.exports = createSuperhero;
