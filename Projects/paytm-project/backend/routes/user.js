const express=require("express");
const userRouter=express.Router();
const zod=require("zod");
const {User}=require('../db/db');
const {JWT_SECRET}=require('../config');
const jwt=require("jsonwebtoken");

const inputValidationZod= zod.object({
    username:zod.string().email(),
    password:zod.string().min(8),
    firstname:zod.string(),
    lastname:zod.string(),
})


userRouter.post("/signup",async (req,res)=>{

    const {success,error} = inputValidationZod.safeParse(req.body);

    if(!success)
    {
        return res.status(411).json({msg:"Invalid Input",message:error.issues[0].message});
    }

    const existingUser=await User.findOne({username:req.body.username});
    
    if(existingUser)
    {
        return res.status(409).json({msg:"Username is already taken"});
    }

    try{
        const user=await User.create({
            username:req.body.username,
            password:req.body.password,
            firstname:req.body.firstname,
            lastname:req.body.lastname,
        })
        const userId=user._id;
        const token=jwt.sign({userId:userId},JWT_SECRET);
        return res.status(200).json({msg:"User Created Successfully",token});
    }
    catch(e)
    {
        console.log(e);
        return res.status(500).json({error:e});
    }
   

});

module.exports={userRouter}