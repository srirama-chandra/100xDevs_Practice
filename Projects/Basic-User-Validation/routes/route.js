const express=require("express");
const jwt=require("jsonwebtoken");
const jwtPassword="Password";
const app=express();
const User=require("../db/user");
const jwtValidation=require("../middlewares/jwtValidation");
const inputValidationMiddleware=require("../middlewares/inputValidationMiddleware");
const userValidationMiddleware=require("../middlewares/userValidationMiddleware");

app.post("/signup",inputValidationMiddleware,async(req,res)=>{

    const newUser=new User({
        email:req.body.email,
        password:req.body.password,
    });
    await newUser.save();
    res.json({message:"User Data Saved Successfully"});

});

app.post("/signin",inputValidationMiddleware,userValidationMiddleware,async(req,res)=>{
    const token=jwt.sign({email:req.body.email},jwtPassword);
    res.json({message:"User Signed In Successfully",token})
});

app.post("/request",inputValidationMiddleware,userValidationMiddleware,jwtValidation,async(req,res)=>{
    res.json({message:"User Fired A Request"})
});

module.exports=app;