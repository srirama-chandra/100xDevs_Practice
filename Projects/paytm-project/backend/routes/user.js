const express=require("express");
const userRouter=express.Router();
const {signUpInputValidation}=require('../middlewares/signUpInputValidation')
const {User}=require('../db/db');
const {JWT_SECRET}=require('../config');
const jwt=require("jsonwebtoken");
const { signInInputValidation } = require("../middlewares/signInInputValidation");


userRouter.post("/signup",signUpInputValidation,async (req,res)=>{

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

userRouter.post("/signin",signInInputValidation,async(req,res)=>{

    const existingUser=await User.findOne({username:req.body.username,password:req.body.password});
    if(!existingUser)
    {
        return res.status(403).json({msg:"Error While Logging In"});
    }
    const userId=existingUser._id;
    const token=jwt.sign({userId:userId},JWT_SECRET);
    return res.status(200).json({token});

})

module.exports={userRouter}