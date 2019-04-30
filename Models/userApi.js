const mongoose = require('../DB/connection');



//create the schema of the entity we want to use
let userSchema = mongoose.Schema({
    //object that defines the type of values for each key
    username: String,
    password: String,
    firstname: String,
    lastname: String,
    email: String,
    });
 
    module.exports = mongoose.model("User", userSchema);

  // const userCollection = mongoose.model("User", userSchema);
   
//   function createUser (){
//    return userCollection.create({
//       name: " ",
//       createDate:new Date()
//     });
// }
//     function getUserAtId(users, id) {
//       return userCollection.find();
//     }
    
//     function getUsers() {
//       return userCollection.find();
//     }
    
//     function addNewUser(users, newUser) {
//       users.push(newUser);
    
//       return users.length - 1;
//     }
//     //returns the promise with updated document
//     function updateUserAt(id, newUser) {
//       return UserCollection.update.One({
//         _id: id
//       }, newUser)
//     }
    
    
    
//     function deleteUserAt(users, id) {
//       users.splice(id, 1);
    
//       return users;
//     }
    
//     module.exports = {
//       createUser,
//       getUserAtId,
//       getUsers,
//       addNewUser,
//       deleteUserAt,
//       updateUserAt,
     
//     };

