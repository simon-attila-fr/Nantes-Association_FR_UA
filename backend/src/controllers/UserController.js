const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const models = require("../models");

class UserController {
  static register = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).send("Vous devez entrer un email et un mot de passe");
    }

    try {
      const hash = await argon2.hash(password);
      models.user
        .insert({
          email,
          password: hash,
        })
        .then(([result]) => {
          res.status(201).send({ id: result.insertId, email });
        })
        .catch((err) => {
          console.error(err);
          res.status(500).send({
            error: err.message,
          });
        });
    } catch (err) {
      res.status(500).send("Erreur lors du chiffrement du mot de passe");
    }
  };

  static login = (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).send("Vous devez entrer un email et un mot de passe");
    }

    models.user
      .findByMail(email)
      .then(async ([rows]) => {
        if (rows[0] == null) {
          res
            .status(403)
            .send("L'email ou le mot de passe ne sont pas valides");
        } else {
          const { id, email: mail, password: hash } = rows[0];

          try {
            if (await argon2.verify(hash, password)) {
              const token = await jwt.sign(
                { id },
                process.env.JWT_AUTH_SECRET,
                { expiresIn: "1h" }
              );
              res
                .cookie("access_token", token, {
                  httpOnly: true,
                  secure: process.env.NODE_ENV === "production",
                })
                .status(200)
                .send({ id, mail });
            } else {
              res
                .status(403)
                .send("L'email ou le mot de passe ne sont pas valides");
            }
          } catch (err) {
            res.status(500).send(`Erreur Interne avec Argon ${err}`);
          }
        }
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send({
          error: err.message,
        });
      });
  };

  static browse = (req, res) => {
    models.user
      .findAll()
      .then(([rows]) => {
        res.status(200).send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send({
          error: err.message,
        });
      });
  };

  static authorization = (req, res, next) => {
    const token = req.cookies.access_token;
    if (!token) {
      return res.sendStatus(401);
    }
    try {
      const data = jwt.verify(token, process.env.JWT_AUTH_SECRET);
      req.userId = data.id;
      req.userRole = data.role;
      return next();
    } catch {
      return res.sendStatus(401);
    }
  };

  // eslint-disable-next-line consistent-return
  static isAdmin = (req, res, next) => {
    if (req.userRole === "ROLE_ADMIN") {
      return next();
    }
    res.sendStatus(403);
  };

  static logout = (req, res) => {
    res.clearCookie("access_token").sendStatus(204);
  };

  static edit = (req, res) => {
    const user = req.body;

    user.id = parseInt(req.params.id, 10);

    models.user
      .update(user)
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

  static delete = (req, res) => {
    models.user
      .delete(req.params.id)
      .then(() => {
        res.sendStatus(204);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

module.exports = UserController;
