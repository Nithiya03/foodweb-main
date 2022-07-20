const express = require('express');
const router = express.Router();
const {getAllProduct,orderList,getProductId,addProduct,addOrder,updateProduct,deleteProduct,postLoginDetail,adminLogin} = require('../controllers/adminController');
var {isAuthenticatedUser} = require('../middleware/auth')

router.get('/getAllProduct',getAllProduct)
router.get('/orderList',isAuthenticatedUser,orderList)
router.get('/:id',isAuthenticatedUser,getProductId)
router.post('/addProduct',isAuthenticatedUser,addProduct)
router.post('/orders',isAuthenticatedUser,addOrder)
router.put('/:id',isAuthenticatedUser,updateProduct)
router.delete('/:id',isAuthenticatedUser,deleteProduct)
router.post('/adminLogin',postLoginDetail)
router.post('/login',adminLogin)
 
module.exports = router