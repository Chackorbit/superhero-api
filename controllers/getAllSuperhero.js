const Superhero = require("../model/superheroModel");

const listSuperheroes = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    const skip = (page - 1) * limit;

    // Отримуємо загальну кількість всіх супергероїв
    const totalSuperheroes = await Superhero.countDocuments();

    // Розрахунок загальної кількості сторінок
    const totalPages = Math.ceil(totalSuperheroes / limit);

    // Cписок супергероїв для поточної сторінки
    const superheroes = await Superhero.find().limit(limit).skip(skip).exec();

    res.status(200).json({
      superheroes,
      total_pages: totalPages,
    });
  } catch (error) {
    res
      .status(500)
      .send("Помилка при отриманні списку супергероїв: " + error.message);
  }
};

module.exports = listSuperheroes;
