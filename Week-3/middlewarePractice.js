const express=require("express");
const app=express();

function userMiddleware(req,res,next)
{
    let username=req.headers.username;
    let password=req.headers.password;
    if(username!="Ram" || password!="pass")
    {
        res.status(403).json({msg:"Authentication Failed"});
        return;
    }
    else{
        
        next();
    }
}

app.get("/welcome-user",userMiddleware,function(req,res){
    let username=req.headers.username;
    res.status(200).send("Welcome "+username);
});

app.listen(3000);