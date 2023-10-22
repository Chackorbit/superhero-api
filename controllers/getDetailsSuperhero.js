const Superhero = require("../model/superheroModel");

const getSuperheroDetails = async (req, res) => {
  try {
    const id = req.params.id;

    const superhero = await Superhero.findById(id);
    if (!superhero) {
      res.status(404).send("Супергероя не знайдено.");
    } else {
      res.status(200).send(superhero);
    }
  } catch (error) {
    res
      .status(500)
      .send("Помилка при отриманні даних супергероя: " + error.message);
  }
};

module.exports = getSuperheroDetails;
