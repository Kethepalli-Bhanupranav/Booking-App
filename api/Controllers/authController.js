import User from "../models/User.js";
import bcrypt from "bcryptjs"; 
import { creatError } from "../utils/error.js"; 
import jwt from "jsonwebtoken";
export const register = async (req,res,next)=>{
     try{
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password,salt);
        const newUser = new User({
            username:req.body.username,
            email:req.body.email,
            password:hash,
        })
        await newUser.save()
        res.status(200).send("User has been Created.")
     }catch(err){
        next(err);
     }
}

export const login = async (req,res,next)=>{
    try{
       const user =await  User.findOne({username:req.body.username})
       if(!user) 
        return next(creatError("404","User not found"))
        const ispasswordcorrect = await bcrypt.compare(req.body.password,user.password)
       if(!ispasswordcorrect) 
        return next(creatError("400","Wrong Password or Username"))
     const token = jwt.sign({id:user._id,isadmin:user.isadmin},process.env.JWT);
    const {password,isadmin, ...otherdetails} = user._doc;
       res.cookie("access_token",token,{
        httpOnly:true,
        
       }).status(200).json({...otherdetails}) 
    }catch(err){
       next(err);
    }
}