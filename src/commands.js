const { program } = require("commander");
const { prompt } = require("inquirer");
const {
  addTask,
  listTask,
  removeTask,
} = require("./controllers/task.controllers");

//Se da la version y una descripcion al CLI
program.version("0.0.1").description("a command line tool for managing task");


//solicitud al usuario
const taskQuestions = [
  {
    type: "input",
    message: "Task title",
    name: "title",
  },
  {
    type: "input",
    message: "Task description",
    name: "description",
  },
];

//comando para guardar
program
  .command("save")
  .alias("s")
  .action(async () => {
    const answers = await prompt(taskQuestions);
    addTask(answers);
  });

//Comando para listas
program
  .command("list")
  .alias("l")
  .action(() => listTask());

//comando para eliminar
program
  .command("delete <id>")
  .alias("d")
  .action((_id) => removeTask(_id));

program.parse(process.argv);
