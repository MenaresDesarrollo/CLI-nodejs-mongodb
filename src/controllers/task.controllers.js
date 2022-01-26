const Task = require("../models/Task");
const { connection } = require("../db");
const { remove } = require("../models/Task");

//Add task to mongo
const addTask = async (task) => {
  //console.log(task);
  await Task.create(task);
  console.log("New Task created");
  await connection.close();
};

const findTask = async (text) => {
  const search = new RegExp(text, "i")

  const tasks = await Task.find({
    $or: [{title: search}, {description: search}]
  })

  if (tasks.length === 0){
    console.log("No Task found");
    await connection.close();
    process.exit(0);
  }

  console.table({
    id: tasks[0]._id.toString(),
    title: tasks[0].title,
    description: tasks[0].description, 
  });
  await connection.close();
  process.exit(0);
}

//list tasks in mongofb
const listTask = async () => {
  const tasks = await Task.find().lean();
  console.table(
    tasks.map((task) => ({
      _id: task._id.toString(),
      title: task.title,
      description: task.description,
    }))
  );
  await connection.close();
  process.exit(0);
};

//actualizar por id
const updateTask = async (_id, newTask) => {
  await Task.updateOne({ _id }, newTask);
  console.log("Task updated");
  await connection.close();
};

//delete task in mongodb
const removeTask = async (_id) => {
  await Task.findByIdAndDelete(_id);
  console.log("Task Delete");
  await connection.close();
};

module.exports = {
  addTask,
  listTask,
  removeTask,
  updateTask,
  findTask
};
