const {program} = require('commander');
const {prompt} = require('inquirer');
const { addTask } = require ('./controllers/task.controllers')

//Se da la version y una descripcion al CLI
program.version('0.0.1').description("a command line tool for managing task");

//comando para guardar
program.command('save').action(async ()=>{
    //solicitud al usuario
    const answers = await prompt([
        {
            type: 'input',
            message: 'Task title',
            name: 'title'
        },
        {
            type: 'input',
            message: 'Task description',
            name: 'description'
        }
    ])
    addTask(answers);
});

program.parse(process.argv);