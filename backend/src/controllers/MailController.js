require("dotenv").config();

const Mailjet = require("node-mailjet");

const { API_KEY, SECRET_KEY, RECEIVER_MAIL } = process.env;
const mailjet = Mailjet.apiConnect(API_KEY, SECRET_KEY);

class MailController {
  static send = (req, res) => {
    const { firstname, lastname, email, subject, message } = req.body;
    const request = mailjet.post("send", { version: "v3.1" }).request({
      Messages: [
        {
          From: {
            Email: RECEIVER_MAIL,
            Name: `${firstname} ${lastname}`,
          },
          To: [
            {
              Email: RECEIVER_MAIL,
              Name: "Attila",
            },
          ],
          Subject: subject,
          TextPart: "Message à l'asso",
          HTMLPart: `<p>Le message suivant a été envoyé par<br>${firstname} ${lastname}, adresse mail: ${email}<br>via le formulaire contact de l'association:</p><br /><p>${message}</p>`,
        },
      ],
    });

    request
      .then(() => {
        res.status(200).json({
          status: "success",
          message: "Message nevoyé",
        });
      })
      .catch((err) => {
        console.error(err);
        res.status(424).json({
          status: "échec",
          message: "Problème lors de l'envoi",
        });
      });
  };
}

module.exports = MailController;
