import { User } from "../model/User.model.js";


const register = async(req,res)=>{
    
   try {
       const {fullname,email,phone,password} = req.body;
          console.log(req.body)
       const emailExist = await User.findOne({email});
       if(emailExist){
          res.status(400).json({msg:"emailis lardey reistred with the company"})
       }

       const user = await User.create({fullname,email,phone,password});
      
         res.status(201).json({msg:user})
   
        
         
   } catch (error) {
      console.log(error);
   }
}



export {register};