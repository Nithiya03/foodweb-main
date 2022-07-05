const express = require('express');

var router = express.Router();

var ObjectId = require('mongoose').Types.ObjectId;

var { Admin } = require('../models/admin')


router.get('/',(req,res) => {
    Admin.find((err,docs) => {
        if(!err){
            res.send(docs)
        }
        else{
            console.log('Error in Retriving Employees :'+JSON.stringify(err));
        }
    });
}) 

router.get('/:id',(req,res)=>{
    console.log(req.params.id);
    if(!ObjectId.isValid(req.params.id)){
        return res.status(400).send(`No records with given id: ${req.params.id}`)
    }
    Admin.findById(req.params.id,(err,doc) =>{
        if(!err){
            console.log(doc);
            res.send(doc);
        }
        else{
            console.log(`Error in retriving user`+JSON.stringify(err,undefined,2));
        }
    })
})

router.post('/',(req,res)=>{
    var admin = new Admin({
        foodName : req.body.foodName,
        foodDetail : req.body.foodDetail,
        foodPrice: req.body.foodPrice,
        foodImage : req.body.foodImage
    });
    admin.save((err,doc)=> {
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