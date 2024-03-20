const { checkToken } = require('../auth/token_validation')
const contactController=require('../controllers/contactController')
const { upload } = require('../upload/UploadFile')

const router=require('express').Router()

router.get('/get',contactController.getcontact)
router.post('/create',contactController.addcontact)


router.get('/get/:id',contactController.getcontactById)
router.put('/update/:id',contactController.updatecontact)
router.delete('/delete/:id',contactController.deletecontact)


module.exports=router

