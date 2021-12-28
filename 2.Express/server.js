

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

app.get('/about',(req,res)=>{
  res.send("<center><br><br><br><br><h1><b><i>My email adress</i></b></h1></center>")
}) 

app.get('/charles',(req,res)=>{
  res.send(`
  <center>
  <h1>
    <b>
    Hello my i am called Charles and i am software developer i 
program in  </b>
  </h1>
  <ul>
    <li>Html</li>
    <li>css</li>
    <li>js</li>
    <li>c++</li>
    <li>c</li>
    <li>Java</li>
    <li>Python</li>
    <li>React</li>
  </ul>
</center>
  `)
})