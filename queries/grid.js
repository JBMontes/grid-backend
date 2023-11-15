const db = require("../db/dbConfig.js");

const getAllTasks = async () => {
  try {
    const allTasks = await db.any("SELECT * FROM grid");
    return allTasks;
  } catch (err) {
    return err;
  }
};

const getTask = async (id) => {
  try {
    const oneTask = await db.one("SELECT * FROM grid WHERE id=$1", id);
    return oneTask;
  } catch (err) {
    return err;
  }
};

const createTask = async (task) => {
  try {
    const newTask = await db.one(
      "INSERT INTO grid (title, priority,description,deadline, completed,category) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [
        task.title,
        task.priority,
        task.description,
        task.deadline,
        task.completed,
        task.category,
      ]
    );
    return newTask;
  } catch (err) {
    return err;
  }
};

const deleteTask = async (id) => {
  try {
    const deletedTask = await db.one(
      "DELETE FROM grid WHERE id=$1 RETURNING *",
      id
    );
    return deletedTask;
  } catch (err) {
    return err;
  }
};

const updateTask = async (id, task) => {
  try {
    const updatedTask = await db.one(
      "UPDATE grid SET title=$1, priority=$2, description=$3, deadline=$4, completed=$5, category=$6 WHERE id=$7 RETURNING *",
      [
        task.title,
        task.priority,
        task.description,
        task.deadline,
        task.completed,
        task.category,
        id,
      ]
    );
    return updatedTask;
  } catch (err) {
    return err;
  }
};

module.exports = {
  getAllTasks,
  getTask,
  createTask,
  deleteTask,
  updateTask,
};
