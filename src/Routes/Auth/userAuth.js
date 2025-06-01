import express from "express";
import {login, register, user} from "../../controller/UserController.js";
import {signupSchema ,loginSchema} from "../../Validators/auth-validators.js"
import validete from "../../Middleware/validate-middleware.js";
import authmiddleware from "../../Middleware/authMiddleware.js";
// user router
const userRouter = express.Router();


userRouter.route('/registaer').post(
    validete(signupSchema),
    register
)
userRouter.route('/login').post(
    validete(loginSchema),
    login
)
userRouter.route('/user').get
( 
    authmiddleware,
    user
);

export default userRouter;