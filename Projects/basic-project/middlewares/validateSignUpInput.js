const { signUpSchema } = require("./zodSchema");

function validateSignUpInput(req,res,next)
{
    const { success } = signUpSchema.safeParse(req.body);

    if(!success)
    {
        return res.status(400).json({msg: "Invalid Input"});
    }
    next();
}

module.exports= validateSignUpInput;