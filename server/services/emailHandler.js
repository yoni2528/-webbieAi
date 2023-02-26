import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config({
  path: "./config.env",
});

const sendEmail = async (to, from, message, name) => {
  // 1 create a transporter

  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
      user: "webbieaihelp@gmail.com",
      pass: process.env.GOOGLE_PASS,
    },
  });
  //2 define the email optiosn
  const mailOptions = {
    from,
    to,
    subject: `You received new message from ${from} `,
    html: `<div> <h4><strong>You received new message from</strong> ${name} </h4> </br> <p> Message : ${message} \n this message came from webbieAi server </p> </div>`,
  };
  //3 send the email
  await transporter.sendMail(mailOptions);
};

export default sendEmail;
