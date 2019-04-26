let express = require('express')
let router = express.Router()
const donutController = require('../controllers/donuts.js')

//GET index Route
router.get('/',donutController.index)