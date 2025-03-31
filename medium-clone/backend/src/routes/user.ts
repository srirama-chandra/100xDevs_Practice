import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { signInSchema, signInType, signUpSchema, signUpType } from "@sriramachandra/medium-common-code";
import { sign,verify } from "hono/jwt";


export const userRouter = new Hono<{
    Bindings:{
        DATABASE_URL:string
        JWT_SECRET:string
    }
}>();

userRouter.post('/signup', async(c)=>{
    
    try{

        const prisma = new PrismaClient({datasourceUrl:c.env.DATABASE_URL}).$extends(withAccelerate());
        
        const body = await c.req.json();

        const { success } = signUpSchema.safeParse(body);

        if(!success)
        {
            return c.json({msg:"Invalid Input"});
        }

        const id = await prisma.user.create({
            data:{
                name : body.name,
                email : body.email,
                password: body.password,
            },
            select:{
                id: true
            }
        });
        const token = await sign({id:id},c.env.JWT_SECRET);
        return c.json({token,});
    }
    catch(e){
        return c.json({msg:"Something Went Wrong"})
    }
    

})

userRouter.post('/signin', async(c)=>{
    
    try{

        const prisma = new PrismaClient({datasourceUrl:c.env.DATABASE_URL}).$extends(withAccelerate());

        const body = await c.req.json();
    
        const { success } = signInSchema.safeParse(body);
    
        if(!success)
        {
            return c.json({msg:"Invalid Input"});
        }

        const user = await prisma.user.findFirst({
            where:{
                email : body.email,
                password: body.password,
            }
        });
        if(!user)
        {
            return c.json({msg:"User Not Found"});
        }
        
        const { id } = user;

        const token = await sign({id:id},c.env.JWT_SECRET);

        return c.json({token})

    }
    catch(e){
        return c.json({msg:"Something Went Wrong"})
    }
    
})