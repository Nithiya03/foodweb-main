const mongoose = require('mongoose')

var Admin = mongoose.model('Admin',{
   foodName : {type:String},
   foodDetail : {type:String},
   foodPrice: {type:Number},
   foodImage : {type:String}
});

module.exports = { Admin };