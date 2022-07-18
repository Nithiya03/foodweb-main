const express = require('express');
const jwt=require('jsonwebtoken');
const bcrypt = require('bcryptjs')
const nodemailer = require('nodemailer')
var router = express.Router();
require('dotenv').config();
var {isAuthenticatedUser} = require('../middleware/auth')

var { User } = require('../models/user')

router.get('/getUserEmail',isAuthenticatedUser,async (req,res) => {
    console.log(req.body.email);
    await User.findOne({email : req.body.email},(err,docs) => {
        if(!err){
            res.status(200).json(docs)
        }
        else{
            res.status(400).json('User Details Not Found')
        }
    });
}) 

router.get('/userDetail',async (req,res) => {
    User.find((err,doc)=>{
        if(!err){
            res.status(200).json(doc)
        }
        else{
            res.status(400).json('Error in retriving user detail')
        }
    })
})
   

router.post('/postUserDetail',async (req,res)=>{
    const hashedPassword = bcrypt.hashSync(req.body.password,12)
    var user = new User({
        name: req.body.name,
        email: req.body.email,
        mobile: req.body.mobile,
        password : hashedPassword,
        access : false
    });
    const userdata =  await User.findOne({email : req.body.email})
    if(!userdata){
        user.save((err,doc)=>{
            if(!err){
                res.status(200).json(doc)
            }else{
                res.status(400).json('Error in storing user detail')
            }
        })
    }
    else{
        res.status(400).json('user already exist')
    }
});

router.post('/updateUser/:id',async(req,res)=>{
    console.log("update User"+req.body.access);
    if(req.body.access == 'permit'){
        const user = {
            access : true
        }
        User.updateOne({_id : req.params.id},{$set:user},{new:true},(err,data)=>{
            if(!err){
                res.status(200).json(data)
            }
            else
                res.status(404).json('User Not Found')
        })
    }else{
        const user = {
            access : false
        }
        User.updateOne({_id : req.params.id},{$set:user},{new:true},(err,data)=>{
            if(!err){
                res.status(200).json(data)
            }
            else
                res.status(404).json('User Not Found')
        })
    }
})

router.post('/login',async(req,res)=>{
    const user = await User.findOne({ email: req.body.email});
    if(!user){
        return res.status(401).json('Invalid email or password')
    }
    else if(user.access == false){
        return res.status(401).json('Your account is currently locked. Please contact admin to unlock your account')   
    }
    else{
        let payload=req.body.password;
            let token=jwt.sign(payload,process.env.ACCESS_TOKEN)
            const isPasswordCorrect = bcrypt.compareSync(req.body.password, user.password)
            if(!isPasswordCorrect){
                res.status(404).json({message:'incorrect password'})
            }
            else{
                res.status(200).json({token,message:'true'});
            }
            
    }
});

router.post('/emailCheck',async(req,res)=>{
    const user = await User.findOne({ email: req.body.email });
    if(!user){
        return res.status(401).json('Invalid Email')
    }
    else{
        res.status(200).json({message:'true'});
    }
});

router.put('/:email',(req,res)=>{
    const hashedPassword = bcrypt.hashSync(req.body.password,12)
    var user ={
        name: req.body.name,
        email: req.body.email,
        mobile: req.body.mobile,
        password :hashedPassword,
    }
     User.updateOne({email : req.params.email},{$set:user},{new:true},(err,data)=>{
        if(!err){
            res.status(200).json(data)
        }
        else
            res.status(400).json('User Not Found')
    })
})

module.exports = router;

