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

const addNewPatient = async (request,response)=>{
    const newPatient = request.body
    try{
        const existingPatient = await patientsModel.findOne({patientID:request.body.patientID})
        if (existingPatient){
            return response.status(409).json({message:"already exists"})
        }
        const patient = await patientsModel.create(newPatient)
        response.status(201).json(patient)
        console.log("post request " + patient)
    }
    catch(error){
        response.status(500).json({message:error.message})
    }
}

module.exports = {getAllPatients,addNewPatient}