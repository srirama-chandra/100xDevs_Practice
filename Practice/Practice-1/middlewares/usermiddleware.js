
export function userMiddleWare(req,res,next){
    if(req.body.username==="user1" || "user2" && req.body.password==="useruser1"){
        next()
    }
    else{
        return res.status(403).json({msg:"Invalid User"});
    }
}