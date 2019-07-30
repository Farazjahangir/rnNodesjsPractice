const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const User = require('../../models/User/User')
const constants = require('../../config/constants')


router.post('/register' , async (req, res)=>{
    
    // const userData = req.body
    // const userPassword = userData.password
    const { userName , password } = req.body
    // if(!userName) throw 'Username is Required'
    if(!password) throw 'Password is Required'

    try{
        // Password Hashing
        const hash = await bcrypt.hash(password , 10)
        req.body.password = hash
        // Saving user into database
        let user = new User(req.body)
        const token = jwt.sign({id: user._id} , constants.SECRET_KEY)    
        user.token = token 
        await user.save()
        user = JSON.parse(JSON.stringify(user))
        delete user.password
        res.status(200).send({
            data: user,
        })  
    }
    catch(e){
        res.status(400).send({
            errorMessage: e.message
        })
    }
    
})

router.post('/login' , async (req,res)=>{
    const { userName, password } = req.body

    if(!userName) throw 'Username is required'
    if(!password) throw 'Password is required'

    try{
        // Finding user
        let user = await User.findOne({ userName })
        // If user not found
        if(!user) throw {message: 'User dose not exsit'}

        // password verification
        const isVerified = await bcrypt.compare(password, user.password);

        // If password not verified 
        if(!isVerified) throw {message: 'Please check your username or password'}

        user = JSON.parse(JSON.stringify(user))
        delete user.password
        res.status(200).send({
            status: 200,
            data: user
        })
    }
    catch(e){
        res.status(404).send({
            status: 404,
            errMessage: e.message
        })
    }


    
    
})


module.exports = router;