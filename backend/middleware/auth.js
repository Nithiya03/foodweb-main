const jwt = require('jsonwebtoken')
require('dotenv').config();
const books = require('../models/user')

exports.isAuthenticatedUser = async( req , res, next)=>{
    if(!req.headers.authorization){
        return res.status(401).json({message: "access denied , please login"})
    }
    const token = req.headers.authorization.split(' ')[1]
    if(token ==='null'){
        return res.status(401).json({message: "access denied , please login"})
    }
    const data=jwt.verify(token,process.env.ACCESS_TOKEN)
    if(!data){
        return res.status(401).json({message: "access denied , please login"})
    }
    next()
}