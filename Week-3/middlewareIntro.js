const express=require("express");
const bodyParser = require("body-parser");
const app=express();
app.use(bodyParser.json());

function userValidationMiddleWare(req,res,next){
    const userName=req.body.userName;
    const password=req.body.password;
    if(userName!="admin" || password!="pass"){
        res.status(403).json({msg:"Invalid User"});
        return;
    }
    else{
        next();
    }
}

app.get("/health-checkup",userValidationMiddleWare,(req,res)=>{

        res.send("All Ok");

})

app.listen(3000);
