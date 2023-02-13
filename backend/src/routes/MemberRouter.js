const express = require("express");
const { authorization, isAdmin } = require("../controllers/UserController");
const { MemberController } = require("../controllers");

const router = express.Router();

router.get("/", authorization, isAdmin, MemberController.browse);
router.get("/:id", authorization, isAdmin, MemberController.read);
router.put("/:id", authorization, isAdmin, MemberController.edit);
router.post("/", authorization, isAdmin, MemberController.add);
router.delete("/:id", authorization, isAdmin, MemberController.delete);

module.exports = router;
