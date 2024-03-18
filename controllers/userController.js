const User = require('../models/User');
const hashPassword = require('../utils/hashedPassword')

exports.createUser = async(req,res)=>{
    try{
        const { username, password} = req.body;
        const hashedPassword = await hashPassword(password);
        const user = new User({ username,password,hashPassword});
        await user.save();
        res.status(201).json({message:'User is created successfully'});
    }catch(error)
    {
        res.status(500).json({error:error.message});
    }
};