// requirements: import mongoose
const mongoose = require('mongoose')


// Connect to a local database 
mongoose.connect("mongodb://localhost/artclass", {useNewUrlParser:true}).then(()=>{
    console.log ("Connected to MongoDB")
})

module.exports = mongoose