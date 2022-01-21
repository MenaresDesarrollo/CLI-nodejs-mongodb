const {program} = require('commander');

//Se da la version y una descripcion al CLI
program.version('0.0.1').description("a command line tool for managing task");
//comando para guardar
program.command('save').action(()=>{
    console.log('saving..')
})

program.parse(process.argv);