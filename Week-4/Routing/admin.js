const express=require("express");
const app=express();

app.get("/",(req,res)=>{
    res.json({msg:"Admin Route"});
})
module.exports=app;
