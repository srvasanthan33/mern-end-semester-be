const patientsModel = require('../models/patientsModel')
const initialData = require('../data/initialData')

const getAllPatients = async (request,response) =>{
    
    try{
        const patientData = await patientsModel.find()
        if (patientData.length === 0){
            const patientData = await patientsModel.insertMany(initialData)
            console.log(patientData)
        }
        
        response.status(200).json(patientData)
    }
    catch(error){
        console.log(error);
        response.status(500).json({message:error.message})
    }
}

module.exports = {getAllPatients}