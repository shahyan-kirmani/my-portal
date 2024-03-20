const { checkToken } = require('../auth/token_validation')
const enquiryController=require('../controllers/enquiryController')
const { upload } = require('../upload/UploadFile')

const router=require('express').Router()

router.get('/get',enquiryController.getenquiry)
router.post('/create',enquiryController.addenquiry)


router.get('/get/:id',enquiryController.getenquiryById)
router.put('/update/:id',enquiryController.updateenquiry)
router.delete('/delete/:id',enquiryController.deleteenquiry)


module.exports=router

