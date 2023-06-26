const express =require("express")
const router = express.Router()
const {getAllPatients ,addNewPatient} = require('../controllers/patientsController')
router.route('/').get(getAllPatients).post(addNewPatient)

module.exports = router