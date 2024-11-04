import { User } from "../model/User.model.js";
import bcrypt from "bcryptjs";

const register = async(req,res)=>{
    
   try {
       const {fullname,email,phone,password} = req.body;
          console.log(req.body)
       const emailExist = await User.findOne({email});
       if(emailExist){
          res.status(400).json({msg:"emailis lardey reistred with the company"})
       }
      const saltRound = 10;
      const hashed_Password = await bcrypt.hash(password,saltRound);
       const user = await User.create({fullname,email,phone,password:hashed_Password});
      
         res.status(201).json({msg:user , token : await user.genrateToken()})
   
        
         
   } catch (error) {
      console.log(error);
   }
}



export {register};