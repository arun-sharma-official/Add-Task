const mongoose = require('mongoose');
require('dotenv').config();

 async function connectdb(){
    await mongoose.connect(process.env.mongouri)
    console.log("DB Connected!!")
}

module.exports = connectdb;


