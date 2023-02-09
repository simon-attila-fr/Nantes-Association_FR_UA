const express = require("express");
const { authorization, isAdmin } = require("../controllers/UserController");
const {
  validateRegister,
  validateEmail,
} = require("../validators/RegisterValidator");
const { UserController } = require("../controllers");

const router = express.Router();

router.post("/register", validateRegister, UserController.register);
router.post("/login", UserController.login);
router.get("/", authorization, isAdmin, UserController.browse);
router.get("/logout", authorization, UserController.logout);
router.put(
  "/modifyemail/:id",
  authorization,
  validateEmail,
  UserController.modifyEmail
);
// router.get("/modifypassword", authorization, UserController.logout);
// router.get("/deleteaccount", authorization, UserController.logout);

module.exports = router;
