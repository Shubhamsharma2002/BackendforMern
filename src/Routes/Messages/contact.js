import express from "express";
import contact from "../../controller/ContactController.js";

const contactRouter = express.Router();


contactRouter.route('/contact').post(
    contact
)

export default contactRouter;