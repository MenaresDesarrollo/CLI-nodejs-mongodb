const Task = require("../models/Task");
const { connection } = require("../db");

const addTask = async (task) => {
  //console.log(task);
  await Task.create(task);
  console.log("New Task created");
  await connection.close();
};

module.exports = {
  addTask,
};
