const express=require("express");
const parser=require("body-parser");
const app=express();
app.use(parser.json());
const port= process.env.PORT || 3000;

app.get("/conv",function (req,res){
    console.log(req.query.msg);
    res.json({"name":"ramesh"});
})
app.listen(port);