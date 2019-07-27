const mongoose = require('mongoose');
const Schema = mongoose.Schema
const uniqueValidator = require('mongoose-unique-validator');
const userSchema = new Schema({
    userName : {
        type: String,
        required: [true , "Username is required"],
        unique : [true , 'Username already exist'] 
    },
    contactNumber: Number,
    password: {
        type: String,
        required: [true, "Password is required"]
    }
})
userSchema.plugin(uniqueValidator , { message: '{PATH} shuold be unique.' });
module.exports = mongoose.model("user", userSchema);