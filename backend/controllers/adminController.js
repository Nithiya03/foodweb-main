const express = require('express');

var router = express.Router();

var ObjectId = require('mongoose').Types.ObjectId;

var { Admin } = require('../models/admin')
var { Order } = require('../models/order')



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

router.get('/orderList',(req,res) => {
    Order.find((err,docs) => {
        if(!err){
            console.log(docs);
            res.send(docs)
        }
        else{
            console.log('Error in Retriving Employees :'+JSON.stringify(err));
        }
    });
}) 

router.get('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id)){
        return res.status(400).send(`No records with given id: ${req.params.id}`)
    }
    Admin.findById(req.params.id,(err,doc) =>{
        if(!err){
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
            res.send(doc);
        }
        else{
            console.log('Error in Retriving Employees :'+JSON.stringify(err));
        }
    })
});

router.post('/:quantity/:total/:foodName',(req,res)=>{
    let order = new Order({
        name : req.body.name,
        phone : req.body.phone,
        address: req.body.address,
        quantity : req.params.quantity,
        total: req.params.total,
        foodName : req.params.foodName,
    });
    order.save((err,doc)=> {
        if(!err){
            res.send(doc);
        }
        else{
            console.log('Error in Retriving Employees :'+JSON.stringify(err));
        }
    })
});

router.put('/:id',(req,res)=>{
    console.log("id"+req.params.id);
    console.log("data "+req.body.foodPrice)
    if(!ObjectId.isValid(req.params.id)){
        return res.status(400).send(`No record with the given id : $(req.params.id)`);
    }
    var admin ={
        foodName : req.body.foodName,
        foodDetail : req.body.foodDetail,
        foodPrice: req.body.foodPrice,
        foodImage : req.body.foodImage
    };
    Admin.findByIdAndUpdate(req.params.id,{$set:admin},{new:true},(err,data)=>{
        if(!err){
            console.log("put",data)
            res.send(data);
        }
        else
            console.log('Error in Material Update : '+JSON.stringify(err,undefined,2));
    });
})

router.delete('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with the given id : $(req.params.id)`);
    Admin.findByIdAndRemove(req.params.id,(err,data)=>{
    if(!err)
        res.send(data);
    else
        console.log('Error in Material Delete : '+JSON.stringify(err,undefined,2));
});
})

module.exports = router;