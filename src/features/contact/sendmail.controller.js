export default class SendMailController {
  sendMail(req, res) {
    const { email, name } = req.body;
    if (!email) {
      res.status(404).send("Please Provide Email Address");
    }
  }
}
