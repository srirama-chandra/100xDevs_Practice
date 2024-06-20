const mongoose=require("mongoose");
mongoose.connect("urlhere");
const userSchema=new mongoose.Schema({
    email:String,
    password:String,
});
const User=mongoose.model("User",userSchema);
module.exports=User;