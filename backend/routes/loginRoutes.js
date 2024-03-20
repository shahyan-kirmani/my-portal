const { checkToken } = require('../auth/token_validation')
const loginController=require('../controllers/loginController')

const router=require('express').Router()

router.post('/create',loginController.getUser)
router.put('/otp',loginController.forgetPassword)
router.put('/updatepassword',loginController.updatePassword)


module.exports=router

