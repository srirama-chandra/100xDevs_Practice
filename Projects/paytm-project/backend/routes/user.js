const express=require("express");
const userRouter=express.Router();
const {signUpInputValidation}=require('../middlewares/signUpInputValidation')
const {User, Account}=require('../db/db');
const {JWT_SECRET}=require('../config');
const jwt=require("jsonwebtoken");
const { signInInputValidation } = require("../middlewares/signInInputValidation");
const { authMiddleware } = require("../middlewares/middleware");
const { upddateUserInputValidation } = require("../middlewares/updateUserDataValidation");


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
    await Account.create({userId:userId,balance:1+Math.random()*100000});
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

});

userRouter.put("/",authMiddleware,upddateUserInputValidation,async(req,res)=>{

    await User.updateOne({_id:req.userId},req.body);
    res.json({msg:"Updated Successfully"});

});

userRouter.get("/bulk",async(req,res)=>{

    const name= req.query.filter || "";

    const users=await User.find({
        $or:[{
            firstname:{
                "$regex":name
            }
        },
        {
            lastname:{
                "$regex":name
            }
        }]
    });

    res.status(400).json({
        user:users.map(e => {
            return {
                _id:e.id,
                username:e.username,
                firstname:e.firstname,
                lastname:e.lastname
            }
        })
    })
});

module.exports={userRouter}