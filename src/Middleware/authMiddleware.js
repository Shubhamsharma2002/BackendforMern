import jwt from "jsonwebtoken";
import { User } from "../model/User.model.js";
const authmiddleware = async(req,res,next)=>{
     const token = req.header("Authorization");
     if(!token){
        return res
        .status(401)
        .json({message:"Unauthrozied HTTP , Tokn not provided"})
     }


     try {
       
        const isverfied = jwt.verify(token,process.env.ACCESS_TOKEN_SECRET);
        const userData = await User.findOne({email:isverfied.email}).select({password:0})

        console.log(userData);
        req.user = userData;
        req.token = token;
        req.userId = userData._id;
        next();
     } catch (error) {
        return res
        .status(401)
        .json({message:"Unauthrozied HTTP , Tokn not provided"})
     }
     
       

}

export default authmiddleware;