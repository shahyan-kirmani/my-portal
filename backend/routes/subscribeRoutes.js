const { checkToken } = require('../auth/token_validation')
const subscribeController=require('../controllers/subscribeController')
const { upload } = require('../upload/UploadFile')

const router=require('express').Router()

router.get('/get',subscribeController.getsubscribe)
router.post('/create',subscribeController.addsubscribe)


router.get('/get/:id',subscribeController.getsubscribeById)
router.put('/update/:id',subscribeController.updatesubscribe)
router.delete('/delete/:id',subscribeController.deletesubscribe)


module.exports=router

