const { checkToken } = require('../auth/token_validation')
const blogController=require('../controllers/blogController')
const { upload } = require('../upload/UploadFile')

const router=require('express').Router()

router.get('/get',blogController.getblog)
router.post('/create',blogController.addblog)
router.post('/image',upload.fields([{name:'avatars'}]),blogController.addblogimg)


router.get('/get/:id',blogController.getblogById)
router.put('/update/:id',blogController.updateblog)
router.delete('/delete/:id',blogController.deleteblog)


module.exports=router

