const mongoose = require('../DB/connection');

//create the schema of the entity we want to use
let gallerySchema = mongoose.Schema({
    //object that defines the type of values for each key
    
    username: String,
    firstname: String,
    lastname: String,
    email: String,
    image: File

    });
 
    module.exports = mongoose.model("Gallery", gallerySchema);

