import { User } from "../model/User.model.js";
import bcrypt from "bcryptjs";

const register = async(req,res)=>{
    
   try {
       const {fullname,email,phone,password} = req.body;
          console.log(req.body)
       const emailExist = await User.findOne({email});
       if(emailExist){
          res.status(400).json({msg:"  email alardey reistred  with the our  company"})
       }
      const saltRound = 10;
      const hashed_Password = await bcrypt.hash(password,saltRound);
       const user = await User.create({fullname,email,phone,password:hashed_Password});
      
         res.status(201).json(
            {
            msg:"user created sucessfully" , 
            token : await user.genrateToken(),
            userId : user._id.toString()
         }
      )
   
        
         
   } catch (error) {
      console.log(error);
   }
}




const login = async(req,res)=>{
       try {
               const {email,password} = req.body;
               const validEmail = await User.findOne({email});
               if(!validEmail){
                   console.log(`enter email is not a valid email ${req.body.email}`);  
                   return res.status(400).json({
                     message:"Invalid Credentials"
                   }) ;
               }
             const validPassword = await bcrypt.compare(password, validEmail.password)
             if(validPassword){
               res.status(200).json(
                  {
                  msg:"Login sucessfully" , 
                  token : await validEmail.genrateToken(),
                  userId : validEmail._id.toString()
               }
            )
             }else{
               return res.status(401).json({
                  message:"Invalid email or password"
                }) ;
             }

       } catch (error) {
         console.log("error in login")

       }
}


export {register,login};