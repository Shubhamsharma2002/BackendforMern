import { User } from "../../model/User.model.js";
import {Contact} from "../../model/contact.model.js";
const getAllUser = async(req,res)=>{
  try {
      const user = await User.find({}, {password:0});
      if(!user || user.length === 0){
        return res.status(404).json({message:"No User found"});
      }
      return res.status(200).json(user);
  } catch (error) {
    next(error);
  }
}

const getAllcontact = async(req,res)=>{
    try {
         const msg = await Contact.find();
         if(!msg || msg.length === 0){
            return res.status(404).json({message:"No msg found"});
          }
          return res.status(200).json(msg);
    } catch (error) {
        next(error);
    }
}



export {getAllUser,getAllcontact}