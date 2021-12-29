
const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const ejs = require("ejs")

const app = express()
const port = 3000

// we need a body parser url encluded 
app.use(bodyParser.urlencoded({extended:true}))
// this line of code helps us include stuffs like images and css files
app.use(express.static("public"))
// this line of code helps us get an  engine to connect to the database
app.set("view engine","ejs")
// This line make our connection
mongoose.connect("mongodb://localhost:27017/Players")

// lets craete a schema for our system 
const schema = {
  name:String,
  desc:String
}

// from the schema , you get the model
const Barca = mongoose.model("barcelonas",schema)

app.listen(port,()=>{
  console.log(`Server is running on port ${port}`);
})

app.get('/',(req,res)=>{
  Barca.find((error,barcelonas)=>{
    if(barcelonas){
      console.log(barcelonas);
      const barca = JSON.stringify(barcelonas)
      res.send(barca )
    } 
    else {
      res.write("There are no articles")
      console.log(error);
    }
      
  })
  // res.write("<h1>Hello dude , thank you for joining us</h1>")
  // res.send()
})