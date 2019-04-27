const mongoose = require('./connection.js');

//input functions for page

// require the user model
const Donut = require("./userApi");


//create the schema of the entity we want to use
let UserSchema = mongoose.Schema({
    //object that defines the type of values for each key
    name: String,
  });

  const UserCollection = mongoose.model("Account", AccountSchema);
  function createAccount(){
   return AccountCollection.create({
      name: "bob",
      balance: 20,
      isActive: true,
      createDate:new Date()
    });