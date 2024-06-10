const express=require("express");
const app=express();

app.use(express.json());

const mongoose=require("mongoose");

mongoose.connect("mongodb://admin:ramchand@ac-hkzkfaf-shard-00-00.fdzch8n.mongodb.net:27017,ac-hkzkfaf-shard-00-01.fdzch8n.mongodb.net:27017,ac-hkzkfaf-shard-00-02.fdzch8n.mongodb.net:27017/userapplication?replicaSet=atlas-11kixb-shard-0&ssl=true&authSource=admin");

const userSchema=mongoose.model("users",{
    username:String,
    email:String,
    password:String,
});

app.post("/signup",async (req,res)=>{

    let data=await userSchema.findOne({email:req.body.email});
    if(data){
        res.json({msg:"User Already Exists!! Please Login"});
    }
    else{
        const user=new userSchema({
            username:req.body.username,
            email:req.body.email,
            password:req.body.password,
        });
        await user.save();
        res.json({msg:"User Data Saved Successfully"});
    }

});
app.get("/user/:usernameValue",async (req,res)=>{
    const username=req.params.usernameValue;
    console.log(username);
    let data=await userSchema.findOne({username,});
    console.log(data);
    if(data){
        res.json({user:data});
    }else{
        res.json({msg:"User Not Found"});
    }
})


app.listen(3000);

