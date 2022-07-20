/* eslint-disable no-restricted-syntax */
const emailer = require("../services/mailer");

class MailController {
  static send = (req, res) => {
    const { firstname, lastname, email, subject, message } = req.body;

    emailer.sendMail(
      {
        firstname,
        lastname,
        from: email,
        to: "my-personnal-email@gmail.com",
        subject,
        text: message,
        html: `<strong>${message}</strong>`,
      },
      (err) => {
        if (err) {
          res.atatus(424).json({
            status: "success",
            message: "Problème lors de l'envoi",
          });
        } else {
          res.atatus(200).json({
            status: "success",
            message: "Message nevoyé",
          });
        }
      }
    );
  };
}

module.exports = MailController;
