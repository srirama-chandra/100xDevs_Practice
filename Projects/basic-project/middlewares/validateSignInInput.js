const { signInSchema } = require("./zodSchema");

function validateSignInInput(req,res,next)
{
    const { success } = signInSchema.safeParse(req.body);

    if(!success)
    {
        return res.status(400).json({msg: "Invalid Input"});
    }
    next();
}

module.exports= validateSignInInput;