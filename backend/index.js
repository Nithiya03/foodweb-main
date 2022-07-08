const express = require('express');
const { mongoose } = require('./db.js')
var userController = require('./controllers/userController.js')
var adminController = require('./controllers/adminController')
var app = express();
const bodyParser = require('body-parser')

const cors = require('cors')
app.use(bodyParser.json());

app.use(cors({origin:'http://localhost:4200'}))

app.use('/users',userController)
app.use('/admins',adminController)

app.listen(3000,()=> console.log('server started at port : 3000'));


