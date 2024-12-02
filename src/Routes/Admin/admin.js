import express from "express";
import {getAllUser,getAllcontact} from "../../controller/Admin/adminController.js"
import authmiddleware from "../../Middleware/authMiddleware.js";
import addminMiddleware from "../../Middleware/adminMiddleware.js"
const adminRouter = express.Router();



adminRouter.route('/users').get(authmiddleware,addminMiddleware,getAllUser)
adminRouter.route('/contacts').get(authmiddleware,addminMiddleware,getAllcontact)


export default adminRouter;
