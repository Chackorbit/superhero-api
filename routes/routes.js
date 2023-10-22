const express = require("express");
const multer = require("multer");

const router = express.Router();
const createSuperhero = require("../controllers/addSuperhero");
const listSuperheroes = require("../controllers/getAllSuperhero");
const getSuperheroDetails = require("../controllers/getDetailsSuperhero");
const updateSuperhero = require("../controllers/editSuperhero");
const deleteSuperhero = require("../controllers/deleteSuperhero");

const app = express();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Встановлюємо теку для зберігання файлів зображень
    cb(null, "public/image");
  },
  filename: function (req, file, cb) {
    // Генеруємо унікальне ім'я для файлу зображення
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

const uploadImage = upload.single("images");

// Маршрути
router.post("/superheroes/add", uploadImage, createSuperhero);
router.get("/superheroes", listSuperheroes);
router.get("/superheroes/:id", getSuperheroDetails);
router.put("/superheroes/:id/edit", uploadImage, updateSuperhero);
router.delete("/superheroes/:id", deleteSuperhero);

module.exports = router;
