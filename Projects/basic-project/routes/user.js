const express = require('express');
const validateSignUpInput = require('../middlewares/validateSignUpInput');
const validateSignInInput = require('../middlewares/validateSignInInput');
const validateUser = require('../middlewares/validateUser');
const { User } = require('../db/db');
const jwt = require('jsonwebtoken');
const { JWT_PASSWORD } = require('../variables');

const app = express();

app.post('/signup',validateSignUpInput,async (req,res)=>{
    
    const existingUser = await User.findOne({email:req.body.email});
    if(existingUser){
        return res.json({msg:"User Already Exists"})
    }

    const user = await User.create({
        name:req.body.name,
        email: req.body.email,
        password : req.body.password,
    });
    const token = jwt.sign({ email : user.email},JWT_PASSWORD)
    res.status(200).json({msg:"User Created Successfully",token,})
});

app.post('/signin',validateSignInInput,async(req,res)=>{

    const user = await User.findOne({email:req.body.email,password:req.body.password})

    if(! user ){
        return res.json({msg:"User Doesn't Exists"})
    }

    const token = jwt.sign({ email : user.email},JWT_PASSWORD);
    res.status(200).json({msg:"User Logged In Successfully",token,})

});

app.post('/purchase/:id',validateUser,async(req,res)=>{

    const user = await User.updateOne({ email:req.user.email },{"$push":{purchasedCourses:req.params.id}})

    res.status(200).json({msg:"User Purchased Course Successfully",})

});

app.post('/purchases',validateUser,async(req,res)=>{

    const user = await User.findOne({ email:req.user.email }).populate("purchasedCourses","title");

    res.status(200).json({user,})

});

module.exports = app;