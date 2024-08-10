const express=require("express");
const { authMiddleware } = require("../middlewares/middleware");
const { Account } = require("../db/db");
const { default: mongoose } = require("mongoose");
const accountRouter=express.Router();

accountRouter.get("/balance",authMiddleware,async (req,res)=>{

    const account=await Account.findOne({userId:req.userId});
    return res.status(200).json({balance:account.balance})

})

accountRouter.post("/transfer",authMiddleware,async (req,res)=>{

    const session = await mongoose.startSession();

    const {amount, to} = req.body;

    session.startTransaction();

    const account = await Account.findOne({userId:req.userId}).session(session);

    if(!account || account.balance < amount)
    {
        await session.abortTransaction();
        return res.status(400).json({msg:"Insufficient Balance"});
    }

    const toAccount = await Account.findOne({userId:to}).session(session);

    if(!toAccount)
    {
        await session.abortTransaction();
        return res.status(400).json({msg:"Invalid User"});
    }

    await Account.updateOne({userId:req.userId},{"$inc":{balance: -amount}}).session(session);
    await Account.updateOne({userId:to},{"$inc":{balance:amount}}).session(session);

    await session.commitTransaction();
    return res.status(200).json({msg:"Transaction Successfull"});

})


module.exports={accountRouter};