const express = require("express");
const { authorization } = require("../controllers/UserController");
const { UserController } = require("../controllers");

const router = express.Router();

router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.get("/", authorization, UserController.browse);
router.get("/logout", authorization, UserController.logout);
// router.put("/users/:id", UserController.edit);
// router.delete("/users/:id", UserController.delete);

module.exports = router;
