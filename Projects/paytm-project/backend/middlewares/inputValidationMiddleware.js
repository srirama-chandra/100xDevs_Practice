const zod=require("zod");

function inputValidationMiddleware(req,res,next)
{
    const inputValidationZod= zod.object({
        username:zod.string().email(),
        password:zod.string().min(8),
        firstname:zod.string(),
        lastname:zod.string(),
    })
    
    const {success,error} = inputValidationZod.safeParse(req.body);
    
    if(!success)
    {
        return res.status(411).json({msg:"Invalid Input",message:error.issues[0].message});
    }
    else {
        next();
    }
}

module.exports={inputValidationMiddleware}