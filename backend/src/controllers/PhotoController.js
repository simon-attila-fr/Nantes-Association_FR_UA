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
    const photo = req.body;
    photo.photo_url = req.file.path;
    photo.photo_url = `http://localhost:5000/${photo.photo_url
      .replace(/\\/g, "/")
      .replace("public/", "")}`;
    photo.id = parseInt(req.params.id, 10);
    photo.updated_at = new Date(Date.now()).toLocaleDateString();

    // TODO validations (length, format...)

    models.photo
      .update(photo)
      .then(([result]) => {
        if (result.affectedRows === 0) {
          res.sendStatus(404);
        } else {
          res.sendStatus(204);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

module.exports = PhotoController;
