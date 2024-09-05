const jwt = require('jsonwebtoken');






//function genberatyes tokens when usr successfully login call by loginpost
const generateAccessToken=(id,name,email)=>{
       return jwt.sign({userId:id,name:name,email},process.env.JSW_WEB_TOKEN_SECRETKEY)
    }


module.exports={generateAccessToken}    