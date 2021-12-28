
const express  = require("express")
const bodyParser = require("body-parser")

const app = express()
const port = 5000
app.listen(port,()=>{
  console.log(`server is up and running on port  ${port}`);
})

// body parser
app.use(bodyParser.urlencoded({extended:true}))

// app.get('/',(req,res)=>{
  // // res.send("<center><br><br><br> <h1>Hello dear developers ,<hr> lets build a calculator using node</h1></center>")
// }) 

app.get('/',(req,res)=>{
  // console.log(__dirname);
  // res.send("hello dear")
  res.sendFile(__dirname + "/calculator.html")
})

app.post("/",(req,res)=>{
  let weight = Number(req.body.weight) 
  let height = Number(req.body.height)
  // let height2 = height * height 
  const bmi = weight / (height * height)
  // req.body
  res.send("<h1>Thanks for posting the addition of two numbers which are </h1> " + bmi)
})