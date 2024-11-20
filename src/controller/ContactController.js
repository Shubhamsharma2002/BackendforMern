
import {Contact} from "../model/contact.model.js";
const contact = async(req,res)=>{
       try {

        const response = req.body;
        await Contact.create(response);
        return res.status(201).json({
            message:"messgae send sucessfully"
          }) ;

        
       } catch (error) {
        return res.status(401).json({
            message:"getting error to send messgae ----->"
          }) ;
       }
}


export default contact;