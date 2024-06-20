const zod=require("zod");
function inputValidationMiddleware(req,res,next)
{
    const inputValidationSchema=zod.object({
        email:zod.string().email(),
        password:zod.string().min(8),
    });
    const user={
        email:req.body.email,
        password:req.body.password,
    };
    const validationResponse=inputValidationSchema.safeParse(user);
    if(!validationResponse.success)
    {
        res.json({message:"Invalid Input!! Please Check Your Input"});
    }else{
        next();
    }
}
module.exports=inputValidationMiddleware;