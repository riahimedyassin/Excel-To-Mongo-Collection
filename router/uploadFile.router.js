const express= require("express")
const router = express.Router()
const {UploadController} = require('../controllers/uploadController')



router.post('/',UploadController)

module.exports=router