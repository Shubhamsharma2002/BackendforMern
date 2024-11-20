import express from "express";
import userRouter from "./Auth/userAuth.js";
import contactRouter from "./Messages/contact.js";
const router = express.Router();

router.use('/user', userRouter);
router.use('/form', contactRouter)

export default router;