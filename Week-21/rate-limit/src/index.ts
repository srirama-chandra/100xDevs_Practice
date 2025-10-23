import express from 'express'
import rateLimit from 'express-rate-limit'

const app = express()
app.use(express.json());

const passwordLimiter = rateLimit({
    windowMs: 5 * 60 * 1000,
    limit: 3,
    statusCode:429,
    message: {
        msg: "Try Again Later"
    },

})

app.get('/forgot',passwordLimiter,(req,res)=>{
    return res.json({msg:"Hello There"})
});


app.listen(3000,()=>console.log("Listening On Port 3000"));