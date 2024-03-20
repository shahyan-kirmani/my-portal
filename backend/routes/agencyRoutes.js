const { checkToken } = require('../auth/token_validation')
const agencyController=require('../controllers/agencyController')
const { upload } = require('../upload/UploadFile')

const router=require('express').Router()

router.get('/get',agencyController.getAgency)
router.post('/create',upload.any('image'),agencyController.addAgency)


router.get('/get/:id',agencyController.getAgencyById)
router.put('/update/:id',upload.any('image'),agencyController.updateAgency)
router.delete('/delete/:id',agencyController.deleteAgency)


module.exports=router

