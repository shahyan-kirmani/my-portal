const { checkToken } = require('../auth/token_validation')
const userController=require('../controllers/usersController')
const { upload } = require('../upload/UploadFile')

const router=require('express').Router()

router.get('/get',userController.getUsers)
router.post('/create',userController.addUsers)

router.get('/get/:id',userController.getUserById)
router.put('/update/:id',userController.updateUser)
router.put('/updatepass/:id',userController.updateUserPass)
router.delete('/delete/:id',userController.deleteUser)


module.exports=router

