const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");
require("dotenv").config();
const htmlPath = path.join(__dirname, "/welcome.html");
const htmlContent = fs.readFileSync(htmlPath, "utf8");
const mailSender = async (email, title, body) => {
  try {
    let transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    let info = await transporter.sendMail({
      from: `Swiggy | Your best food Partner 🍔`,
      to: `${email}`,
      subject: `${title}`,
      html: body ? body : htmlContent,
    });
    console.log(info);
    return info;
  } catch (err) {
    console.log("error in sending email ", err);
    return err;
  }
};
module.exports = mailSender;
