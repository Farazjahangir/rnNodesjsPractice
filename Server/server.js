const express = require('express')
const app = express()

const constants = require('./config/constants')
require('./config/db')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/user", require("./routes/User/User"));


app.listen(constants.PORT , ()=>{
    console.log(`Server is running ${constants.PORT}`);
    
})