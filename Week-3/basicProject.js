const express=require("express");
const app=express();
app.use(express.json());
const zod=require("zod");
const mongoose=require("mongoose");
mongoose.connect("mongodb://admin:ramchand@ac-hkzkfaf-shard-00-00.fdzch8n.mongodb.net:27017,ac-hkzkfaf-shard-00-01.fdzch8n.mongodb.net:27017,ac-hkzkfaf-shard-00-02.fdzch8n.mongodb.net:27017/userapplication?replicaSet=atlas-11kixb-shard-0&ssl=true&authSource=admin");
const dbSchema=mongoose.model("users",{email:String,password:String});
const jwtPassword="encryption";
const jwt=require("jsonwebtoken");

function validateInput(req,res,next)
{
        const userInputSchema=zod.object({email:zod.string().email(),password:zod.string().min(8)});
        const userObject=req.body;
        let validateInfo=userInputSchema.safeParse(userObject);
        if(! validateInfo.success){
            res.json({msg:"Please Enter Valid Input"});
        }else{
            next();
        } 
}
async function validateUser (req,res,next)
{
    const user= await dbSchema.findOne({email:req.body.email});
    if(!user){
        res.json({msg:"User Not Found !! Please Check Your E-mail & Password"});
    }
    else if(user.email==req.body.email && user.password!=req.body.password){
        res.json({msg:"Please Enter Valid Password"});
    }
    else{
       next();
    }
}
app.get("/signin",validateInput,validateUser,(req,res)=>{
    res.json({msg:"Welcome Back User",token:jwt.sign(req.body.email,jwtPassword)});
});
app.listen(3000);