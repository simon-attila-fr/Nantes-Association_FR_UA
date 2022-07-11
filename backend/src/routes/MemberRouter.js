const express = require("express");
const { MemberController } = require("../controllers");

const router = express.Router();

router.get("/", MemberController.browse);
router.get("/:id", MemberController.read);
router.put("/:id", MemberController.edit);
router.post("/", MemberController.add);
router.delete("/:id", MemberController.delete);

module.exports = router;
