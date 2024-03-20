const { checkToken } = require('../auth/token_validation')
const eventController=require('../controllers/eventController')
const { upload } = require('../upload/UploadFile')

const router=require('express').Router()

router.get('/get',eventController.getevent)
router.post('/create',upload.any('image'),eventController.addevent)


router.get('/get/:id',eventController.geteventById)
router.put('/update/:id',upload.any('image'),eventController.updateevent)
router.delete('/delete/:id',eventController.deleteevent)


module.exports=router

