import mongoose ,{Schema} from "mongoose";

const userSchema = new Schema(
    {
        fullname:{
            type:String,
            required:true,
            trim:true,
            index:true
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

export const User = mongoose.model("User", userSchema);