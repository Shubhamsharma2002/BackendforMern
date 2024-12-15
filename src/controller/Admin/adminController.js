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
const getUserByID = async(req,res)=>{
       try {
           const id = req.params.id;
            const data = await User.findOne({_id:id},{password:0});
            return res.status(200).json(data)
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
// delete user
const deleteUserByid = async(req,res)=>{
       try {
           const id = req.params.id;
            await User.deleteOne({_id:id});
            return res.status(200).json({message:"user deleted sucessfully"})
       } catch (error) {
        next(error);
       }
}

const updateUserById = async(req,res)=>{
      try {
          const id = req.params.id;
          const updateUserdata = req.body;

          const updateData = await User.updateOne(
            {_id:id}, 
            {
              $set:updateUserdata
            })

           return res.status(200).json(updateData);
      } catch (error) {
        next(error);
      }
}
export {getAllUser,getAllcontact,deleteUserByid,updateUserById, getUserByID}