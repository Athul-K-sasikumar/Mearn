const express=require('express')
const router= new express.Router()
const userController =require('../controllers/userController')



router.post('/register',userController.registerController)


router.post('/login',userController.loginController)


module.exports=router