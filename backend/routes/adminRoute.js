const express = require('express');
const router = express.Router();
const {getAllProduct,orderList,getProductId,addProduct,addOrder,updateProduct,deleteProduct,postLoginDetail,adminLogin} = require('../controllers/adminController');
var {isAuthenticatedUser} = require('../middleware/auth')

router.get('/getAllProduct',getAllProduct)
router.get('/orderList',orderList)
router.get('/:id',getProductId)
router.post('/addProduct',addProduct)
router.post('/:quantity/:total/:foodName',isAuthenticatedUser,addOrder)
router.put('/:id',updateProduct)
router.delete('/:id',deleteProduct)
router.post('/adminLogin',postLoginDetail)
router.post('/login',adminLogin)
 
module.exports = router