let express = require('express')
let router = express.Router()
const userController = require('../controllers/artclass.js')


router.get("/", userController.index)




module.exports = router