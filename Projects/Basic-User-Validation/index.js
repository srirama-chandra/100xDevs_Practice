const express=require("express");
const app=express();
const userRoute=require("./routes/route");

app.use(express.json());
app.use("/",userRoute);

app.listen(3000,()=>{console.log("App Started")});