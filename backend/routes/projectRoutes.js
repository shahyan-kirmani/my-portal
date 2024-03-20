const { checkToken } = require('../auth/token_validation')
const projectController=require('../controllers/projectController')
const { upload } = require('../upload/UploadFile')

const router=require('express').Router() 

router.get('/get',projectController.getproject)
router.post('/filter',projectController.filterprojectById)
router.put('/like/:id',projectController.addlike)
router.post('/create',upload.any('image','video'),projectController.addproject)


router.post('/image',upload.array('images'),projectController.addprojectimg)
router.get('/get/:id',projectController.getprojectById)
router.get('/city/:id',projectController.getprojectByCity)
router.put('/update/:id',upload.any('image','video'),projectController.updateproject)
router.delete('/delete/:id',projectController.deleteproject)


module.exports=router

