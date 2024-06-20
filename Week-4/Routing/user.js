const express=require("express");
const app=express();

app.get("/",(req,res)=>{
    res.json({msg:"User Route"});
})
module.exports=app;