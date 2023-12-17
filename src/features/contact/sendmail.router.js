import express from "express";
import SendMailController from "./sendmail.controller.js";

const mailRouter = express.Router();
const mailController = new SendMailController();

mailRouter.post("/sendMail", mailController);

export default mailRouter;
