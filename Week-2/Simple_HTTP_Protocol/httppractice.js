const express=require("express");
const app=express();
const bodyParser=require("body-parser");
app.use(bodyParser.json());

app.get("/:name",(req,res)=>{res.send("Welcome "+req.params.name)});

app.listen(3000);
