const express = require("express");
const { authorization, isAdmin } = require("../controllers/UserController");
const { UserController } = require("../controllers");

const router = express.Router();

router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.get("/", authorization, isAdmin, UserController.browse);
router.get("/logout", authorization, UserController.logout);

module.exports = router;
