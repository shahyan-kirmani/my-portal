const { checkToken } = require('../auth/token_validation')
const careerController=require('../controllers/careerController')
const { upload } = require('../upload/UploadFile')

const router=require('express').Router()

router.get('/get',careerController.getcareer)
router.post('/create',careerController.addcareer)


router.get('/get/:id',careerController.getcareerById)
router.put('/update/:id',careerController.updatecareer)
router.delete('/delete/:id',careerController.deletecareer)


module.exports=router

