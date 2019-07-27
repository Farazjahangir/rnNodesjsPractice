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
        let user = new User(userData)
        const token = jwt.sign({id: user._id} , constants.SECRET_KEY)    
        user.token = token 
        await user.save()
        user = JSON.parse(JSON.stringify(user))
        delete user.password
        console.log('Register====>' , user);
        
        res.send({
            status: 200,
            data: user,
        })
    }
    catch(e){
        res.send({
            status: 400,
            errorMessage: e.message
        })
    }
    
})

router.post('/login' , async (req,res)=>{
    const { userName, password } = req.body
    try{
        let user = await User.findOne({ userName })
        if(!user){
            res.send({
                status: 404,
                errMessage: 'User does not exist'
            })
            return
        }
        const isVerified = await bcrypt.compare(password, user.password);
        if(!isVerified){
            res.send({
                status: 404,
                errMessage: 'Please check you username or password'
            })
        }
        console.log('USer' , user);
        user = JSON.parse(JSON.stringify(user))
        delete user.password
        res.send({
            status: 200,
            data: user
        })
    }
    catch(e){
        res.send({
            status: 404,
            errMessage: e.message
        })
    }


    
    
})


module.exports = router;