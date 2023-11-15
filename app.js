const express = require("express");
const cors = require("cors");

const gridController = require("./controllers/gridControllers.js");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/grid", gridController);

app.get("/", (req, res) => {
  res.send("Welcome to the Grid ");
});

app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

module.exports = app;
