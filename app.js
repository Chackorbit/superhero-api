const express = require("express");
const cors = require("cors");
// const mongoose = require("mongoose");
require("dotenv").config();

const superheroRoutes = require("./routes/routes");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", superheroRoutes);

const path = require("path");
app.use("/public", express.static(path.join(__dirname, "public", "image")));

app.get("/public/image/:imageName", (req, res) => {
  const imageName = req.params.imageName;
  res.sendFile(path.join(__dirname, "public", "image", imageName));
});

module.exports = app;
