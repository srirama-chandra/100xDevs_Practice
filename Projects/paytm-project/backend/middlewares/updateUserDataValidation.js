const zod = require("zod");



function upddateUserInputValidation(req,res,next)
{
    const zodSchema=zod.object({
        firstname:zod.string().optional(),
        lastname:zod.string().optional(),
        password:zod.string().min(8).optional()
    })

    const {success,error} = zodSchema.safeParse(req.body);
    if(!success)
    {
        return res.status(411).json({msg:"Invalid Input",error:error.issues[0].message})
    }
    else{
        next();
    }
}

module.exports={upddateUserInputValidation};