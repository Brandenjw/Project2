let express = require('express')
let router = express.Router()
const userController = require('../Controllers/user.js')
const scheduleController = require('../Controllers/schedule.js')
const galleryController = require('../Controllers/gallery.js')

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
router.put("/schedule2/:id", scheduleController.showUpdate)
router.get("/schedule2/:id", scheduleController.showUpdate)
router.delete("/schedule/:sId", scheduleController.delete)

router.get("/gallery", galleryController.index);
router.post("/gallery", galleryController.create)
router.put("/gallery", galleryController.update)
router.delete("/gallery", galleryController.delete)


  
  
  
  


module.exports = router
