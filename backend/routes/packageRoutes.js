const { checkToken } = require('../auth/token_validation')
const packageController=require('../controllers/packageController')
const { upload } = require('../upload/UploadFile')

const router=require('express').Router()

router.get('/get',packageController.getpackage)
router.post('/create',packageController.addpackage)
router.put('/buy/:id',packageController.getPackage)

router.get('/get/:id',packageController.getpackageById)
router.put('/update/:id',packageController.updatepackage)
router.delete('/delete/:id',packageController.deletepackage)


module.exports=router

