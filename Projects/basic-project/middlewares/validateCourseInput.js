const { courseSchema } = require("./zodSchema");

function validateCourseInput(req,res,next)
{
    const { success } = courseSchema.safeParse(req.body);

    if(!success)
    {
        return res.status(400).json({msg: "Invalid Input"});
    }
    next();
}

module.exports= validateCourseInput;