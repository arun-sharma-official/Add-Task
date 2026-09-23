const mongoose = require('mongoose');
require('dotenv').config();

 async function connectdb(){
    await mongoose.connect('mongodb+srv://codechitrakar_db_user:4ab9BxSAT3glTsgj@todolist.sphxolx.mongodb.net')
    console.log("DB Connected!!")
}

module.exports = connectdb;


