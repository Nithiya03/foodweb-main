const express = require('express');
const router = express.Router();
const {getUserEmail,getUserById,getAllUser,postUserDetail,updateUseraccess,userLogin,checkEmail,updateUser,updatePassword} = require('../controllers/userController');
var {isAuthenticatedUser} = require('../middleware/auth')

router.get('/getUserEmail/:email',isAuthenticatedUser,getUserEmail)
router.get('/:_id',isAuthenticatedUser,getUserById)
router.get('/userDetail/data',getAllUser)
router.post('/postUserDetail',postUserDetail)
router.post('/updateUser/:id',updateUseraccess)
router.post('/login',userLogin)
router.post('/emailCheck',checkEmail)
router.put('/:_id',isAuthenticatedUser,updateUser)
router.put('/editpassword/:email',updatePassword)

module.exports = router;