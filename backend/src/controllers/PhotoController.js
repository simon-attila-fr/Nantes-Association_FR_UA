const models = require("../models");

class PhotoController {
  static browse = (req, res) => {
    models.photo
      .findAll()
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static read = (req, res) => {
    models.photo
      .find(req.params.id)
      .then(([rows]) => {
        if (rows[0] == null) {
          res.sendStatus(404);
        } else {
          res.send(rows[0]);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static edit = (req, res) => {
    const image = req.file.path;
    const info = req.body;
    info.id = parseInt(req.params.id, 10);
    models.photo
      .insert(image, info)
      .then(([result]) => {
        res.status(201).send({ ...image, info, id: result.insertId });
      })
      .catch((err) => {
        console.error(err, image);
        res.sendStatus(500);
      });
  };
}

module.exports = PhotoController;
