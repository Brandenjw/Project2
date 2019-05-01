const mongoose = require('../DB/connection');

//create the schema of the entity we want to use
let scheduleSchema = mongoose.Schema({
    //object that defines the type of values for each key
    username: String,
    month: String,
    date: Date,

    });
 
    module.exports = mongoose.model("Schedule", scheduleSchema);