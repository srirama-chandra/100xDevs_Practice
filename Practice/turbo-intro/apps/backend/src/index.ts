import express from "express"
import { API_URL } from "@repo/common/config"

const app = express()

app.get('/',(req,res)=>{
    console.log(API_URL)
    return res.json({msg:"All Ok"})
})

app.listen(3002,()=>{console.log("Listening On Port 3000")})