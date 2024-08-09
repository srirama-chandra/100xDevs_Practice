const express=require("express");
const userRouter=express.Router();
const {inputValidationMiddleware}=require('../middlewares/inputValidationMiddleware')
const {User}=require('../db/db');
const {JWT_SECRET}=require('../config');
const jwt=require("jsonwebtoken");


userRouter.post("/signup",inputValidationMiddleware,async (req,res)=>{

    const existingUser=await User.findOne({username:req.body.username});
    
    if(existingUser)
    {
        return res.status(409).json({msg:"Username is already taken"});
    }

    const user=await User.create({
        username:req.body.username,
        password:req.body.password,
        firstname:req.body.firstname,
        lastname:req.body.lastname,
    })
    const userId=user._id;
    const token=jwt.sign({userId:userId},JWT_SECRET);
    return res.status(200).json({msg:"User Created Successfully",token});

});

module.exports={userRouter}