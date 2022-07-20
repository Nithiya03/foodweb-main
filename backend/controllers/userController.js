const jwt=require('jsonwebtoken');
const bcrypt = require('bcryptjs')
require('dotenv').config();

var { User } = require('../models/user')

const getUserEmail = (req,res) => {
    User.findOne({ email: req.params.email},(err,docs) => {
        if(!err){
            res.status(200).json(docs)
        }
    })
}

const getUserById = (req,res)=>{
    User.findOne({_id :req.params._id},(err,doc)=>{
        if(!err){
            res.status(200).json(doc)
        }
    })
}

const getAllUser = (req,res) => {

    User.find((err,doc)=>{
        if(!err){
            res.status(200).json(doc)
        }
        else{
            res.status(400).json({message: 'Error in retriving user detail',doc})
        }
    })
}
   

const postUserDetail = async (req,res)=>{
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
                res.status(400).json({message:'Error in storing user detail',doc})
            }
        })
    }
    else{
        res.status(400).json('user already exist')
    }
}

const updateUseraccess = (req,res)=>{
    
    if(req.body.access == 'permit'){
        const user = {
            access : true
        }
        User.updateOne({_id : req.params.id},{$set:user},{new:true},(err,data)=>{
            if(!err){
                res.status(200).json(data)
            }
            else
                res.status(404).json({message:'User Not Found',data})
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
}

const userLogin = async(req,res)=>{
    const user = await User.findOne({ email: req.body.email});
    if(!user){
        return res.status(401).json({message:'Invalid email or password'})
    }
    else if(user.access == false){
        return res.status(401).json({message:'Your account is currently locked. Please contact admin to unlock your account'})   
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
}

const checkEmail = async(req,res)=>{
    const user = await User.findOne({ email: req.body.email });
    if(!user){
        return res.status(401).json({message:'Invalid Email'})
    }
    else{
        res.status(200).json({message:'true'});
    }
}

const updateUser = (req,res)=>{
    const user = {
        name    : req.body.name,
        email   : req.body.email,
        mobile  : req.body.mobile
    }
    User.updateOne({_id: req.params._id},{$set:user},{new:true},(err,data)=>{
        if(!err){
            res.status(200).json(data)
        }else{
            res.status(400).json({message:'User detail not updated',data})
        }
    })
}

const updatePassword =(req,res)=>{
    const hashedPassword = bcrypt.hashSync(req.body.password,12)
    var user ={
        password :hashedPassword,
    }
     User.updateOne({email : req.params.email},{$set:user},{new:true},(err,data)=>{
        if(!err){
            res.status(200).json(data)
        }
        else
            res.status(400).json({message:'User password not updated',data})
    })
}

module.exports = {getUserEmail,getUserById,getAllUser,postUserDetail,updateUseraccess,userLogin,checkEmail,updateUser,updatePassword}
