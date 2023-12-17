import nodemailer from "nodemailer";

const sendMail = async (email, name) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: "shaan.ansari1901@gmail.com", pass: "pzut lmfk znow xnfd" },
  });

  const object = {
    from: `Shahnawaaz Ansari`,
    to: email,
    from: "Shahnawaaz Ansari",
    subject: "Query Recieved",
    text: `Thankyou ${name} for Reaching Out, We will Connect with You within 24 hours`,
  };

  try {
    await transporter.sendMail(object);
    console.log("Mail Sent Successfully !");
  } catch (error) {
    console.log("Mail not sent !");
  }
};

export default sendMail;
