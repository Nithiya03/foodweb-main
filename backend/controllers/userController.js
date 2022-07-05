const express = require('express');

var router = express.Router();

var ObjectId = require('mongoose').Types.ObjectId;

var { User } = require('../models/user')


router.get('/',(req,res) => {
    User.find((err,docs) => {
        if(!err){
            res.send(docs)
        }
        else{
            console.log('Error in Retriving Employees :'+JSON.stringify(err));
        }
    });
}) 


router.post('/',(req,res)=>{
    var user = new User({
        name: req.body.name,
        email: req.body.email,
        mobile: req.body.mobile,
        password : req.body.password
    });
    user.save((err,doc)=> {
        if(!err){
            console.log("doc"+doc)
            res.send(doc);
        }
        else{
            console.log('Error in Retriving Employees :'+JSON.stringify(err));
        }
    })
});

module.exports = router;

