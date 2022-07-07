const express = require("express");
const multer = require("multer");
const upload = multer({ dest: "public/assets/images" });
const { PhotoController } = require("../controllers");

const router = express.Router();

router.get("/img/:id", PhotoController.read);
router.put("/img/upload/:id", upload.single, PhotoController.edit);

module.exports = router;