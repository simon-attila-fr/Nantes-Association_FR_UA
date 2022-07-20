require("dotenv").config();
const nodemailer = require("nodemailer");

const mailer = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "1d8bd59c09e6d0",
    pass: "363cf342a9f4cc",
  },
});

module.exports = mailer;
