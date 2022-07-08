const mongoose = require('mongoose')

var Order = mongoose.model('Order',{
    name : {type:String},
    phone : {type:String},
    address: {type:String},
    quantity : {type:Number},
    total: {type:Number},
    foodName: {type : String}
});

module.exports = { Order };