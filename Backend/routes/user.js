const express = require("express")
const router = express.Router()

router.get('/register',(req,res)=>{
    res.send("Register here")
})

let userData=[]
let userID=1
router.post('/register',(req,res)=>{
    const {name,email,phoneNumber,username,password}=req.body
    const newUser ={id:userID++,name,email,username,phoneNumber,password}
    userData.push(newUser)
    res.status(200),send("Registered")
})

router.get('/login',(req,res)=>{
    res.send("Login Page")
})

router.get('/profile/:username',(req,res)=>{
    const email=userData.find(u=>u.username===req.params.username)
    if(!email){
        return res.status(404).send("No such User")
    }
    return res.status(200).send(email)
})

module.exports=router