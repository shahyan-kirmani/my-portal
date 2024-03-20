const { checkToken } = require('../auth/token_validation')
const questionController=require('../controllers/questionController')
const { upload } = require('../upload/UploadFile')

const router=require('express').Router()

router.get('/get',questionController.getquestion)
router.post('/create',questionController.addquestion)


router.get('/get/:id',questionController.getquestionById)
router.put('/update/:id',questionController.updatequestion)
router.delete('/delete/:id',questionController.deletequestion)


module.exports=router

