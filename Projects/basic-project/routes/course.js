const express = require('express');
const validateUser = require('../middlewares/validateUser');
const { Course } = require('../db/db');
const validateCourseInput = require('../middlewares/validateCourseInput');

const app = express();

app.post('/all',validateUser,async(req,res)=>{

    const courses =  await Course.find({});
    return res.status(200).json({courses,});

});

app.post('/add',validateCourseInput,async (req,res)=>{

    const course = await Course.create({
        title: req.body.title,
        description : req.body.description,
    })
    return res.status(200).json({msg: `Course Created With Id - ${course._id}`})
});

module.exports = app;