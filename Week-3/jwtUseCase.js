const express=require("express");
const bodyParser=require("body-parser");
const jwt=require("jsonwebtoken");
const jwtPassword="password";
const app=express();
app.use(bodyParser.json());
const users = [
    {
      username: "harkirat@gmail.com",
      password: "123",
      name: "harkirat singh",
    },
    {
      username: "raman@gmail.com",
      password: "123321",
      name: "Raman singh",
    },
    {
      username: "priya@gmail.com",
      password: "123321",
      name: "Priya kumari",
    },
  ];

function validateUserMiddleWare(req,res,next)
{
    const username=req.body.username;
    const password=req.body.password;
    if(users.find( object => object.username == username && object.password==password )){
        next();
    }
    res.status(403).json({msg:"User Not Found !!"});

}
app.post("/signin",validateUserMiddleWare,(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;

    const token=jwt.sign({username:username},jwtPassword);
    res.json({token,});
})

app.get("/users",(req,res)=>{
    
   try{
        const token=req.headers.authorization;
        const decodedData=jwt.verify(token,jwtPassword);
        
        res.json({
            allUsers:users.filter(element=>{ 
                if(element.username!=decodedData.username) return true;
            })
        });
   }
   catch(e)
   {
        res.status(403).json({Error:"Verification Failed"});
   }

});

app.listen(3000);