const express = require("express");
const {rootRouter} = require("./routes/index");
const cors=require("cors");
const app = express();
app.use(cors);
app.use(expres.json());


app.use("/api/v1",rootRouter);


app.listen(3000,(err)=>{ console.log("Running")});