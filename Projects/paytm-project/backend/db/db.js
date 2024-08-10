const mongoose=require("mongoose");
const { DB_URL } = require("../config");

mongoose.connect(DB_URL);

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        unique:true,
        lowercase:true,
        minLength:4,
        maxLength:30,
        required:true,
    },
    password:{
        type:String,
        minLength:8,
        maxLength:20,
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

const accountSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
    },
    balance:{
        type:Number,
        required:true
    }
})

const User=mongoose.model('users',userSchema);
const Account =mongoose.model('account',accountSchema);

module.exports={User, Account};