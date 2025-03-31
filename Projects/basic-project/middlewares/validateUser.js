
const jwt = require('jsonwebtoken');
const { JWT_PASSWORD } = require('../variables');

function validateUser(req,res,next)
{
    const token = req.headers.authorization;

    try{
        const decoded = jwt.verify(token,JWT_PASSWORD);
        req.user = decoded;
        next();
    }
    catch(e)
    {
        return res.status(403).json("Invalid User");
    }
}

module.exports = validateUser;