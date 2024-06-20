const User=require("../db/user");

async function userValidationMiddleware(req,res,next)
{
        email=req.body.email;
        password=req.body.password;
        if(await User.findOne({email:email,password:password})){
            next();
        }
        else{
            res.json({msg:"User Not Found"});
        }
}
module.exports=userValidationMiddleware;