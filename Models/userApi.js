const mongoose = require('../DB/connection');



//create the schema of the entity we want to use
let userSchema = mongoose.Schema({
    //object that defines the type of values for each key
    username: String,
    password: String,
    firstname: String,
    lastname: String,
    email: String,
    month: String,
    date: Number,

    });
 
    module.exports = mongoose.model("User", userSchema);

  

