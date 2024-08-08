const mongoose=require("mongoose");
const { DB_URL } = require("../config");

mongoose.connect(DB_URL);

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        unique:true,
        lowercase:true,
        minLength:4,
        maxLength:12,
        required:true,
    },
    password:{
        type:String,
        minLength:8,
        maxLength:14,
        required:true,
    },
    firstname:{
        type:String,
        maxLength:20,
        required:true,
    },
    lastname:{
        type:String,
        maxLength:20,
        required:true,
    },
});

const User=mongoose.model('users',userSchema);

module.exports={User};