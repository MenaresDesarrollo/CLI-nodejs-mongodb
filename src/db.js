const {connect, connection} = require('mongoose')

//conection async to mongodb
const connectDB = async ()=>{
    await connect('mongodb://localhost/taskcli')
    //console.log('MongoDB connect');
}

connection.on('error', err =>console.log(err))



//export DB
module.exports = {
    connectDB,
    connection
}