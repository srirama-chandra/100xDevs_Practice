const jwt=require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

function authMiddleware(req,res,next)
{
    const authHeader=req.headers.authorization;
    if(!authHeader || !authHeader.startsWith("Bearer")){
        return res.status(403).json({msg:"Authentication Failed"});
    }
    const userToken=authHeader.split(" ")[1];
    try{
        const decodedToken=jwt.verify(userToken,JWT_SECRET);
        req.userId=decodedToken.userId;
        next();
    }
    catch(e)
    {
        return res.status(403).json({msg:"Authentication Failed!!"});
    }

}

module.exports={authMiddleware};