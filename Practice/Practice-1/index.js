
const express = require("express");
const bodyparser = require("body-parser");
const { userMiddleWare } = require("./middlewares/usermiddleware");
const { userInputValidation } = require("./middlewares/inputvalidation.js");
const port = 3000;

const app = express();
app.use(bodyparser.json());


app.get('/',function(req,res){
    return res.json({msg:"Welcome To The Web App"});
})

app.post('/getuser',userInputValidation,userMiddleWare,(req,res)=>{
    const { username } = req.body
    return res.json({msg:`${username} is authenticated successfully`})
})

app.listen(3000,()=>{console.log(`Listening On Port ${port}`)});