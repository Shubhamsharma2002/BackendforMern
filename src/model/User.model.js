import mongoose ,{Schema} from "mongoose";
import jwt from "jsonwebtoken";
const userSchema = new Schema(
    {
        fullname:{
            type:String,
            required:true,
           
        },
        email:{
            type:String,
            required:true,
            unique:true,
            lowercase:true,
            trim:true,
        },
        phone:{
            type:String,
            required:true,
           
        },
       
        password:{
            type:String,
            required:[true,'password is required']
        },
        isAdmin:{
            type:Boolean,
            default:false
        }
        

    },{
        timestamps:true
    }

)




userSchema.methods.genrateToken  = async function(){
     try {
        return jwt.sign(
            {
                _id: this._id,
                email: this.email,
                isAdmin:this.isAdmin
            },
            process.env.ACCESS_TOKEN_SECRET,
            {
                expiresIn: process.env.ACCESS_TOKEN_EXPIRY 
            }
        )
     } catch (error) {
        console.log(error);
     }
}
export const User = mongoose.model("User", userSchema);