const Task = require("../models/Task");
const { connection } = require("../db");

//Add task to mongo
const addTask = async (task) => {
  //console.log(task);
  await Task.create(task);
  console.log("New Task created");
  await connection.close();
};

//list tasks in mongofb
const listTask = async () =>{
  const tasks = await Task.find().lean();
  console.table(tasks.map(task => ({
    _id: task._id.toString(),
    title: task.title,
    description: task.description,
  })));
  await connection.close();
  process.exit(0);
}

module.exports = {
  addTask,
  listTask
};
