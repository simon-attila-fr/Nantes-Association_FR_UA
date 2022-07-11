const models = require("../models");
const buildTranslation = require("../services/buildTranslation");

class TraductionController {
  static browse = (req, res) => {
    models.traduction
      .findAll()
      .then(([rows]) => {
        const traduction = buildTranslation(rows);
        res.send(traduction);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

module.exports = TraductionController;
