import express from "express";
import {deleteUserByid, getAllUser,getAllcontact, updateUserById} from "../../controller/Admin/adminController.js"
import authmiddleware from "../../Middleware/authMiddleware.js";
import addminMiddleware from "../../Middleware/adminMiddleware.js"
const adminRouter = express.Router();



adminRouter.route('/users').get(authmiddleware,addminMiddleware,getAllUser)
adminRouter.route('/contacts').get(authmiddleware,addminMiddleware,getAllcontact)
adminRouter.route('/users/delete/:id').delete(authmiddleware , addminMiddleware , deleteUserByid)
adminRouter.route('/users/update/:id').patch(authmiddleware,addminMiddleware,updateUserById)

export default adminRouter;
