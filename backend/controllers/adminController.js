const jwt=require('jsonwebtoken');
const bcrypt = require('bcryptjs')
require('dotenv').config();
var ObjectId = require('mongoose').Types.ObjectId;
var { Admin } = require('../models/admin')
var { Order } = require('../models/order')
var { Login } = require('../models/login')

const getAllProduct = (req,res) => {
    Admin.find((err,docs) => {
        if(!err){
            res.status(200).json(docs)
        }
        else{
            res.status(400).json({message:'Error in retriving products',docs})
        }
    });
}

const orderList = (req,res) => {
    Order.find((err,docs) => {
        if(!err){
            res.status(200).json(docs)
        }
        else{
            res.status(400).json({message:'Error in retriving orderlist',docs})
        }
    });
}

const getProductId = (req,res)=>{
    if(!ObjectId.isValid(req.params.id)){
        return res.status(400).send(`No records with given id: ${req.params.id}`)
    }
    Admin.findById(req.params.id,(err,doc) =>{
        if(!err){
            res.status(200).json(doc)
        }
        else{
           res.status(400).json({message:'Error in retriving product',doc})
        }
    })
}

const addProduct = (req,res)=>{
    console.log(req.body);
    var admin = new Admin({
        foodName : req.body.foodName,
        foodDetail : req.body.foodDetail,
        foodPrice: req.body.foodPrice,
        foodImage : req.body.foodImage
    });
    admin.save((err,doc)=> {
        if(!err){
            res.status(200).json(doc)
        }
        else{
           res.status(400).json({message:'Error in storing products',doc})
        }
    })
}

const addOrder = (req,res)=>{
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
            res.status(200).json(doc)
        }
        else{
            res.status(400).json({message:'Error in posting order detail',doc})
        }
    })
}

const updateProduct = (req,res)=>{
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
            res.status(200).json(data)
        }
        else
            res.status(400).json({message:'Error in updating products',data})
    });
}

const deleteProduct = (req,res)=>{
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).json(`No record with the given id : $(req.params.id)`);
    Admin.findByIdAndRemove(req.params.id,(err,data)=>{
    if(!err)
        res.status(200).json(data)
    else
        res.status(400).json({message:'Error in deleting product',data})
});
}

const postLoginDetail = (req,res)=>{
    const hashedPassword = bcrypt.hashSync(req.body.password,12)
    var login = new Login({
        name : req.body.name,
        password : hashedPassword
    });
    login.save((err,doc)=>{
        if(!err)
            res.status(200).json(doc)
        else
            res.status(400).json({message:'Error in storing admin details',doc})
});
}

const adminLogin = async (req,res)=>{
    const admin = await Login.findOne({ name: req.body.name});
    if(!admin){
        return res.status(401).json('Invalid Username')
    }
    else{
        let payload=req.body.password;
        let token=jwt.sign(payload,process.env.ACCESS_TOKEN)
        const isPasswordCorrect = bcrypt.compareSync(req.body.password, admin.password)
        if(!isPasswordCorrect){
            res.status(404).json({message:'Incorrect password'})
        }
        else{
            res.status(200).json({token,message:'true'});
        }
    }
}


module.exports = {getAllProduct,orderList,getProductId,addProduct,addOrder,updateProduct,deleteProduct,postLoginDetail,adminLogin}