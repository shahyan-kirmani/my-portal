const { checkToken } = require('../auth/token_validation')
const eventController=require('../controllers/developerController')
const { upload } = require('../upload/UploadFile')

const router=require('express').Router()

router.get('/get',eventController.getDeveloper)
router.post('/create',upload.any('image'),eventController.addDeveloper)


router.get('/get/:id',eventController.getDeveloperById)
router.put('/update/:id',upload.any('image'),eventController.updateDeveloper)
router.delete('/delete/:id',eventController.deleteDeveloper)


module.exports=router

