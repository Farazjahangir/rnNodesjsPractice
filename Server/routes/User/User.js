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
    
    try{
        if(!userName) throw 'Username is Required'
        if(!password) throw 'Password is Required'
        // Password Hashing
        const hash = await bcrypt.hash(password , 10)
        req.body.password = hash
        // Saving user into database
        let user = new User(req.body)
        await user.save()

        const token = jwt.sign({id: user._id} , constants.SECRET_KEY, {
            expiresIn: '1d' // expires in 365 days
        })    
        user.token = token      
        await user.save()
        user = JSON.parse(JSON.stringify(user))
        delete user.password
        res.status(200).send({
            data: user,
        })  
    }
    catch(e){
        console.log('Error' , e);
        
        res.status(400).send({
            errorMessage: e
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
        const token = jwt.sign({id: user._id} , constants.SECRET_KEY, {
            expiresIn: '1d' // expires in 365 days
       })   
       await User.findOneAndUpdate({ userName } , {$set: {token}}) 

        
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
            errMessage: e
        })
    } 
})

// router.post('/check' , (req,res)=>{
//     token = req.query.token;
//     console.log('Token' , token);
    

//     try{
//         var decoded = jwt.verify(token, constants.SECRET_KEY);
//         console.log('Token Valid');
//         res.send({
//             message: 'Valid'
//         })
//     }
//     catch(e){
//         console.log('Errror' , e.message);
//         res.send({
//             message: 'Expired'
//         })
        
//     }

//     console.log('Decoded===>' , decoded);
// })


module.exports = router;