

const express  = require("express")

// const PORT = process.env.PORT
const port = 3000
const app = express()
app.listen(port,()=>{
  console.log(`The server has started on port ${port}`);
})

app.get('/',(req,res)=>{
  res.send("<br><br><br><br><center><h1>Server is <hr> up and running</h1></center>")
})