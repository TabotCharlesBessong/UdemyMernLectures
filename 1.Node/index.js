// console.log("Hello dude");

const fs = require('fs')
fs.readFile("hello.txt","utf-8",(error,data)=>{
  if(error) throw error 
  console.log(data);
})