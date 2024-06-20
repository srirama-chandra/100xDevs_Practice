const jwt=require("jsonwebtoken");
const jwtPassword="Password";
function jwtValidation(req,res,next)
{
    const jwtToken=req.headers.authorization;
    try{
        jwt.verify(jwtToken,jwtPassword);
        next();
    }
    catch(e){
        res.json({msg:"Authentication Failed"});
    }
}
module.exports=jwtValidation;