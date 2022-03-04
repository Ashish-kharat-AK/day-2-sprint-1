const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    return res.send("Hello world")
})

app.get("/books",()=>{
    
})

app.listen(1234,async()=>{
    console.log("App is listening on port ",1234)
})