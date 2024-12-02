import express from "express";
import userRouter from "./Auth/userAuth.js";
import contactRouter from "./Messages/contact.js";
import adminRouter from "./Admin/admin.js";
const router = express.Router();

router.use('/user', userRouter);
router.use('/form', contactRouter)
router.use('/admin', adminRouter)

export default router;