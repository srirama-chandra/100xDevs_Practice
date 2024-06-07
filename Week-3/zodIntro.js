const express=require("express");
const app=express();
app.use(express.json());
const zod=require("zod");

app.post("/checkup",(req,res)=>{

            const schema=zod.object({ email:zod.string().email(),password:zod.string().min(8)});
            let data=schema.safeParse(req.body);
            if(!(data.success)){
                res.json({msg:data.error.issues[0].message});
            }else{
                res.send("All Ok");
            }


       })

app.listen(3000);