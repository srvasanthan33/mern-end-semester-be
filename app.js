const express = require("express")
const app = express()
const PORT = 3500

app.get('/',(request,response) =>{
    response.send("You have reached server ")
})
app.listen(PORT,() => console.log(`server started running at http://localhost:${PORT}`))

