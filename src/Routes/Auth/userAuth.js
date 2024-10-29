import express from "express";
import {register} from "../../controller/UserController.js";
const userRouter = express.Router();


userRouter.route('/registaer').post(
    register
)

export default userRouter;