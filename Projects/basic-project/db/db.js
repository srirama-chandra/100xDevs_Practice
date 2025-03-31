
const mongoose = require('mongoose');
const { DB_URL } = require('../variables');

mongoose.connect(DB_URL);

const User = mongoose.model('User', {
    name : String,
    email: String,
    password : String,
    purchasedCourses : [{
        type : mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }]
})

const Course = mongoose.model('Course', {
    title: String,
    description: String
})

module.exports = { User, Course};