require('dotenv').config()
const express = require("express")
const app = express()
const PORT = 3500
const patientsRouter = require('./routes/patientsRoute')
const mongoose = require('mongoose')

app.get('/',(request,response) =>{
    response.send("You have reached server ")
})

mongoose.connect(process.env.DB_URL)
db = mongoose.connection
db.on('error',(errorMessage) => console.log('error while connecting to database',errorMessage))
db.once('open',() => console.log("connection established"))

app.use('/api/v1/patients',patientsRouter)
app.listen(PORT,() => console.log(`server started running at http://localhost:${PORT}`))

