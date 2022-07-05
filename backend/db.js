const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://Nithiya:Nithiya03@cluster0.dtnrx.mongodb.net/FoodWeb?retryWrites=true&w=majority',(err)=>{
    if(!err){
        console.log("Mongodb connection succeded.");
    }
    else{
        console.log("Error in DB connection :"+JSON.stringify(err,undefined,2))
    }
});

module.exports = mongoose;