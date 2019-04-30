let express = require('express')
let router = express.Router()
const userController = require('../Controllers/user.js')
const scheduleController = require('../Controllers/schedule.js')

router.get("/", (req, res) => {
  res.render("landing")
})

router.get("/new", userController.new);
router.get("/user/schedule", scheduleController.new);

router.get("/user/:uid", userController.show);



router.get("user/:uid/schedule", userController.show)

//Sends back a single page with the details of a single account displayed
// router.get("/index/:id", (req, res) => {
//     res.render("index/", { user } ); 
//   });

//   router.get('/index/new'), (req, res) => {
//     res.render('user/new')
//   };
 
  
  //Users POST
  //this should add a new POST from req.body to users (global variable)
  //and sends back the same page to list all accounts.
  router.post("/", userController.create)
  router.post("/schedule", scheduleController.create)
  //Users PUT (note here you'll need to put /put at the end of your
  //path. This is a work around because HTML forms only allow GET and POST
  //requests). Make sure the HTML Form has the pattern: action='.../put' 
  // router.put("users/:id/put", (req, res) => {
  // });
  router.put("/user/:id", userController.update)
  router.put("/schedule/:id", scheduleController.update)
  //accounts DELETE (note here you'll need to put /delete at the end of your
  //path. This is a work around because HTML forms only allow GET and POST
  //requests). Make sure the HTML Form has the pattern: action='.../put' 
  // router.delete("/users/:id/delete", (req, res) => { 
  // });
  router.delete("/", userController.delete)
  router.delete("schedule", scheduleController.delete)


module.exports = router