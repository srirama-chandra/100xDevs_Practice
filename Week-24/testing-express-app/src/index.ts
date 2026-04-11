const express = require('express')

const app = express();
app.use(express.json());

//@ts-ignore
app.post('/sum', (req,res) => {
    const { a, b} = req.body;
    const answer = a + b;
    return res.status(200).json({
        answer
    })
})

module.exports = { app };