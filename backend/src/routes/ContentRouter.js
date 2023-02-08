const express = require("express");
const { authorization, isAdmin } = require("../controllers/UserController");
const { ContentController } = require("../controllers");

const router = express.Router();

router.get("/", ContentController.browse);
router.get("/home", authorization, isAdmin, ContentController.browsehome);
router.get("/involve", authorization, isAdmin, ContentController.browseinvolve);
router.get("/other", authorization, isAdmin, ContentController.browseother);
router.get("/:id", authorization, isAdmin, ContentController.read);
router.put("/:id", authorization, isAdmin, ContentController.edit);

module.exports = router;
