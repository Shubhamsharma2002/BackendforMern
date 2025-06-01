import express from "express";
import {deleteContact, deleteUserByid, getAllUser,getAllcontact, getUserByID, updateUserById} from "../../controller/Admin/adminController.js"
import authmiddleware from "../../Middleware/authMiddleware.js";
import addminMiddleware from "../../Middleware/adminMiddleware.js"
// admin router
const adminRouter = express.Router();



adminRouter.route('/users').get(authmiddleware,addminMiddleware,getAllUser)
adminRouter.route('/contacts').get(authmiddleware,addminMiddleware,getAllcontact)
adminRouter.route('/contacts/delete/:id').delete(authmiddleware,addminMiddleware,deleteContact)
adminRouter.route('/users/delete/:id').delete(authmiddleware , addminMiddleware , deleteUserByid)
adminRouter.route('/users/update/:id').patch(authmiddleware,addminMiddleware,updateUserById)
adminRouter.route('/users/:id').get(authmiddleware,addminMiddleware,getUserByID)

export default adminRouter;
