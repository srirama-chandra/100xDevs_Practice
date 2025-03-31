
const express = require('express');
const userRoute = require('./routes/user');
const courseRoute = require('./routes/course');

const app = express()
app.use(express.json());

app.use('/user',userRoute);
app.use('/courses',courseRoute);


app.listen(3000,()=>{console.log("Application Running On Port 3000")});