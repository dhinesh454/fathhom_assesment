const jwt =require('jsonwebtoken');

const User=require('../models/users');


exports.authenticate=async (req,res,next)=>{
    try {

        const token = req.header('Authorization');
  
         const user=jwt.verify(token,process.env.JSW_WEB_TOKEN_SECRETKEY)
         console.log('userId>>>>',user.userId);
         const data=await User.findById(user.userId);
         console.log(data);
         req.user=data;   ////very important line req.user used next line as wll 
         next();            ////if not next given it will not going into next 
    } catch (error) {
        console.log(error);
        return res.status(401).json({success:false})
    
    }
}