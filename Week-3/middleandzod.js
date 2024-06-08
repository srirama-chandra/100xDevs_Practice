const express=require("express");
const app=express();
app.use(express.json());
const zod=require("zod");

function validateInput(req,res,next)
{
    const schema=zod.object({
        username:zod.string(),
        password:zod.string()
    });
    if(!(schema.safeParse(req.body).success)){
        res.status(411).json({msg:"Invalid Input"});
        return;
    }
    next();
}   
function validateUser(req,res,next){
    if(req.body.username!="admin" || req.body.password!="admin"){
        res.status(403).json({msg:"Invalid User"});
        return;
    }
    next();
}
app.post("/login",validateInput,validateUser,(req,res)=>{
    res.send("Welcome "+req.body.username);
});
app.use(function(err,req,res,next){
    res.send("Something Went Wrong");
})

app.listen(3000);