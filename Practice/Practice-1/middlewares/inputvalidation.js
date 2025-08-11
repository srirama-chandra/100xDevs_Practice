
import { z } from 'zod'

export const objectSchema = z.object({
    username : z.string(),
    password : z.string().min(8)
})

export function userInputValidation(req,res,next)
{
    const {success} = objectSchema.safeParse(req.body);

    if(success)
    {
        next();
    }

    return res.json({msg:"Invalid Input"});
}