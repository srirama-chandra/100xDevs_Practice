const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());

app.get("/",(req,res) => {
    return res.status(200).send("Welcome User");
})

app.get('/welcome',(req,res)=>{
    return res.status(200).send("Welcome",req.query.name);
})

app.listen(8080,()=>{
    console.log("Listening On Port",8080);
});

