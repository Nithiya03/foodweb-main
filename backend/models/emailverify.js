const mongoose = require('mongoose')

var EmailVerify = mongoose.model('EmailVerify',{
    email: {type:String},
    verified : {
        type:Boolean,
        required:true,
        default:false,
    },
});

module.exports = { EmailVerify };