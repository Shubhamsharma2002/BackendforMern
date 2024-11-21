import express from "express";
import {login, register} from "../../controller/UserController.js";
import {signupSchema ,loginSchema} from "../../Validators/auth-validators.js"
import validete from "../../Middleware/validate-middleware.js";
const userRouter = express.Router();


userRouter.route('/registaer').post(
    validete(signupSchema),
    register
)
userRouter.route('/login').post(
    validete(loginSchema),
    login
)

export default userRouter;