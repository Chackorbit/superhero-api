const Superhero = require("../model/superheroModel");
const fs = require("fs");
const path = require("path");

const updateSuperhero = async (req, res) => {
  try {
    const id = req.params.id;
    const updateData = req.body;
    const newImage = req.file;

    const superhero = await Superhero.findById(id);

    // Перевірка, чи є нове зображення
    if (newImage) {
      if (superhero.images[0]) {
        // Видалення старого файлу, використовуючи модуль 'fs'
        const oldImagePath = path.join("public", "image", superhero.images[0]);
        console.log("oldImagePath: ", oldImagePath);

        if (fs.existsSync(oldImagePath)) {
          console.log("delete photo");

          fs.unlinkSync(oldImagePath);
        }
      }

      updateData.images = newImage.filename;
    }

    const updatedSuperhero = await Superhero.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    if (!updatedSuperhero) {
      res.status(404).send("Супергероя для редагування не знайдено.");
    } else {
      res.status(200).send(updatedSuperhero);
    }
  } catch (error) {
    res
      .status(500)
      .send("Помилка при редагуванні супергероя: " + error.message);
  }
};

module.exports = updateSuperhero;
