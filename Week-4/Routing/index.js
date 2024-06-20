const userRoute=require("./user");
const adminRoute=require("./admin");
const express=require("express");
const app=express();
app.use(express.json());

app.use("/user",userRoute);
app.use("/admin",adminRoute);

app.listen(3000);