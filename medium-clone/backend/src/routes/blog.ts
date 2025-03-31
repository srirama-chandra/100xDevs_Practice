import { Hono } from "hono";

export const blogRouter = new Hono();

blogRouter.get('/', async(c)=>{

    return c.json({msg:"Hello There"})

})