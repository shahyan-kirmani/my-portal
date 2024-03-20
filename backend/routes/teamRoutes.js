const { checkToken } = require('../auth/token_validation')
const teamController=require('../controllers/teamController')
const { upload } = require('../upload/UploadFile')

const router=require('express').Router()

router.get('/get',teamController.getteam)
router.post('/create',teamController.addteam)


router.get('/get/:id',teamController.getteamById)
router.put('/update/:id',upload.any('image'),teamController.updateteam)
router.delete('/delete/:id',teamController.deleteteam)


module.exports=router

