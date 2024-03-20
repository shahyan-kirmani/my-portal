const { checkToken } = require('../auth/token_validation')
const propertyController=require('../controllers/propertyController')
const { upload } = require('../upload/UploadFile')

const router=require('express').Router() 

router.get('/get',propertyController.getproperty)
router.post('/filter',propertyController.filterpropertyById)
router.put('/like/:id',propertyController.addlike)
router.post('/create',upload.any('image','video'),propertyController.addproperty)


router.post('/image',upload.array('images'),propertyController.addpropertyimg)
router.get('/get/:id',propertyController.getpropertyById)
router.get('/city/:id',propertyController.getpropertyByCity)
router.put('/update/:id',upload.any('image','video'),propertyController.updateproperty)
router.delete('/delete/:id',propertyController.deleteproperty)


module.exports=router

