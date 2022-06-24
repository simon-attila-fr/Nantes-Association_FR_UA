const express = require("express");
const { ContentController } = require("../controllers");

const router = express.Router();

router.get("/", ContentController.browse);
router.get("/:id", ContentController.read);
router.put("/:id", ContentController.edit);

module.exports = router;