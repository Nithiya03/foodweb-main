const express = require('express');
const jwt=require('jsonwebtoken');
var router = express.Router();
require('dotenv').config();
var {isAuthenticatedUser} = require('../middleware/auth')

// var ObjectId = require('mongoose').Types.ObjectId;

var { User } = require('../models/user')


router.get('/',isAuthenticatedUser,(req,res) => {
    User.find((err,docs) => {
        if(!err){
            res.send(docs)
        }
        else{
            console.log('Error in Retriving Employees :'+JSON.stringify(err));
        }
    });
}) 


router.post('/',isAuthenticatedUser,(req,res)=>{
    var user = new User({
        name: req.body.name,
        email: req.body.email,
        mobile: req.body.mobile,
        password : req.body.password
    });
    user.save((err,doc)=> {
        if(!err){
            res.send(doc);
        }
        else{
            console.log('Error in Retriving Employees :'+JSON.stringify(err));
        }
    })
});

router.get('/:username/:password',(req,res)=>{
    User.find({name:req.params.username},{name:1,password:1,_id:0},(err,doc)=> {
        if(doc[0].name === req.params.username && doc[0].password === req.params.password){
            console.log(doc[0])
            let payload=req.params.password;
            let token=jwt.sign(payload,process.env.ACCESS_TOKEN)
            console.log(token);
            res.status(200).json({token,message:'true'});
        }
        else{
            console.log('Error in Retriving Employees :'+JSON.stringify(err));
        }
    })
});


module.exports = router;

