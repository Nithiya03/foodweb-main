const express = require('express');
const { mongoose } = require('./db.js')
var userRoute = require('./routes/userRoute')
var adminRoute = require('./routes/adminRoute')
var app = express();
const bodyParser = require('body-parser')

const cors = require('cors')
app.use(bodyParser.json());

app.use(cors({origin:'http://localhost:4200'}))

app.use('/users',userRoute)
app.use('/admins',adminRoute)

app.listen(8000,()=> console.log('server started at port : 8000'));


