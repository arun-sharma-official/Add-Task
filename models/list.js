const mongoose = require('mongoose');

const taskschema = mongoose.Schema({task:String,description:String});
const taskmodel = mongoose.model('taskdb',taskschema);


module.exports = taskmodel;

