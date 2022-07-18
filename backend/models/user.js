const mongoose = require('mongoose')

var User = mongoose.model('User',{
    name: {type:String},
    email: {type:String},
    mobile: {type:Number},
    password : {type:String},
    access:{type:Boolean}
});

module.exports = { User };