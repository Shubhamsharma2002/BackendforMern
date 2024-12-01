
import { z } from "zod";
// zod validation is vaery impressive;
const signupSchema = z.object({
    // fullname validation
    fullname : z.string({required_error:"Fullname is required"})
    .trim()
    .min(3, {message: "Name must be atleast 3 chars"})
    .max(255, {message: "Name must not be more than 255  charcters"}),
//  email validation
    email: z 
    .string({required_error:"Email is required"})
    .trim()
    .email({message: "Invalid email address"})
    .min(3,{message:"Email must be atleast 3 chracter"})
    .max(255, {message:"Email must not be more than the 255 chartcer"}),
//  phone number validation
    phone: z
    .string({required_error:"phone is required"})
    .trim()
    .min(10,{message:"Phone number is at least 10 charcter"})
    .max(10, {message:"Phone number is not more than 10 charcter"}),

    // password validation 
    password:z
    .string({required_error:"Password is required"})
    .trim()
    .min(5,{message:"pasword is atleast 5 charcter"})
    .max(1024,{message:"passwor is not more than the 1024 character"})
})


const loginSchema = z.object({
    // email validation
    email: z 
    .string({required_error:"Email is required"})
    .trim()
    .email({message: "Invalid email address"})
    .min(3,{message:"Email must be atleast 3 chracter"})
    .max(255, {message:"Email must not be more than the 255 chartcer"}),

    // password validation 

    password:z
    .string({required_error:"Password is required"})
    .trim()
    .min(5,{message:"pasword is atleast 5 charcter"})
    .max(1024,{message:"passwor is not more than the 1024 character"})
})

export  {signupSchema, loginSchema};