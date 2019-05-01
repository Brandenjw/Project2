let express = require('express')
let router = express.Router()
const userController = require('../Controllers/user.js')
const scheduleController = require('../Controllers/schedule.js')

router.get("/", (req, res) => {
  res.render("landing")
})

router.get("/new", userController.new);
router.get("/user/:uid", userController.show);
router.get("user/:uid/schedule", userController.show)
router.post("/", userController.create)
router.put("/user/:uid", userController.update)
router.delete("/", userController.delete)



router.get("/schedule", scheduleController.index);
router.post("/schedule", scheduleController.create)
router.put("/schedule/:sId", scheduleController.update)
router.delete("/schedule/:sId", scheduleController.delete)


  
  
  
  


module.exports = router
