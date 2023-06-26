const express = require("express")
const app = express()
const PORT = 3500
const patientsRouter = require('./routes/patientsRoute')
app.get('/',(request,response) =>{
    response.send("You have reached server ")
})
app.use('/api/v1/patients',patientsRouter)
app.listen(PORT,() => console.log(`server started running at http://localhost:${PORT}`))

