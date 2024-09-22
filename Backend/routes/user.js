const express = require("express")
const { registerpage,allusers,register,login,profile} = require("../controllers/user.controller")
const router = express.Router()

router.get('/registration', registerpage)
router.get('/allusers',allusers)
router.post('/register', register)
router.get('/login', login)
router.get('/profile/:username', profile)

module.exports=router