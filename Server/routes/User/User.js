const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const User = require('../../models/User/User')
const constants = require('../../config/constants')
router.post('/register' , async (req, res)=>{
    const userData = req.body
    const userPassword = userData.password
    try{
        const hash = await bcrypt.hash(userPassword , 10)
        userData.password = hash
        const user = new User(userData)
        await user.save()
        delete userData.password
        const token = jwt.sign({id: user._id} , constants.SECRET_KEY)        
        res.send({
            status: 200,
            data: userData,
            token
        })
    }
    catch(e){
        res.send({
            status: 400,
            errorMessage: e.message
        })
    }
    
})


module.exports = router;