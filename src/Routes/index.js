import express from "express";
import userRouter from "./Auth/userAuth.js";
const router = express.Router();

router.use('/user',userRouter);


export default router;