import { z } from 'zod'

export const signUpSchema = z.object({
    name : z.string({message:"Invalid Name!! Please Check Your Name"}),
    email : z.string().email({message:"Invalid Email"}),
    password : z.string().min(8,{message:"Password Is Too Short"})
})

export const signInSchema = z.object({
    email : z.string().email(),
    password : z.string().min(8,{message:"Password Is Too Short"})
})


export type signUpType = z.infer<typeof signUpSchema>

export type signInType = Pick<signUpType,'email'|'password'>