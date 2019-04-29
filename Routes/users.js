let express = require('express')
let router = express.Router()
const userController = require('../Controllers/user')


router.get("/", userController.index)

//Sends back a single page with the details of a single account displayed
router.get("./:id", (req, res) => {

    //get the account from the API (Model)
    let userAccount = userApi.getUserAtId(users, req.params.id);
    
    //create a View on the single account and send it to the user
    //note: { account } the same as writing { account: account }
    res.render("users/:id", { users } ); 
  });
  
  //Users POST
  //this should add a new POST from req.body to users (global variable)
  //and sends back the same page to list all accounts.
  router.post("users", (req, res) => {
  });
  
  //Users PUT (note here you'll need to put /put at the end of your
  //path. This is a work around because HTML forms only allow GET and POST
  //requests). Make sure the HTML Form has the pattern: action='.../put' 
  router.put("users/:id/put", (req, res) => {
  });
  
  //accounts DELETE (note here you'll need to put /delete at the end of your
  //path. This is a work around because HTML forms only allow GET and POST
  //requests). Make sure the HTML Form has the pattern: action='.../put' 
  router.delete("/users/:id/delete", (req, res) => { 
  });
  


module.exports = router