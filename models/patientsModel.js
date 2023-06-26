const mongoose = require('mongoose')

const patientSchema = new mongoose.Schema({
    patientName :{
        type:String,
        required:true,
        
    },
    patientID:{
        type:String,
        required:true,
        unique:true,
        index:true
    },
    patientAge:{
        type:String,
        required:true
    },
    patientGender:{
        type:String,
        enum:['Male','Female','others'],
        required:true
    },
    patientCity:{
        type:String,
        required:true
    },
    patientMobile:{
        type:String,
        required:true,
        unique:true
    },
    patientEmail:{
        type:String,
        required:true,
        unique:true
    },
    patientBloodGroup:{
        type:String,
        enum:['A','B','O'],
        required:true,

    }
},
{
    collection:'patients'
})

module.exports = mongoose.model('patients',patientSchema)