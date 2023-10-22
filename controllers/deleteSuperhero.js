const Superhero = require("../model/superheroModel");
const fs = require("fs");
const path = require("path");

const deleteSuperhero = async (req, res) => {
  try {
    const id = req.params.id;

    const superhero = await Superhero.findByIdAndDelete(id);

    const oldImagePath = path.join("public", "image", superhero.images[0]);

    if (fs.existsSync(oldImagePath)) {
      fs.unlinkSync(oldImagePath);
    }

    if (!superhero) {
      res.status(404).send("Супергероя для видалення не знайдено.");
    } else {
      res.status(200).send("Супергероя видалено успішно!");
    }
  } catch (error) {
    res.status(500).send("Помилка при видаленні супергероя: " + error.message);
  }
};
module.exports = deleteSuperhero;
