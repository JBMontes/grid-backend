const express = require("express");
const grid = express.Router();
const {
  getAllTasks,
  getTask,
  createTask,
  deleteTask,
  updateTask,
} = require("../queries/grid.js");

const { checkTitle, checkDescription } = require("../validations/checkGrid.js");

grid.get("/", async (req, res) => {
  const allTasks = await getAllTasks();
  if (allTasks[0]) {
    res.status(200).json(allTasks);
  } else {
    res.status(500).json({ error: "server error" });
  }
});

grid.get("/:id", async (req, res) => {
  const { id } = req.params;
  const oneTask = await getTask(id);
  if (oneTask) {
    res.json(oneTask);
  } else {
    res.status(404).json({ error: "Not found" });
  }
});

grid.post("/", checkTitle, checkDescription, async (req, res) => {
  const task = await createTask(req.body);
  res.status(200).json(task);
});

grid.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedTask = await deleteTask(id);
  if (deletedTask.id) {
    res.status(200).json(deletedTask);
  } else {
    res.status(404).json({ error: "Task not found" });
  }
});

grid.put("/:id", checkTitle, checkDescription, async (req, res) => {
  const { id } = req.params;
  const updatedTask = await updateTask(id, req.body);
  if (updatedTask.id) {
    res.status(200).json(updatedTask);
  } else {
    res.status(404).json({ error: "Task not found" });
  }
});

module.exports = grid;
