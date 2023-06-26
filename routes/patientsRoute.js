const express =require("express")
const router = express.Router()
const {getAllPatients} = require('../controllers/patientsController')
router.route('/').get(getAllPatients)

module.exports = router