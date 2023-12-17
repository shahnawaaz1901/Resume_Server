import sendMail from "./sendmail.nodemailer.js";

export default class SendMailController {
  async sendMail(req, res) {
    const { email, name } = req.body;
    if (!email) {
      res.status(404).send("Please Provide Email Address");
    }

    await sendMail(email, name);
    res.status(200).send("Query Recieved !!");
  }
}
